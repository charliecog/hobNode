const express = require('express');
const app = express();
const PORT = 8000;
let biscuitData = require('./biscuits')

app.get('/', (req, res)=>{
    res.json(biscuitData)
})

app.listen(PORT, ()=> console.log('App is now running'))