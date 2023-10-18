FROM node:16-alpine3.12
RUN npm install -g @vue/cli
RUN mkdir /app
WORKDIR /app
COPY . /app
CMD [ "npm", "run", "dev" ]