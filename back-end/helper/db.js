const mongoose = require("mongoose");


const uri = 'mongodb+srv://Buyantogtokh:Buyantogtokh@cluster0.xmhmn3a.mongodb.net/?retryWrites=true&w=majority'

mongoose.set('strictQuery', false);

const connect= async () => {
    try {
        await mongoose.connect(uri);
        console.log(("Successfully connected mongodb"));
    } catch(error) {
        console.log(error);
    }
};

module.exports = connect;