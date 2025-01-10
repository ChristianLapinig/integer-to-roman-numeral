# Test step 
FROM node:18-alpine AS test

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run test 

FROM node:18-alpine as production

WORKDIR /app

COPY package*.json .

RUN npm install

RUN npm i -g serve

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["serve", "-s", "dist"]
