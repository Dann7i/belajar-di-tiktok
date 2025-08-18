import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const hostname = "0.0.0.0";
const port = 3000;
let extname;
let filePath;
let contentType;
const server = http.createServer((req, res) => {
   filePath = path.join(__dirname, req.url === "/" ? "index.html" : req.url);
  extname = path.extname(filePath);
  contentType = "text/html";
  
  switch (extname) {
    case ".js": contentType = "text/javascript"; break;
    case ".css": contentType = "text/css"; break;
    case ".json": contentType = "application/json"; break;
    case ".png": contentType = "image/png"; break;
    case ".jpg": contentType = "image/jpg"; break;
    default:
  }
  // fs.readFile 
  fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('404 Not Found');
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content, 'utf-8');
      }
  });
});

server.listen(port, hostname, () => {
  console.log(`'Berjalan di port': ${port} `);
});