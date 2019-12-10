let getAllBiscuits = (db, callback) => {
    let collection = db.collection('biscuits')
    collection.find({}).toArray((err, documents) => {
        callback(documents)
    })
}

let addNewBiscuit = async (db, biscuit) => {
    let collection = db.collection('biscuits')
    let thing = await collection.insertOne(biscuit)
    return thing
}

module.exports.getAllBiscuits = getAllBiscuits
module.exports.addNewBiscuit = addNewBiscuit