# Use Node image (Debian recommended for watch)
FROM node:22-bullseye

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the files
COPY . .

# Set environment for watching files
ENV CHOKIDAR_USEPOLLING=true

# Expose Vite dev port
EXPOSE 5173

# Start Vite dev server on all interfaces
CMD ["npm", "run", "dev"]
