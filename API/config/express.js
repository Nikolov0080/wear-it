const express = require('express');
var exphbs = require('express-handlebars');
var path = require('path');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
const auth = require('../middlewares/auth');
// add auth 

const start = (app) => {
    app.engine('.hbs', exphbs({ extname: '.hbs' }));
    console.log(path.join(__dirname, '../public'))
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