# This is the FIRST STAGE
FROM node:16 AS base
WORKDIR /usr/src/app

COPY package.json package.json
COPY package-lock.json package-lock.json


# This is the TEST STAGE
FROM base as test-stage
RUN npm ci

COPY . .
ENV CI=true

RUN npm test


# This is the BUILD STAGE
FROM base as build-stage
RUN npm ci

COPY . .
# ENV REACT_APP_BACKEND_URL='http://localhost:3331'
ENV REACT_APP_BACKEND_URL='/api'

RUN npm run build


# This is FINAL STAGE
FROM nginx:1.20-alpine

COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html
