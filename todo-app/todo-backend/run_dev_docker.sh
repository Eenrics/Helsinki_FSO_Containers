# sudo docker build -f ./dev.Dockerfile -t back-dev .

# sudo docker run -p 3000:3000 -v "$(pwd):/usr/src/app/" back-dev

sudo docker compose -f ./docker-compose.dev.yml up