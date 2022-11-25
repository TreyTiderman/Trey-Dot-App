// Require
const os = require('os')
const fs = require('fs').promises
const fss = require('fs');
const express = require('express');
const cors = require('cors')

// Express - Web server
const app = express()

// Allow requests that didn't originate from this server
app.use(cors({origin: true}))

// Process request body (req.body) for urlencoded, json, and plain text bodys
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.text())

// JSON reponses will formated and use 2 spaces for indention
app.set('json spaces', 2)

// Functions
async function getClientFiles(folder) {
  const path = `../public${folder.name}`
  const files = await fs.readdir(path)
  for (const file of files) {
    const stat = await fs.stat(`${path}/${file}`)
    // Is directory
    if (stat.isDirectory()) {
      let folder2 = {
        name: `${folder.name}/${file}`,
        files: [],
        folders: []
      }
      await getClientFiles(folder2)
      folder.folders.push(folder2)
    }
    else {
      folder.files.push(file)
    }
  }
  return folder
}
// Get IP addresses of this server
function getNICs() {
  const nets = os.networkInterfaces()
  const results = {}
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
      // 'IPv4' is in Node <= 17, for 18 it's a number 4 or 6
      const familyV4Value = typeof net.family === 'string' ? 'IPv4' : 4
      if (net.family === familyV4Value && !net.internal) {
        if (!results[name]) results[name] = []
        results[name].push(net.address)
      }
    }
  }
  return results
}
// Log to console and file
function log(text, folderPath, filename, debug = false) {
  // Time & date
  const timeDate = new Date(Date.now()).toLocaleString();
  const time = timeDate.split(', ')[1];
  const date = timeDate.split(',')[0].replace(/\//ig, "-");
  // If folderPath doesn't exist create it
  if (!fss.existsSync(folderPath)) fss.mkdirSync(folderPath)
  // Log text to the file path
  const line = `${time} > ${text}`;
  const path = `${folderPath}${filename} ${date}.log`;
  fs.appendFile(path, line + '\n')
  // Log to Console
  if (debug) console.log(allLine)
}
function httpLog(req, res, next) {
  // Path
  const path = "../public/logs/"
  // URL
  log(`${req.method} ${req.protocol}://${req.headers.host}${req.url}`, path, 'http')
  // Query Params
  if (JSON.stringify(req.query) !== '{}') log(`PARAMS ${JSON.stringify(req.query)}`, path, 'http')
  // Body
  if (JSON.stringify(req.body) !== '{}') log(`BODY ${JSON.stringify(req.body)}`, path, 'http')
  // Next
  next()
}

// Middleware
app.use(httpLog) 

// Routes
const routes = {
  'GET /': 'Home page',
  'GET /***': 'Use the file path to go to any file in /api/files',
  'GET /help': 'JSON of all public http(s) routes, Will be a site map',
  'GET /api': 'api.html',
  'GET /api/routes': 'JSON of all public http(s) routes',
  'GET /api/path': 'JSON of the servers __dirname',
  'GET /api/time': 'Returns servers clock in ISO time format',
  'GET /api/files': 'JSON of all publicly available files',
}
// Public folder, everything in this folder is available to anyone
app.use(express.static("../public"))
app.get('/', async (req, res) => {
  res.send( await fs.readFile('../public/home/index.html','utf8') )
})
app.get('/help', (req, res) => {
  res.json(routes)
})
app.get('/api', async (req, res) => {
  res.send( await fs.readFile('../public/other/api.html','utf8') )
})
app.get('/api/routes', async (req, res) => {
  res.json(routes)
})
app.get('/api/path', async (req, res) => {
  res.json( { "path": __dirname } )
})
app.get('/api/time', async (req, res) => {
  const time = new Date(Date.now()).toISOString()
  res.status(200).json(time);
});
app.get('/api/files', async (req, res) => {
  let folder = {
    name: '',
    files: [],
    folders: []
  }
  const files = await getClientFiles(folder)
  res.json(files)
})

// Start web server
const port = 4201
app.listen(port, async () => {
  console.log(`\nUI testing server is up and running on ${os.type()}.`)
  console.log(`The user interface is available at:`)
  console.log(`http://localhost:${port}`)
  const NICs = getNICs()
  Object.values(NICs).forEach(key => {
    console.log(`http://${key[0]}:${port}`)
  })
})