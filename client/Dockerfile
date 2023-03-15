FROM node:latest
RUN mkdir -p /usr/home24-app-client
WORKDIR /usr/home24-app-client
COPY . /usr/home24-app-client
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]