## Build Environment
# The latest LTS version of node
FROM node:10-slim as builder

# Create app directory
WORKDIR /usr/app

# Add app
COPY . .

# Install app dependencies
RUN npm install --silent

# Test app
RUN npm run test -- --no-watch

# Build app
RUN npm run build

# production environment
FROM arm32v7/nginx:stable
COPY --from=builder /usr/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]