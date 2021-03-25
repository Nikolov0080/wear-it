const express = require('express');
var exphbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
var path = require('path');
// add auth 

const start = (app) => {
    app.engine('.hbs', exphbs({ extname: '.hbs' }));

    // app.set('views', path.join( __dirname , 'views'));

    app.set('view engine', 'hbs');

    app.use(express.static('public'));

    app.use(express.urlencoded({
        extended: true
    }));

    app.use(cookieParser());

}

module.exports = start;