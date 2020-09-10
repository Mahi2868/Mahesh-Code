let http = require ('http');

http.createServer((req, res) =>{
    res.writeHead(200, {'content-type' : 'text/plain'});
    res.end("hello world!!!");
}).listen(8081)
console.log("server up and running");