## Build Environment
# The latest LTS version of node
FROM node:10-slim as builder

# Create app directory
WORKDIR /usr/app

# Add app
COPY . .

# Install Yarn
RUN npm install -g yarn

# Install app dependencies
RUN yarn install --silent
# Test app
RUN yarn test --no-watch

# Build app
RUN yarn build

# production environment
FROM arm32v7/nginx:stable
COPY --from=builder /usr/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]