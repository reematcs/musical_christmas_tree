# Build stage
FROM node:20-slim AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --omit=dev

# Production stage
FROM gcr.io/distroless/nodejs20-debian12

WORKDIR /app

# Copy server and dependencies
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
COPY server.js ./

# Copy the entire src directory
# This includes all JS files, CSS, and assets
COPY src ./src

# Set user to non-root
USER nonroot

# Expose port
EXPOSE 3000

# Start the server
CMD ["server.js"]