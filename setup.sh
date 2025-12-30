#!/bin/bash

# Exit on error
set -e

echo "========================================"
echo "   Bridge Media Group - VPS Auto Setup  "
echo "========================================"

# 1. Ask for Domain
read -p "Please enter your domain name (e.g., example.com): " DOMAIN_NAME

if [ -z "$DOMAIN_NAME" ]; then
  echo "Error: Domain name is required."
  exit 1
fi

echo "-> Configuring for domain: $DOMAIN_NAME"

# 2. Check/Install Docker
if ! command -v docker &> /dev/null; then
    echo "-> Docker not found. Installing Docker..."
    curl -fsSL https://get.docker.com -o get-docker.sh
    sh get-docker.sh
    rm get-docker.sh
    echo "-> Docker installed successfully."
else
    echo "-> Docker is already installed."
fi

# 3. Setup Environment Variables
echo "-> Configuring Environment Variables..."

# Generate secure credentials
MYSQL_PASSWORD=""
INIT_KEY=""

if [ -f .env ]; then
    echo "Loading existing credentials from .env..."
    # Load vars from .env
    export $(grep -v '^#' .env | xargs)
    MYSQL_PASSWORD=$MYSQL_ROOT_PASSWORD
    INIT_KEY=$INIT_API_KEY
fi

# If credentials missing, generate them
if [ -z "$MYSQL_PASSWORD" ]; then
    echo "Generating new credentials..."
    MYSQL_PASSWORD=$(openssl rand -base64 32)
    INIT_KEY=$(openssl rand -base64 32)
    
    echo "Creating .env file..."
    cat > .env <<EOF
MYSQL_ROOT_PASSWORD=${MYSQL_PASSWORD}
MYSQL_DATABASE=bridge_db
DATABASE_URL="mysql://root:${MYSQL_PASSWORD}@db:3306/bridge_db"
PORT=3001
INIT_API_KEY=${INIT_KEY}
EOF
fi

# Always update server/.env to stay in sync
echo "Updating server/.env..."
mkdir -p server
cat > server/.env <<EOF
DATABASE_URL="mysql://root:${MYSQL_PASSWORD}@db:3306/bridge_db"
PORT=3001
INIT_API_KEY=${INIT_KEY}
EOF

# 4. Create Caddyfile dynamically for Main Domain and Subdomains
echo "-> Creating Caddyfile..."
cat > Caddyfile <<EOF
${DOMAIN_NAME} {
    reverse_proxy web:80
}

tv.${DOMAIN_NAME} {
    reverse_proxy web:80
}

event.${DOMAIN_NAME} {
    reverse_proxy web:80
}

property.${DOMAIN_NAME} {
    reverse_proxy web:80
}

iran.${DOMAIN_NAME} {
    reverse_proxy web:80
}
EOF

# 5. Run Docker Compose
echo "-> Building and starting containers..."
docker compose up -d --build

# 6. Wait for Database to be ready
echo "-> Waiting for database to initialize (15s)..."
sleep 15

# 7. Run Prisma Migrations
echo "-> Running Database Migrations..."
docker compose exec backend npm install
docker compose exec backend npx prisma generate
docker compose exec backend npx prisma migrate deploy

echo "========================================"
echo "Deployment Complete!"
echo "Your site should now be accessible at: https://${DOMAIN_NAME}"
echo "Subdomains: tv.${DOMAIN_NAME}, event.${DOMAIN_NAME}, etc."
echo "Note: Ensure your DNS A records (wildcard *.${DOMAIN_NAME} or specific ones) point to this server."
echo "========================================"
