FROM node

WORKDIR /cinema

COPY ../dist/catalog/* .
COPY ../package.json .

RUN npm i

CMD node index.js