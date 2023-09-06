FROM node:18-alpine3.16
RUN npm install -g typescript
WORKDIR /app
COPY package*.json yarn.lock ./
COPY .env .env
RUN yarn install
COPY . .
EXPOSE 5056