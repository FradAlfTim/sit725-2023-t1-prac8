// set router
var express = require("express");
let router = express.Router();

// link controller
let controller = require('../controller/controller');

router.post('/api/ducks', (req, res) => {
    controller.createDuck(req, res);
});

router.get('/api/ducks', (req, res) => {
    controller.getAllDucks(req, res);
});

module.exports = router;