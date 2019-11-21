let biscuitData = require('../biscuits');

function routes(app){
    app.get('/biscuits', (req, res)=>{
        res.json(biscuitData);
    })
}

module.exports = routes;