import http from 'node:http';
import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
const files={'/':'index.html','/index.html':'index.html','/app.js':'app.js','/style.css':'style.css','/learning.js':'learning.js'};
const types={html:'text/html; charset=utf-8',js:'text/javascript; charset=utf-8',css:'text/css; charset=utf-8'};
http.createServer(async(req,res)=>{const file=files[new URL(req.url,'http://localhost').pathname];if(!file){res.writeHead(404);res.end('Nicht gefunden');return;}try{const data=await readFile(fileURLToPath(new URL(file,import.meta.url)));res.writeHead(200,{'Content-Type':types[file.split('.').pop()]});res.end(data);}catch{res.writeHead(500);res.end('Datei nicht verfügbar');}}).listen(Number(process.env.PORT||3000),'0.0.0.0',()=>console.log('Lernzeit läuft auf Port '+(process.env.PORT||3000)));
