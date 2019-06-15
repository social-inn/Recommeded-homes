# use ubuntu in container
FROM node:7.6-alpine

# create working directory
WORKDIR /app

COPY . /app

RUN npm install

RUN npm start

EXPOSE 3883
