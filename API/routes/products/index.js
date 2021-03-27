const express = require("express");
const router = express.Router();
const { cartGET } = require('../../controllers/cart/index');
const isLogged = require('../../middlewares/isLogged');

router.get('/cart', isLogged, cartGET);

module.exports = router;