# Use the official Nginx base image
FROM nginx:latest

# Remove default Nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/nginx.conf

# Copy HTML and CSS files to the container
COPY index.html /usr/share/nginx/html/index.html
COPY styles.css /usr/share/nginx/html/css/styles.css

# Expose port 80 for HTTP traffic
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]