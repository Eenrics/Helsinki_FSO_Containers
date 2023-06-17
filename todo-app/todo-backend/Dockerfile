FROM node:16

WORKDIR /usr/app

COPY --chown=node:node . .
RUN npm ci --only=production

ENV NODE_ENV=production

USER node
CMD npm start