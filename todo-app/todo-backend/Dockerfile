FROM node:16

WORKDIR /usr/app

COPY --chown=node:node . .
RUN npm ci --only=production

ENV NODE_ENV='production'
ENV MONGO_URL='mongodb://the_username:the_password@mongo:27017/the_database'
ENV REDIS_URL='redis://redis:6379'

USER node
CMD npm start