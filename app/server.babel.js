import {createServer} from 'http';
import {readFile} from 'fs';
import {format} from 'util';
import {createElement} from 'react';
import {renderToString} from 'react-dom/server';
import Application from './Application.jsx';

const PORT = process.env.PORT || 3000;
const INDEX_PATH = './views/index.html';
const TITLE = 'Hello World Page';

function index(response) {
  const state = { title: 'Hello World!' };
  const content = renderToString(createElement(Application, {state}));
  readFile(INDEX_PATH, 'utf8', (err, data) => {
    if (err) throw err;
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(format(data, TITLE, content));
    response.end();
  });
}

createServer((request, response) => index(response))
  .listen(PORT);

process.stdout.write(`Running on http://localhost:${PORT} \n`);
