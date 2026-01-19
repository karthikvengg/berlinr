# ---------- Build stage ----------
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build   # Vite outputs to /app/dist

# ---------- Production stage ----------
FROM nginx:alpine

# Clear default HTML
RUN rm -rf /usr/share/nginx/html/*

# Copy Vite build folder
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
