const DbService = require('../Services/DbService');
const BiscuitService = require('../Services/BiscuitService');

let getAllBiscuits = (req, res) => {
    DbService.connectToDB((db)=>{
        BiscuitService.getAllBiscuits(db,(documents) => {
            res.json(documents)
        })
    })
}

module.exports.getAllBiscuits = getAllBiscuits