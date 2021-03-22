const express = require("express");
const router = express.Router();
const userModel = require('../../models/user');

router.get('/profile', (req, res) => {
    res.send('test profile get');
});

router.get('/orders', (req, res) => {
    res.send("orders test get");
});

router.get('/completed-orders', (req, res) => {
    res.send("orders test get");
});

router.post('/login', (req, res) => {
   
console.log(req.body);
res.send(req.body)

});

router.post('/register', (req, res) => {
    res.send('test register post');
});


module.exports = router;