FROM node

WORKDIR /cinema

COPY ../dist/gateway/* .
COPY ../package.json .

RUN npm i

CMD node index.js