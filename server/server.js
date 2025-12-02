import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getContentType } from './contentType.js';


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);
const PORT = 5000;

const server = http.createServer((req, res) => {
    
    let filePath = path.join(__dirname, '..', 'public', req.url === '/' ? '/index.html' : req.url);
    let extname = path.extname(filePath)
    let contentType = getContentType(extname)
    
    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end(`Server Error: ${err}}`)
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    })
})

server.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});