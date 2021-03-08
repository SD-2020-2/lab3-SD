FROM node:14

# Create app directory
WORKDIR /usr/src/app

COPY instance-mongo/package*.json ./

RUN npm install

# Bundle app source
COPY instance-mongo/. .

EXPOSE 2000
CMD [ "node", "app.js" ]