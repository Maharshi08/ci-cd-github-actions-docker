# Use Node.js official image
FROM node:18

# Create and set the working directory inside the container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port (change if your app uses a different one)
EXPOSE 3000

# Start the app (update if needed)
CMD ["node", "src/index.js"]
