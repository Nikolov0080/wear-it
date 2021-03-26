const express = require("express");
const router = express.Router();
const { registerGET } = require('../../controllers/user/GET/register');
const { loginGET } = require('../../controllers/user/GET/login');
const { register } = require('../../controllers/user/POST/register');
const { login } = require('../../controllers/user/POST/login');
const loginValidation = require('../../middlewares/validations/login');
const registerValidation = require('../../middlewares/validations/register');


router.get('/profile', (req, res) => {
    res.send('test profile get');
});

router.get('/orders', (req, res) => {
    res.send("orders test get");
});

router.get('/completed-orders', (req, res) => {
    res.send("orders test get");
});

router.get('/login', loginGET);

router.get('/register', registerGET)

router.post('/login', loginValidation, login);

router.post('/register', registerValidation, register);


module.exports = router;