FROM node

WORKDIR /cinema

COPY ../dist/movies/* .
COPY ../package.json .

RUN npm i

CMD node index.js