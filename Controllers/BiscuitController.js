const DbService = require('../Services/DbService');
const BiscuitService = require('../Services/BiscuitService');
const createJsonResponse = require('../Services/JsonResponseService');
const BiscuitValidator = require('../Services/ValidateBiscuitService');
const ObjectId = require('mongodb').ObjectID

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

    if(!BiscuitValidator.validateBiscuit(req.body)){
        let ApiResponse = createJsonResponse.unsuccessful()
        ApiResponse.message = 'Biscuit not added - invalid inputs'
        res.json(ApiResponse)
        return
    }

    let biscuit = {
        name: req.body.name,
        img: req.body.img,
        RDT: req.body.RDT
    }

    DbService.connectToDB(async (db)=>{
        let result = await BiscuitService.addNewBiscuit(db, biscuit)

        if(result.insertedCount){
            let ApiResponse = createJsonResponse.successful()
            ApiResponse.message = 'Biscuit added successfully'
            res.json(ApiResponse)
        } else {
            let ApiResponse = createJsonResponse.unsuccessful()
            ApiResponse.message = 'Biscuit not added'
            res.json(ApiResponse)
        }
    })
}

let compareBiscuits = (req, res) => {

    let winnerId = req.body.winner
    let loserId = req.body.loser

    if(
        winnerId === loserId ||
        !BiscuitValidator.validateObjectId(winnerId) ||
        !BiscuitValidator.validateObjectId(loserId)
    ){
        let ApiResponse = createJsonResponse.unsuccessful()
        ApiResponse.message = 'Biscuit not added - invalid inputs'
        res.json(ApiResponse)
        return
    }

    winnerId = ObjectId(winnerId);
    loserId = ObjectId(loserId);

    DbService.connectToDB(async (db)=>{
        let winnerResult = await BiscuitService.addNewBiscuitVictory(db, winnerId)
        if(winnerResult.modifiedCount){
            let loserResult = await BiscuitService.addNewBiscuitLoss(db, loserId)
            if(loserResult.modifiedCount){
                let ApiResponse = createJsonResponse.successful()
                ApiResponse.message = 'Biscuit comparison logged successfully'
                res.json(ApiResponse)
            } else {
                let ApiResponse = createJsonResponse.unsuccessful()
                ApiResponse.message = 'Biscuit comparison not logged'
                res.json(ApiResponse)
            }
        } else {
            let ApiResponse = createJsonResponse.unsuccessful()
            ApiResponse.message = 'Biscuit comparison not logged'
            res.json(ApiResponse)
        }
    })
}

module.exports.getAllBiscuits = getAllBiscuits
module.exports.addNewBiscuit = addNewBiscuit
module.exports.compareBiscuits = compareBiscuits