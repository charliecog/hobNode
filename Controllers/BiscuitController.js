const DbService = require('../Services/DbService');
const BiscuitService = require('../Services/BiscuitService');
const createJsonResponse = require('../Services/JsonResponseService');

let getAllBiscuits = (req, res) => {
    DbService.connectToDB(async (db)=>{
        let biscuits = await BiscuitService.getAllBiscuits(db)

        if(biscuits.length == 0){
            let ApiResponse = createJsonResponse.unsuccessful()
            ApiResponse.message = 'Could not retrieve biscuits'
            res.json(ApiResponse)
        } else {
            let ApiResponse = createJsonResponse.successful()
            ApiResponse.message = 'Biscuits retrieved'
            ApiResponse.data = biscuits
            res.json(ApiResponse)
        }
    })
}

let addNewBiscuit = (req, res) => {

    let {name, img, RDT}  = req.body

    let biscuit = {
        name: name,
        img: img,
        RDT: RDT
    }

    DbService.connectToDB((db)=>{
        let result = BiscuitService.addNewBiscuit(db, biscuit).then((data)=>{
            if(data.insertedCount){
                let ApiResponse = createJsonResponse.successful()
                ApiResponse.message = 'Biscuit added successfully'
                res.json(ApiResponse)
            } else {
                let ApiResponse = createJsonResponse.unsuccessful()
                ApiResponse.message = 'Biscuit not added'
                res.json(ApiResponse)
            }
        })
    })
}

module.exports.getAllBiscuits = getAllBiscuits
module.exports.addNewBiscuit = addNewBiscuit