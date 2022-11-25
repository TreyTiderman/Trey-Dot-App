# UI Testing

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

1. Run the following commands in the `./server` folder
2. Build the image
  - Folder to build: "PATH"
  - Tag: "-t NAME_OF_TAG"
```
sudo docker build . -t trey-dot-app
```
3. Then to run the image
  - Port: "-p SERVER_PORT:CONTAINER_PORT"
  - Volume: "-v SERVER_DIRECTORY:CONTAINER_DIRECTORY"
  - Image Name: "NAME"
```
sudo docker run -p 4201:4201 -v $(pwd)/public:/app/public trey-dot-app
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