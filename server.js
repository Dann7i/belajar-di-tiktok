import http from "http"
import fs from "fs"
import path from "path"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const hostname = "0.0.0.0";
const port = 3000

const server = http.createServer((req, res) => {
  
})

server.listen(port, hostname, () => {
  console.log(`'Berjalan di port': ${port} `)
})