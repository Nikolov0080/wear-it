const express = require("express");

module.exports.home = (req,res) =>{

    console.log(req.user)
    res.render('home', {title: 'fsdfsd'});
}