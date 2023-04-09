var express = require("express")
var app = express()
var port = process.env.port || 3000;
// Call MongoDB, as i did to "express" above. The 'mongodb' is from package.json-"dependencies"
const {MongoClient} = require('mongodb');

// The link is from my mongodb websit. Rember after copy the original link, change the password to your real password.
const url = 'mongodb+srv://TimZ:ztf25888@prac4.zzux0pf.mongodb.net/?retryWrites=true&w=majority';

// Then pass the url to 'MongoClint' and store in 'mongoClient'.
const mongoClient = new MongoClient(url);
let dbCollection;

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const cardList = [
    {
        title: "duckling 2",
        image: "IMAGES/duck2.jpg",
        link: "About duckling 2",
        desciption: "Demo desciption about duckling 2"
    },
    {
        title: "duckling 3",
        image: "IMAGES/seaduck3.jpg",
        link: "About duckling 3",
        desciption: "Demo desciption about duckling 3"
    }
]

function dbConnection(collectionName) {
    mongoClient.connect(error =>{
        if (!error) {
            dbCollection = mongoClient.db().collection(collectionName);
            console.log(dbCollection);
        } else {
            console.log(error);
        }
    });
}

app.post('/api/ducks', (req, res) => {
    let duck = req.body;
    insert(duck, (err, result) => {
        if (!err) {
            res.json({statusCode: 200, data: result, message: 'Added'});
        } else {
            console.error(err);
            res.json({statusCode: 400, data: err, message: 'Failed'});
        }
    });
});

app.get('/api/ducks', (req, res) => {
    getAllDucks((err, result) => {
        if (err) {
            res.json({statusCode: 400, message:err})
        } else {
            res.json({statusCode: 200, data: result, message:"Success"});
        }
    });
});

function insert(duck, callback){
    dbCollection.insertOne(duck, callback);
}

function getAllDucks(callback){
    dbCollection.find().toArray(callback);
}

app.listen(port,()=>{
    console.log("App listening to: " + port)
    dbConnection('Ducks');
})
