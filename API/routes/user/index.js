const express = require("express");
const router = express.Router();
const { register } = require('../../controllers/user/register');
const { login } = require('../../controllers/user/login');


router.get('/profile', (req, res) => {
    res.send('test profile get');
});

router.get('/orders', (req, res) => {
    res.send("orders test get");
});

router.get('/completed-orders', (req, res) => {
    res.send("orders test get");
});

router.post('/login', login);

router.post('/register', register);


module.exports = router;