const express = require("express");
const { db } = require('./config/mongoDB');
const app = express();
const userRouter = require('./routes/user/index');
const productsRouter = require('./routes/products/index');
const bodyParser = require('body-parser').urlencoded({ extended: true });

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
const port = (process.env.PORT || 3000);

app.set('port', port);

app.get('/', (req, res) => {
    res.send('Home test');
});

app.use(bodyParser);
app.use('/user/', userRouter)
app.use("/products/", productsRouter);

app.listen(port, () => {
    console.log("App online listening to port " + port);
});