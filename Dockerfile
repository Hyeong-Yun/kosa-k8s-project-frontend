From nginx:latest
COPY index.html /usr/share/nginx/html
COPY login.html /usr/share/nginx/html
COPY style.css /usr/share/nginx/html
COPY login.css /usr/share/nginx/html
COPY main.js /usr/share/nginx/html