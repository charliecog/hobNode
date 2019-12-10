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

module.exports.getAllBiscuits = getAllBiscuits
module.exports.addNewBiscuit = addNewBiscuit