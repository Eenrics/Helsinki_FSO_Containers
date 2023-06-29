FROM node:16

WORKDIR /usr/src/app

COPY --chown=node:node todo-app/todo-backend/* .
RUN npm ci --only=production
# RUN npm ci

ENV DEBUG=playground:*

USER node
CMD npm start