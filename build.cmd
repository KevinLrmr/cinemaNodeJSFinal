@echo off
echo "Build des images de Gateway, Catalog & Movies"
docker build -t gateway  -f gateway/Dockerfile .
docker build -t catalog -f catalog/Dockerfile .
docker build -t movies -f movies/Dockerfile .

echo "Lancement des containers"
docker-compose up

echo "Conteneurs lancés, URL accessible : http://localhost:3000/"