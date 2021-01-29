const express = require('express');
const app = express();

module.exports = app;

const loaders = require('./loaders/index.js');
const db = require('./database/database.js');
const server = require('./server.js');

app.use(loaders);
db.authenticate();
db.sync();
server.start();



/*
app.get('/', function (request, response) {
    response.end('Hello');
}).listen(3000);
*/