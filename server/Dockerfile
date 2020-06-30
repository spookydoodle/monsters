FROM node

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . . 

EXPOSE 4000

CMD "node" "index.js"