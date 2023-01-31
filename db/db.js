const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connect = () => {
    // mongoose.connect(process.env.MONGO_URL, {
    mongoose.connect('mongodb+srv://rahul:raj@mean.7zcxrx9.mongodb.net/NEWPROJECT', {
        useNewUrlParser: true, useUnifiedTopology: true
    });
    console.log("Connected to database!!");
}

module.exports = connect;