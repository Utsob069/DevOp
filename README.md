Dockerfile:
FROM nginx:alpine
This sets the base image to nginx:alpine, a lightweight version of NGINX. Alpine images are small and optimized, making them faster to pull and run.

WORKDIR /usr/share/nginx/html
This sets the working directory inside the container to /usr/share/nginx/html, which is where NGINX serves files from by default.

COPY . .
This copies all files from your local project directory into the working directory inside the container (/usr/share/nginx/html).

EXPOSE 80
This exposes port 80 in the container. This is where NGINX listens for incoming web traffic.

CMD ["nginx", "-g", "daemon off;"]
This starts the NGINX server in the foreground (daemon off; keeps it running in the Docker container so it doesn't exit immediately) [1].

Commands:
docker build -t my-html-app .
This command builds the Docker image from the Dockerfile in the current directory (.), tagging it as my-html-app.

docker run -d -p 8080:80 my-html-app
This runs the container in detached mode (-d), mapping port 8080 on your host to port 80 on the container (-p 8080:80). After this, you can access your app at http://localhost:8080 [1].
