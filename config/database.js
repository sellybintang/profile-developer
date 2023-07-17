const mongoose = require('mongoose');
const dotenv = require ('dotenv');
dotenv.config();
const {DB_MONGODB,}=process.env;

const database = module.exports = () => {
    try {
        mongoose.connect(DB_MONGODB);
        console.log("Connected to Mongodb");
    } catch (error){
        console.log(erro);
        console.log("failed");
    }
};

module.exports = database