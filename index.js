const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./Config/routes');

app.use(cors());

routes(app)

module.exports = app