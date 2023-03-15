FROM node:latest
RUN mkdir -p /usr/home24-app-server
WORKDIR /usr/home24-app-server
COPY . /usr/home24-app-server
RUN npm install
EXPOSE 3001
CMD ["npm", "start"]