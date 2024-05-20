# Stage 1: Build the Angular application
FROM node:20 AS build
WORKDIR /workspace

# Copy the entire workspace
COPY . .

# Install dependencies using the workspace root package-lock.json
RUN npm ci

# Build the Angular application
RUN npm run build:frontend

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

# Copy the built Angular application from the previous stage
COPY --from=build /workspace/frontend/dist/frontend /usr/share/nginx/html

# Nginx configuration
COPY --from=build /workspace/frontend/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
