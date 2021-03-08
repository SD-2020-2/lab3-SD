#!/bin/bash
echo "Creando instancia ... "

latest_container_id=$(docker container ls --latest --quiet)

docker stop latest_container_id

docker rm $(docker ps -a -q)

docker rmi instancia-mongo

cd ..

docker build -t instancia-mongo .

docker run -p 2000:2000 -d --network host instancia-mongo

echo "Instancia creada !"
echo "-------------------------------------------------"