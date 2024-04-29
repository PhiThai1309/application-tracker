# Use an official Node.js runtime as the base image
FROM node:alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install --verbose

# Copy all source files to the working directory
COPY . .

# Build the Next.js application
# RUN npm run build

# Expose the port your app runs on
EXPOSE 3000

# Define the command to run your app
CMD [ "npm", "run", "dev" ]