const http = require('http');
const url = require('url');
const fs = require('fs');


const server = http.createServer((req, res) => {
    const urlObject = url.parse(req.url);
    const path = urlObject.path;
    let fileSystemPath = '';
    console.log(`Path: ${path}`);

    if (path === '/') {
        fileSystemPath = 'static/index.html';
    } else {
        fileSystemPath = `static/${path}`;
    }

    fs.stat(fileSystemPath, error => {

        if (!error) {
            fs.readFile(fileSystemPath, (error, archivo) => {
                if (!error) {
                    res.writeHead(200, { 'Content-Type' : 'text/html' } );
                    res.write(archivo);
                    res.end();
                } else {
                    res.writeHead(500, { 'Content-Type' : 'text/plain' } );
                    res.write('Error en mi servidor');
                    res.end();
                }
            })

        } else {
            res.writeHead(404, { 'Content-Type' : 'text/html' } );
            res.write(`<html><body>Esa pagina no existe en el servidor!</body></html>`);
            res.end();
        }
    })

})

server.listen(8080);
console.log('Inicie mi servidor');


