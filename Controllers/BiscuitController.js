const DbService = require('../Services/DbService');
const BiscuitService = require('../Services/BiscuitService');
const createJsonResponse = require('../Services/JsonResponseService');

let getAllBiscuits = (req, res) => {
    DbService.connectToDB((db)=>{
        BiscuitService.getAllBiscuits(db,(documents) => {
            if(documents.length == 0){
                let ApiResponse = createJsonResponse.unsuccessful()
                ApiResponse.message = 'Could not retrieve biscuits'
                res.json(ApiResponse)
            } else {
                let ApiResponse = createJsonResponse.successful()
                ApiResponse.message = 'Biscuits retrieved'
                ApiResponse.data = documents
                res.json(ApiResponse)
            }
        })
    })
}

module.exports.getAllBiscuits = getAllBiscuits