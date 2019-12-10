let getAllBiscuits = async (db) => {
    let collection = db.collection('biscuits')
    let result = await collection.find({}).toArray()
    return result

}

let addNewBiscuit = async (db, biscuit) => {
    let collection = db.collection('biscuits')
    let result = await collection.insertOne(biscuit)
    return result
}

let addNewBiscuitVictory = async (db, winnerId) => {
    let collection = db.collection('biscuits')
    let result = await collection.updateOne(
        {"_id": winnerId},
        { $inc:
            {"performances": 1, "wins": 1}
        })
    return result
}

let addNewBiscuitLoss = async (db, loserId) => {
    let collection = db.collection('biscuits')
    let result = await collection.updateOne(
        {"_id": loserId},
        { $inc:
            {"performances": 1}
        })
    return result
}

module.exports.getAllBiscuits = getAllBiscuits
module.exports.addNewBiscuit = addNewBiscuit
module.exports.addNewBiscuitVictory = addNewBiscuitVictory
module.exports.addNewBiscuitLoss = addNewBiscuitLoss