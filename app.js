var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World. Este es un ejemplo para la clase de DevOps. This page is running Node.js version: ");
  response.write(process.version);
  response.end();
}).listen(8888);