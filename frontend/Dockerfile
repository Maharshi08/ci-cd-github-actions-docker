# Step 1: Build the React app
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Step 2: Serve with `serve`
RUN npm install -g serve
CMD ["serve", "-s", "build", "-l", "3000"]
