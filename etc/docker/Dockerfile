FROM node:10 as base

MAINTAINER Craft-Code

WORKDIR /var/app
COPY package*.json ./
COPY . ./

FROM base as development

ENV NODE_ENV=development
RUN npm install
CMD [ "npm", "run", "app"]


FROM base as production

ENV NODE_ENV=production
RUN npm install --production
CMD [ "npm", "run", "app"]