# Gitar
Interactive guitar neck called Gitar

![Gitar screenshot](https://raw.githubusercontent.com/ldronkers/gitar/master/gitar0-0-1.png)


# Build and run
$ docker build -t gitar .

$ docker run -d -p85:3000  -v$PWD/app:/home/node --name gitardev gitar

# Run tests
$ docker run -it -v$PWD:/home/node -w/home/node gitar npm test -- --ci --coverage src
