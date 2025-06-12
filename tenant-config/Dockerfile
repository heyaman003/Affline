# Use official Node.js LTS Alpine image for smaller size
FROM node:18-alpine

# Set working directory inside container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the app files including your data folder
COPY . .

# Expose port 4000
EXPOSE 4000

# Run the app
CMD ["node", "index.js"]
