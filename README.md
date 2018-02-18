interactive guitar neck called gitar

# Build and run
$ docker build -t gitar

$ docker run -d -p85:3000  -v$PWD/app:/home/node --name gitardev gitar
