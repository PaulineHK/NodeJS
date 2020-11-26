
const express = require('express');
const app = express();

app.get('/', function (request, response) {
    response.end('Hello');
}).listen(3000);
