## Installation for Working Environment : Docker

[Install `docker` in Windows](https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe)

[Install `docker` in Mac(Apple)](https://desktop.docker.com/mac/main/arm64/Docker.dmg?utm_source=docker&utm_medium=webreferral&utm_campaign=docs-driven-download-mac-arm64)

##  Here's how you can install `make`

[Install `make` in Windows](https://stackoverflow.com/questions/32127524/how-to-install-and-use-make-in-windows)

[Install `make` in Linux](https://askubuntu.com/questions/161104/how-do-i-install-make)

## If you already installed `make`, you can run the project by typing

> make build-run


## if you haven't install `make`, follow this instruction from the root project

!!! Don't forget a dot at last of the command.

> cd ./server && docker build -t api-server .

> cd ./web && docker build -t react-web .

> docker-compose up

## Run on Local 

> it will run on localhost:3000

## if you can't access mysql

> docker-compose up -d

> docker-compose down -v
