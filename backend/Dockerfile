# Build step
FROM node:18-alpine AS build

WORKDIR /app

RUN pwd

COPY package*.json .

RUN cat package.json

RUN npm ci

COPY . .

RUN npm run build

# Test step 
FROM node:18-alpine AS test

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .

RUN npm run test 

# Production step
FROM node:18-alpine AS production 

WORKDIR /app

COPY package*.json .

RUN npm ci --only=production

COPY --from=build /app/dist ./dist

CMD ["npm", "start"]
