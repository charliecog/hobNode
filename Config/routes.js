const BiscuitController = require('../Controllers/BiscuitController');

function routes(app){
    app.get('/biscuits', BiscuitController.getAllBiscuits)
}

module.exports = routes;