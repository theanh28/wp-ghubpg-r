FROM node:lts-alpine

WORKDIR /

COPY package.json package.json
RUN npm i

COPY . .
RUN npm run build
RUN npm i -g serve

EXPOSE 5000
CMD npm start