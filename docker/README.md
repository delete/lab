# Here will be stored "how to"s and some Dockerfiles/docker-compose examples.

For more details, access the [Docker docs](https://docs.docker.com/):

- About volumes and mounting data: [https://docs.docker.com/engine/userguide/dockervolumes/](https://docs.docker.com/engine/userguide/dockervolumes/)

- About Dockerfile: [https://docs.docker.com/engine/reference/builder/](https://docs.docker.com/engine/reference/builder/)

- About build images: [https://docs.docker.com/engine/reference/commandline/build/](https://docs.docker.com/engine/reference/commandline/build/)

## Run MongoDb server and client with Docker in different containers.

**Server**

`docker volume create --name mongodata`

`docker run -d -p 27017:27017 --name mongod -v mongodata:/data mongo mongod`

> Then just need to run `docker start mongod`, the line above does not need be repeated.

**Client**

`docker run -it mongo mongo IP:27017/data`

## Share node_modules with various projects(generic Dockerfile).

> OBS: Use this tip for dev environment, only.

First create a generic Dockerfile with:

```
from node:argon

RUN mkdir -p /install

ENV NODE_PATH=/install/node_modules 

RUN mkdir /app

WORKDIR /app/
```

Then build an image running `docker build -t node-app .`

Create a volume to store all node modules(to all projects):

`docker volume create --name nodemodules`

From the root of your project, access the shell to copy the package file and install the modules:

`docker run -it -v nodemodules:/install -v $(pwd):/app node-app /bin/bash`

`cp package.json /install && cd /install && npm install && exit`

Now you can run your app, using something like this:

`docker run -it -v nodemodules:/install -v $(pwd):/app node-app node index.js`
