const mongoose = require("mongoose");

const mongoDB = 'mongodb://127.0.0.1/wear-it'

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true}).then(resp => {
    console.log("MongoDB Connected successful!");
});

module.exports.db = mongoose.connection;