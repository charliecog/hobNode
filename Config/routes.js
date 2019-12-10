const BiscuitController = require('../Controllers/BiscuitController');

function routes(app){
    app.get('/biscuits', BiscuitController.getAllBiscuits)

    app.post('/biscuits', BiscuitController.addNewBiscuit)
}

module.exports = routes;