const express = require('express');
const app = express();

const models = require('../database/models/index.js');
const routes = require('../routes/index.js');

models.init();
app.use(routes);


module.exports = app;