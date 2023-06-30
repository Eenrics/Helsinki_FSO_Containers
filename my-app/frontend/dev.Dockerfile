FROM node:16

WORKDIR /usr/src/app

COPY . .

# Change npm ci to npm install since we are going to be in development mode
RUN npm install
RUN npm i -g react-scripts

ENV REACT_APP_BACKEND_URL='/api'
ENV BACKEND_URL_ONL='http://localhost:8080/api/'
ENV BE_STATUS='online'
ENV EMAIL_SERVICE_ID='service_lcp53nu'
ENV EMAIL_TEMPLATE_ID='template_1gumj1e'
ENV PUBLIC_API_KEY='Bgn7EOGkCKW87zLNw'
ENV VERSION='4.0.01'
ENV WS_URL_ONL='ws://localhost:8080/api/'

# npm start is the command to start the application in development mode
CMD ["npm", "start"]