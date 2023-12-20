const http = require('http');

const servidor = http.createServer((request , response )=>
{      
    console.log(request.url);
     response.end("Oda al mundo");
});

const PUERTO=3000;

servidor.listen(PUERTO,()=>
{
    console.log(`El servidor escucha en http://localhost:${PUERTO}`);
})
