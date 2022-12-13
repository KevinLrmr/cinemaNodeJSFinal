## Introduction :
Ce projet est utilisé dans le cadre de ma formation Master MAALSI au CESI dont le but est d'introduire l'architecture dite de microservices, le tout fonctionnant gràce à des images customs, avec des containers lancés gràce à un docker-compose.yml.


## Liste des commandes utiles :
- npm install ***
- nodemon dist/index.js
- npm init --yes
- npm i --include=dev typescript axios dotenv express @types/node @types/express nodemon concurrently dotenv
- npm run start-dev
- npx tsc --init
- npm run serve
- npm run start-dev

## Comment installer le Projet ?

#### Si besoin, installer les nodes_modules :
    - npm i

#### build les 3 images des api, se placer à la racine du projet et lancer les 3 commandes suivantes  (bien garder le point à la fin des commandes) :
    - docker build -t gateway -f gateway/Dockerfile .
    - docker build -t catalog -f catalog/Dockerfile .
    - docker build -t movies -f movies/Dockerfile .


#### Utiliser le docker-compose pour créer les 3 containers et les connecter entre eux  :
    - docker-compose up

#### L'API est désormais accessible :
Possibilité d'utiliser Postman (en Get) ou directement le navigateur aux URL :
    - http://localhost:3000/movies
    - http://localhost:3000/movies/20
