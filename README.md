# Gitar
Interactive guitar neck called gitar

![Gitar screenshot](https://raw.githubusercontent.com/ldronkers/gitar/master/gitar0-0-1.png)


# Build and run
$ docker build -t gitar .

$ docker run -d -p85:3000  -v$PWD/app:/home/node --name gitardev gitar
