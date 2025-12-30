#!/bin/bash

# Exit on error
set -e

echo "========================================"
echo "      Bridge Media Group - Updater      "
echo "========================================"

# 1. Pull latest changes
echo "-> Pulling latest changes from GitHub..."
git pull origin main

# 2. Rebuild and restart containers
echo "-> Rebuilding and restarting containers..."
docker compose down
docker compose up -d --build

# 3. Run Migrations (if any)
echo "-> Checking for database migrations..."
# Wait for backend container to be healthy
echo "-> Waiting for backend container to be ready..."
timeout=60
elapsed=0
until [ "$(docker inspect -f '{{.State.Health.Status}}' bridge-backend 2>/dev/null)" = "healthy" ] || [ $elapsed -ge $timeout ]; do
    sleep 2
    elapsed=$((elapsed + 2))
done

# Simple check to see if backend container is running
if [ "$(docker ps -q -f name=bridge-backend)" ]; then
    echo "-> Running Prisma migrations..."
    docker compose exec -T backend npx prisma migrate deploy
    echo "-> Migrations applied (if any)."
else
    echo "Warning: Backend container is not running. Skipping migrations."
fi

echo "========================================"
echo "Update Complete! The site is now running the latest version."
echo "========================================"
