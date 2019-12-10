const BiscuitController = require('../Controllers/BiscuitController');

function routes(app){
    app.get('/biscuits', BiscuitController.getAllBiscuits)

    app.post('/biscuits', BiscuitController.addNewBiscuit)

    app.put('/biscuits/compare', BiscuitController.compareBiscuits)
}

module.exports = routes;