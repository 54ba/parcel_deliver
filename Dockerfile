FROM node:latest

WORKDIR /var/www/
COPY package.json .
RUN npm install
COPY . .
CMD npm start