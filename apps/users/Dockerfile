FROM node:22.12.0

WORKDIR /app

COPY ../../dist/apps/users /app
COPY package*.json ./

RUN npm i

EXPOSE 3000

CMD [ "node", "main.js" ]