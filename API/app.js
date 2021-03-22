const express = require("express");
const { db } = require('./config/mongoDB');
const app = express();

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
const port = (process.env.PORT || 3000);

app.set('port', port);

app.get('/', (req, res) => {
    res.send('Home test');
});

app.listen(port, () => {
    console.log("App online listening to port " + port);
});