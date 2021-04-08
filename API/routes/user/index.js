const express = require("express");
const router = express.Router();
const { registerGET } = require('../../controllers/user/GET/register');
const { loginGET } = require('../../controllers/user/GET/login');
const { register } = require('../../controllers/user/POST/register');
const { login } = require('../../controllers/user/POST/login');
const loginValidation = require('../../middlewares/validations/login');
const registerValidation = require('../../middlewares/validations/register');
const isGuest = require('../../middlewares/isGuest');

router.get('/orders', (req, res) => {
    res.send("orders test get");
});

router.get('/completed-orders', (req, res) => {
    res.send("orders test get");
});

router.get('/profile', (req, res) => {
    res.send('test profile get');
});


router.get('/login', isGuest, loginGET);

router.get('/register', isGuest, registerGET)

router.post('/login', isGuest, loginValidation, login);

router.post('/register', isGuest, registerValidation, register);


module.exports = router;