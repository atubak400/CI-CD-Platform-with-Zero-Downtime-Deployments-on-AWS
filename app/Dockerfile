# Use official Node.js image
FROM node:18-slim


# Create app directory
WORKDIR /usr/src/app

# Copy app files
COPY package*.json ./
RUN npm install
COPY . .

# Expose port and run
EXPOSE 3000
CMD ["npm", "start"]
