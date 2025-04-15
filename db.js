

const mongoose = require('mongoose');
const colors = require('colors');
require('dotenv').config();

const mongoURI = process.env.MONGO_ATLAS_URL; //mongodb Atlas

//setup
mongoose.connect(mongoURI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

//event lisners:

db.on('connected', () => {
    console.log('Connected to Mongodb Database Server'.green);
});

db.on('error', (err) => {
    console.log('Mongodb Connection Error:'.red, err);
});

db.on('disconnected', () => {
    console.log('Mongodb disconnected'.red);
});

//export the database connection to other file:

module.exports = db;