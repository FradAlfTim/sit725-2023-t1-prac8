// use model
let model = require('../model/model');

// use model to insert duck to db
const createDuck = (req, res) => {
    let duck = req.body;
    model.insertDuck(duck, (err, result) => {
        if (!err) {
            res.json({statusCode: 200, data: result, message: 'Added'});
        } else {
            console.error(err);
            res.json({statusCode: 400, data: err, message: 'Failed'});
        }
    });
}

// use model to retrieve data from db
const getAllDucks = (req, res) => {
    model.getAllDucks((err, result) => {
        if (err) {
            res.json({statusCode: 400, message:err})
        } else {
            res.json({statusCode: 200, data: result, message:"Success"});
        }
    });
}

const deleteDuck = (req, res) => {
    let duck = req.body;
    model.remove(duck, (err, result) => {
        if (!err) {
            res.json({statusCode: 200, data: result, message: 'Deleted'});
        } else {
            console.error(err);
            res.json({statusCode: 400, data: err, message: 'Delete Failed'});
        }
    });
}
module.exports = {createDuck, getAllDucks, deleteDuck}