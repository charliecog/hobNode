const DbService = require('../Services/DbService');
const BiscuitService = require('../Services/BiscuitService');
const BiscuitValidator = require('../Services/ValidateBiscuitService');
const ObjectId = require('mongodb').ObjectId;
const JsonResponse = require('../Services/JsonResponseService');

let getAllBiscuits = async(req, res) => {
    let collection = await DbService('biscuits')
    let biscuits = await BiscuitService.getAllBiscuits(collection)

    let apiResponse = (
        biscuits.length 
        ? JsonResponse(biscuits, true, 'success') 
        : JsonResponse()
    )

    res.json(apiResponse)
}

let addNewBiscuit = async(req, res) => {

    if(!BiscuitValidator.validateBiscuit(req.body)){
        res.json(JsonResponse([], false, 'Biscuit not added - invalid inputs'))
        return
    }

    let {name, img, RDT} = req.body

    let collection = await DbService('biscuits')
    let result = await BiscuitService.addNewBiscuit(collection, {name, img, RDT})

    let apiResponse = (
        result.insertedId
        ? JsonResponse([], true, 'Biscuit added successfully') 
        : JsonResponse([], false, 'Biscuit not added')
    )

    res.json(apiResponse)
}

let compareBiscuits = async(req, res) => {

    let {winner, loser} = req.body

    if(
        winner === loser ||
        !BiscuitValidator.validateObjectId(winner) ||
        !BiscuitValidator.validateObjectId(loser)
    ){
        res.json(JsonResponse([], false, 'Comparison not added - invalid inputs'))
        return
    }

    let winnerId = ObjectId(winner);
    let loserId = ObjectId(loser);

    let collection = await DbService('biscuits')
    let result = await BiscuitService.addNewBiscuitVictory(collection, winnerId, loserId)

    let apiResponse = (
        result.modifiedCount === 2
        ? JsonResponse([], true, 'Biscuit comparison logged successfully') 
        : JsonResponse([], false, 'Biscuit comparison not logged')
    )

    res.json(apiResponse)

}

module.exports.getAllBiscuits = getAllBiscuits
module.exports.addNewBiscuit = addNewBiscuit
module.exports.compareBiscuits = compareBiscuits