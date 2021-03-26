const express = require("express");
const error = require("./middlewares/error");
const config = require('./config');
const userRoutes = require('./routes/user/index');
const productsRoutes = require('./routes/products/index');
const home = require("./routes/home");

const app = express();

require('./config/express')(app);
require('./config/mongoose')(app);


app.use('/', home)
app.use('/user/', userRoutes);
app.use('/products/', productsRoutes);

app.use("/*", error);

app.listen(config.PORT, () => console.log(`Server is running on port ${config.PORT}...`));