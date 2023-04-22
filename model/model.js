let client = require('../dbConnection');
let collection = client.db('test').collection('Ducks');

function insertDuck(duck, callback){
    collection.insertOne(duck, callback);
}

function getAllDucks(callback){
    collection.find().toArray(callback);
}

module.exports = {insertDuck, getAllDucks}