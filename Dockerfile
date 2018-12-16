# build environment
FROM node:carbon-alpine as builder
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json
COPY yarn.lock /usr/src/app/yarn.lock

RUN yarn install --silent
RUN yarn global add react-scripts@1.1.2 --silent

COPY . /usr/src/app
RUN yarn test --no-watch
RUN yarn build

# production environment
FROM nginx:stable
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]