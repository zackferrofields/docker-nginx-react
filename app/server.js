'use strict';

let http = require('http');
const PORT = process.env.PORT || 3000;

let server = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write('<!DOCTYPE "html">');
  response.write('<html>');
  response.write('<head>');
  response.write('<title>Hello World Page</title>');
  response.write('</head>');
  response.write('<body>');
  response.write('Hello World!');
  response.write('</body>');
  response.write('</html>');
  response.end();
});

server.listen(PORT);
process.stdout.write(`Running on http://localhost:${PORT} \n`);
