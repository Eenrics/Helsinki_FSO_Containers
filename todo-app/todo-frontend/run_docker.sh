sudo docker build -t front .

sudo docker container run --name front-container -p 8080:80 front