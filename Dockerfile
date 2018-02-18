FROM node:9
COPY app /home/node
WORKDIR /home/node
CMD npm start
