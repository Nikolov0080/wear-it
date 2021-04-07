const express = require('express');
var exphbs = require('express-handlebars');
var path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
const auth = require('../middlewares/auth');
// add auth 
const cors = require("cors");

const start = (app) => {
    app.use(bodyParser.json())
    app.use(cors({ origin: true, credentials: true }));
    app.engine('.hbs', exphbs({ extname: '.hbs' }));
    app.set('view engine', 'hbs');
    const staticPath = path.join(__dirname, '../public')
    app.use(express.static(staticPath))
    app.use(expressValidator())
    app.use(express.urlencoded({
        extended: true
    }));

    app.use(cookieParser());
    app.use(auth());
}

module.exports = start;