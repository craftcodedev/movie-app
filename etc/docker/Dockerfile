FROM node:10 as base

MAINTAINER Craft-Code

WORKDIR /var/app
COPY package*.json ./


FROM base as development

COPY . ./
ENV NODE_ENV=development
RUN npm install
CMD [ "npm", "run", "app"]


FROM base as production

COPY src ./src
ENV NODE_ENV=production
RUN npm install --production
CMD [ "npm", "run", "app"]