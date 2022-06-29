'use strict'

var http = require('http');

var server = http.createServer(function (request, response) {
  console.log(request.method + ' : ' + request.url);
  response.writeHead(200, {'Content-Type' : 'text/html'});
  response.end('<h1>Welcome!</h1><p>This is my first server program!</p>');
});

server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/');