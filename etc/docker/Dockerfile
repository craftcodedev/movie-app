FROM node:10

MAINTAINER Craft-Code

WORKDIR /var/app

COPY package*.json ./

RUN npm install

COPY . ./

CMD [ "node", "app"]