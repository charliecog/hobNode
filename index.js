const express = require('express');
const app = express();
const PORT = 8000;
const cors = require('cors');
const routes = require('./Config/routes');

app.use(cors());

routes(app)

app.listen(PORT, ()=> console.log(`App is now running on port ${PORT}`))