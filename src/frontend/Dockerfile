FROM node:18-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run sass:compile

EXPOSE 8080

CMD ["npm", "run", "dev"]