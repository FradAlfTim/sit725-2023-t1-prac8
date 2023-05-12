let client = require('../dbConnection');
let collection = client.db('test').collection('Ducks');

function insertDuck(duck, callback){
    collection.insertOne(duck, callback);
}

function getAllDucks(callback){
    collection.find().toArray(callback);
}

function remove(duck, callback){
    collection.deleteOne(duck, callback);
}

module.exports = {insertDuck, getAllDucks, remove}