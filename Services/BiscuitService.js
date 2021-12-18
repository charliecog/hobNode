let getAllBiscuits = async (collection) => {
    // let collection = db.collection('biscuits')
    let result = await collection.find({}).toArray()
    return result

}

let addNewBiscuit = async (collection, biscuit) => {
    let result = await collection.insertOne(biscuit)
    return result
}

let addNewBiscuitVictory = async (collection, winnerId, loserId) => {
    let result = await collection.bulkWrite([
        {
            updateOne : {
            filter: {"_id": winnerId},
            update: { $inc: {"performances": 1, "wins": 1}}
            }
        },
        {
            updateOne : {
            filter: {"_id": loserId},
            update: { $inc: {"performances": 1}}
            }
        }
    ])
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