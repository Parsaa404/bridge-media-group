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
docker compose up -d --build

echo "========================================"
echo "Update Complete! The site is now running the latest version."
echo "========================================"
