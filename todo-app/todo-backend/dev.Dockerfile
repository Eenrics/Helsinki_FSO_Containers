FROM node:16

WORKDIR /usr/src/app

COPY . .

# Change npm ci to npm install since we are going to be in development mode
RUN npm install

# ENV MONGO_URL='mongodb://the_username:the_password@localhost:3456/the_database'
# ENV REDIS_URL='redis://localhost:7890'

ENV MONGO_URL='mongodb://the_username:the_password@mongo:27017/the_database'
ENV REDIS_URL='redis://redis:6379'

ENV PORT='3331'

# npm start is the command to start the application in development mode
CMD ["npm", "run", "dev"]