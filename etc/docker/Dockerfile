FROM node:10

MAINTAINER Craft-Code

WORKDIR /var/app
COPY package*.json ./
RUN npm install
COPY . ./

ROM base as development

ENV NODE_ENV=development
RUN npm install
CMD [ "npm", "app"]


FROM base as production

ENV NODE_ENV=production
RUN npm install --production
RUN npm run build
CMD [ "npm", "app"]