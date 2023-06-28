# sudo docker build -f ./dev.Dockerfile -t front-dev .

# sudo docker run -p 3000:3000 -v "$(pwd):/usr/src/app/" front-dev

sudo docker compose -f ./docker-compose.dev.yml up