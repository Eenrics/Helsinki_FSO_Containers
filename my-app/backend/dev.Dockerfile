FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN npm install --force

ENV MONGO_URL='mongodb://the_username:the_password@mongo:27017/(REPLACE_ME)'
ENV BACKEND_URL_ONL='http://localhost/api/'
ENV BE_STATUS='online'
ENV DB_PRO='the_database'
ENV DB_STATUS='online'
ENV EMAIL_SERVICE_ID='service_lcp53nu'
ENV EMAIL_TEMPLATE_ID='template_1gumj1e'
ENV JWT_EXP_TIME='7d'
ENV JWT_SECRET='kj34l*483kLKj*&^%42jl@dkfsl'
ENV MAX_RESERVATION_TIME='3-d'
ENV MONGODB_ATL='mongodb://the_username:the_password@mongo:27017/(REPLACE_ME)'
ENV PUBLIC_API_KEY='Bgn7EOGkCKW87zLNw'
ENV SALT_ROUNDS='10'
ENV VERSION='4.0.01'
ENV WS_URL_ONL='ws://localhost:8080/api/'

ENV PORT='3331'

# npm start is the command to start the application in development mode
CMD ["npm", "run", "dev"]