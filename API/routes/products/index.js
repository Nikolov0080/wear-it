const express = require("express");
const router = express.Router();
const { cartGET } = require('../../controllers/cart/index');
const { orders } = require('../../controllers/orders/index');
const { makeOrderGET, makeOrderPOST } = require('../../controllers/make-order/GET');
const { addToCartGET, addToCartPOST } = require('../../controllers/cart/add-to-cart/index');
const { cartValidations } = require('../../middlewares/validations/add-to-cart');
const { singleOrderValidations } = require('../../middlewares/validations/singleOrder');

const isLogged = require('../../middlewares/isLogged');

router.get('/cart', isLogged, cartGET);
router.get('/orders', isLogged, orders);

router.get('/make-order', isLogged, makeOrderGET)
    .post('/make-order', isLogged, singleOrderValidations, makeOrderPOST);

router.get('/add-to-cart', isLogged, addToCartGET)
    .post('/add-to-cart', isLogged, cartValidations, addToCartPOST);


module.exports = router;