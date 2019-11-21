let getAllBiscuits = (db, callback) => {
    let collection = db.collection('biscuits')
    collection.find({}).toArray((err, documents) => {
        callback(documents)
    })
}

module.exports.getAllBiscuits = getAllBiscuits