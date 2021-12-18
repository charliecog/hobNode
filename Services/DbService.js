const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://root:password@localhost:27017'
// const dbname = 'teaTime';
const client = new MongoClient(url)

const DbService = async(collection) => {
    await client.connect();
    const db = client.db('teaTime');
    return db.collection(collection);
}
// function connectToDB(cb) {
//     client.connect(function (err) {
//         let db = Client.db(dbname)
//         cb(db);
//     })
// }

module.exports = DbService;