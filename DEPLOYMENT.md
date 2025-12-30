# VPS Deployment (Automated)

This guide uses a script to automatically set up Docker, SSL, and the application.

## Prerequisites

1.  A valid domain name (e.g., `example.com`) pointing to your server's IP address.
    *   **Crucial**: Go to your domain registrar and create an **A Record** with `@` as the name and your **VPS IP** as the value using a generic DNS provider or Cloudflare (Proxy OFF/Grey Cloud).

## Installation

1.  **Clone the Repository**:
    Connect to your VPS and run:
    ```bash
    git clone https://github.com/Parsaa404/bridge-media-group.git
    cd bridge-media-group
    ```

2.  **Make Script Executable**:
    ```bash
    chmod +x setup.sh
    ```

3.  **Run the Setup Script**:
    ```bash
    ./setup.sh
    ```

4.  **Enter Domain**:
    The script will ask for your domain. Enter it (e.g., `example.com`) and press Enter.

## What does the script do?

*   Installs Docker (if missing).
*   Configures **Caddy** (a modern web server) to handle SSL automatically.
*   Builds and starts your application.

Your site will be live at `https://your-domain.com` in seconds!
