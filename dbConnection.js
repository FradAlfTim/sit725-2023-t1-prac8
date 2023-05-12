// Call MongoDB, as i did to "express". The 'mongodb' is from package.json-"dependencies"
const {MongoClient} = require('mongodb');

// The link is from my mongodb websit. Rember after copy the original link, change the password to your real password.
const url = 'mongodb+srv://TimZ:ztf25888@prac7.zzux0pf.mongodb.net/?retryWrites=true&w=majority';

// Then pass the url to 'MongoClint' and store in 'client'.
const client = new MongoClient(url);

// connect db
client.connect(error =>{
    if (!error) {
        console.log('DB connected!');
    } else {
        console.log(error);
    }
});

module.exports = client;