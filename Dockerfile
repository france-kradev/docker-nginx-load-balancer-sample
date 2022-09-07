FROM node:16.15.0 AS base

WORKDIR /usr/src/app
COPY package.json ./

RUN npm install
COPY . .

ENV NODE_PATH=/usr/src/app
EXPOSE 3000
CMD [ "npm", "start" ]
