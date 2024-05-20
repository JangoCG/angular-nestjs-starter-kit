###################
# BUILD FOR PRODUCTION
###################

FROM node:20 AS build

# Set working directory
WORKDIR /workspace

# Copy the entire workspace
COPY . .

# Install dependencies using the workspace root package-lock.json
RUN npm ci

# Build the NestJS application
RUN npm run build:backend

# Set NODE_ENV environment variable
ENV NODE_ENV production

# Install only production dependencies
RUN npm ci --only=production && npm cache clean --force

###################
# PRODUCTION
###################

FROM node:20-alpine As production

# Set working directory
WORKDIR /app

# Copy the bundled code from the build stage to the production image
COPY --from=build /workspace/backend/dist /app/dist
COPY --from=build /workspace/backend/package.json /app/package.json
COPY --from=build /workspace/node_modules /app/node_modules

# Start the server using the production build
CMD ["node", "dist/main.js"]

EXPOSE 8000

