const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./Config/routes');

app.use(cors());
app.use(bodyParser.json())

routes(app)

module.exports = app