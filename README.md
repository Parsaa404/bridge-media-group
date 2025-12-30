# Bridge Media Group

A React application for Bridge Media Group, featuring distinct sections for TV, Events, Property, and Iran Bridge.

## Getting Started

### Prerequisites

- Node.js (v18+)
- Docker & Docker Compose

### Local Development

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    cd bridge-media-group
    ```

2.  **Environment Setup:**
    
    Copy the example environment file to `.env`:
    ```bash
    cp .env.example .env
    ```
    
    Update `.env` with secure passwords. **Do not commit the `.env` file to version control.**
    
    You can generate strong secrets using:
    ```bash
    openssl rand -base64 32
    ```

3.  **Run with Docker:**
    ```bash
    docker compose up -d --build
    ```
    This will start the Frontend, Backend, Database, and Caddy reverse proxy.

4.  **Access the Application:**
    -   Main Site: `http://localhost` (or your configured domain)
    -   Subdomains: `http://tv.localhost`, `http://event.localhost`, etc.

### Manual Setup (Without Docker)

1.  **Frontend:**
    ```bash
    npm install
    npm run dev
    ```

2.  **Backend:**
    ```bash
    cd server
    npm install
    npx prisma migrate dev
    node index.js
    ```

## Deployment

Use the included helper scripts for easy deployment:

-   **Setup:** `./setup.sh` - interactive setup script.
-   **Update:** `./update.sh` - pulls latest changes and restarts services.

## Project Structure

-   `src/`: Frontend React application
-   `server/`: Backend Express application & Prisma ORM
-   `components/`: Reusable UI components
