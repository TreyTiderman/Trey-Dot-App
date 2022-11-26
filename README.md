# UI Testing

Anything in the public folder will be available via http

## Server

1. Run the following commands in the `./server` folder
2. Install node dependencies
```
npm install
```
3. Then to start the server
```
npm run start
```
4. Or in development mode (Reloads every file change)
```
npm run dev
```
5. Go to http://SERVER_IP:4201
    - Example: http://192.168.1.1:4201

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
5. Stop / Start / Restart
    - Image Name: "NAME"
```
sudo docker stop Trey-Dot-App
sudo docker start Trey-Dot-App
sudo docker restart Trey-Dot-App
```

## Kill the process

```
sudo netstat -lpn |grep :'<PORT>'
kill -9 <PROCESS>
```

```
sudo netstat -lpn |grep :'6969'
kill -9 1029825
```