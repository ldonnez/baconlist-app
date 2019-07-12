# build environment
FROM node:alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN yarn
COPY . /app
COPY .env /app/.env
RUN yarn build

# production environment
FROM nginx:stable-alpine
COPY ./docker/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/build /build
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
