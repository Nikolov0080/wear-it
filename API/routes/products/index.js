const express = require("express");
const router = express.Router();
const { cartGET, cartDELETE } = require('../../controllers/cart/index');
const { orders } = require('../../controllers/orders/index');
const { makeOrderGET, makeOrderPOST } = require('../../controllers/make-order');
const { addToCartGET, addToCartPOST } = require('../../controllers/cart/add-to-cart/index');
const { cartValidations } = require('../../middlewares/validations/add-to-cart');

const isLogged = require('../../middlewares/isLogged');

router.get('/cart', isLogged, cartGET)
    .delete('/cart', isLogged, cartDELETE);

router.get('/orders', isLogged, orders);

router.get('/make-order', isLogged, makeOrderGET)
    .post('/make-order', isLogged,  makeOrderPOST);

router.get('/add-to-cart', isLogged, addToCartGET)
    .post('/add-to-cart', isLogged, cartValidations, addToCartPOST);

module.exports = router;