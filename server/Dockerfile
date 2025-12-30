FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install --only=production && npx prisma generate
COPY . .

EXPOSE 3001

CMD ["node", "index.js"]
