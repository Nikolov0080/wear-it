const express = require("express");
const router = express.Router();
const { registerGET } = require('../../controllers/user/GET/register');
const { register } = require('../../controllers/user/POST/register');
const { login } = require('../../controllers/user/POST/login');

router.get('/profile', (req, res) => {
    res.send('test profile get');
});

router.get('/orders', (req, res) => {
    res.send("orders test get");
});

router.get('/completed-orders', (req, res) => {
    res.send("orders test get");
});

router.get('/login', (req, res) => {
    res.render('login')
});

router.get('/register', registerGET)

router.post('/login', login);

router.post('/register', register);


module.exports = router;