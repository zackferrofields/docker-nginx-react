'use strict';

import {createServer} from 'http';
const PORT = process.env.PORT || 3000;

function helloWorld(response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write(`
    <!DOCTYPE "html">
    <html>
      <head>
        <title>Hello World Page</title>
      </head>
      <body>
        Hello, World!
      </body>
    </html>
  `);
  response.end();
}

createServer((request, response) => helloWorld(response))
  .listen(PORT);

process.stdout.write(`Running on http://localhost:${PORT} \n`);
