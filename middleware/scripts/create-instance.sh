#!/bin/bash
echo "Creando instancia ... "

latest_container_id=$(docker ps --filter "name=instancia" -q)

docker stop latest_container_id

docker rm $(docker ps -a -q)

docker rmi instancia-mongo

cd ..

docker build -t instancia-mongo .

docker run --name instancia -p 2000:2000 -d --network host instancia-mongo

docker rm $(docker container ls --latest --quiet)

echo "Instancia creada !"
echo "-------------------------------------------------"