# Here will be store "how to"s and some Dockerfiles/docker-compose examples.

## Run MongoDb server and client with Docker in different containers.

**Server**

`docker volume create --name mongodata`

`docker run -d -p 27017:27017 --name mongod -v mongodata:/data mongo mongod`

> Then just need to run `docker start mongod`, the line above does not need be repeated.

**Client**

`docker run -it mongo mongo IP:27017/data`
