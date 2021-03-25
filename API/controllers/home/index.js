const express = require("express");

module.exports.home = (req,res) =>{
    res.render('home', {title: 'fsdfsd'});
}