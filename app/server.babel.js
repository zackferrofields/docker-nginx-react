'use strict';

import {createServer} from 'http';
import {readFile} from 'fs';

const PORT = process.env.PORT || 3000;
const INDEX_PATH = './views/index.html';

function index(response) {
  readFile(INDEX_PATH, 'utf8', (err, data) => {
    if (err) throw err;
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(data);
    response.end();
  });
}

createServer((request, response) => index(response))
  .listen(PORT);

process.stdout.write(`Running on http://localhost:${PORT} \n`);
