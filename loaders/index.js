const express = require('express');
const app = express();

const models = require('../database/models/index.js');
const router = require('../routes/index.js');

models.init();
app.use(router);

module.exports = app;