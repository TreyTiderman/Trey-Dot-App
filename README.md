# UI Testing

Anything in the public folder will be available via http

Install nodejs if not installed
- https://nodejs.org/en/

## Server

1. Run the following commands in the `./server` folder
2. Install project dependencies (package.json)
```
npm install
```
3. Then to start the server (server.js)
```
npm run start
```
4. Or in development mode (Reloads every file change)
```
npm run dev
```
5. Go to http://SERVER_IP:4201
    - Example: http://192.168.1.1:4201

## Svelte

1. Run the following commands in the `./svelte` folder
2. Install project dependencies (package.json)
```
npm install
```
3. Then to start the bundler Vite (Updates live)
```
npm run dev
```
4. Go to http://SERVER_IP:5173
    - Example: http://192.168.1.1:5173
5. Build a bundle and put it in the public folder `./public/svelte`
```
npm run build
```
6. Build and Preview the bundle if needed
```
npm run preview
```

## Docker

1. Run the following commands in the `./` folder
2. Build the image
    - Folder to build: "PATH"
    - Tag: "-t NAME_OF_TAG"
```
sudo docker build . -t trey-dot-app
```
3. Remove the current running container if it exists
    - Image Name: "NAME"
```
sudo docker rm Trey-Dot-App
```
4. Then to run the image
    - Detach: "-d" (run in background)
    - Port: "-p SERVER_PORT:CONTAINER_PORT"
    - Volume: "-v SERVER_DIRECTORY:CONTAINER_DIRECTORY"
    - Image Name: "NAME"
```
sudo docker run -d -p 4201:4201 -v $(pwd)/public:/app/public --restart unless-stopped --name Trey-Dot-App trey-dot-app
```
5. Stop / Start / Restart when needed
    - Image Name: "NAME"
```
sudo docker stop Trey-Dot-App
```
```
sudo docker start Trey-Dot-App
```
```
sudo docker restart Trey-Dot-App
```

## Kill the process

```
sudo netstat -lpn |grep :'<SERVER_PORT>'
kill -9 <NODE_PROCESS>
```

```
sudo netstat -lpn |grep :'6969'
kill -9 1029825
```