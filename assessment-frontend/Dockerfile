# 1. Use official Node.js base image
FROM node:18-alpine

# 2. Set working directory inside container
WORKDIR /app

# 3. Copy only the dependency files first (to leverage Docker caching)
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy the rest of the project files
COPY . .

# 6. Build Next.js app for production
RUN npm run build

# 7. Expose port 3000
EXPOSE 3000

# 8. Start the app in production mode
CMD ["npm", "run", "start"]
