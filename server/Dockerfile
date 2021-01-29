# Create image based on the official Node 14 image from dockerhub
FROM node:14-alpine

# Create a directory where our app will be placed
RUN mkdir -p /app

# Change directory so that our commands run inside this new directory
WORKDIR /app

# Copy dependency definitions
COPY db.json /app/

# Install dependecies
RUN npm install -g json-server

# Expose the port the app runs in
EXPOSE 3000

# Serve the app
CMD ["json-server", "db.json", "--port", "3000", "--host", "0.0.0.0"]