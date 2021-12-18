const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./Config/routes');

app.use(cors());
app.use(express.json());

routes(app);

module.exports = app;