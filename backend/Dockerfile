# Use an official Node image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and lock file first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the app files
COPY . .

# Build TypeScript files
RUN npm run build

# Expose your app's port (adjust if different)
EXPOSE 3000

# Start the server (assuming entry point is dist/app.js)
CMD ["node", "dist/app.js"]