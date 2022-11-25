# Build
# sudo docker build . -t trey-dot-app

# Run
# sudo docker run -p 4201:4201 -v $(pwd)/public:/app/public trey-dot-app

# Lastest nginx image
FROM node:lts-alpine

# Set working directory
WORKDIR /app/server

# Copy all the files in the same folder as the Dockerfile
COPY ./server .

# Install node dependencies
RUN npm install

# Environment variables
ENV port=4201
ENV name=trey

# Run the app
CMD "npm" "start"