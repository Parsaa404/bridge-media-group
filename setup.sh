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

# 3. Create Caddyfile dynamically
echo "-> Creating Caddyfile..."
cat > Caddyfile <<EOF
${DOMAIN_NAME} {
    reverse_proxy web:80
}
EOF

# 4. Run Docker Compose
echo "-> Building and starting containers..."
docker compose up -d --build

echo "========================================"
echo "Deployment Complete!"
echo "Your site should now be accessible at: https://${DOMAIN_NAME}"
echo "Note: Ensure your DNS 'A' record points to this server's IP."
echo "========================================"
