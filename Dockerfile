FROM node:alpine

USER node

RUN mkdir /home/node/app
WORKDIR /home/node/app
COPY . /home/node/app
RUN npm install

EXPOSE 8080
CMD [ "npm", "start" ]
