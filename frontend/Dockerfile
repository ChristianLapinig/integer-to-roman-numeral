# Test step 
FROM node:18-alpine AS test

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .

RUN npm run test 

FROM node:18-alpine AS production

WORKDIR /app

COPY package*.json .

RUN npm ci

RUN npm i -g serve

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["serve", "-s", "dist"]
