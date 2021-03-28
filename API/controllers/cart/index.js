const { cartSchema } = require('../../models/cart');

const getCartItems = (userId) => {
  return cartSchema.find({ userId }).then((resp) => {
    return resp;
  })
}

module.exports.cartGET = (req, res) => {

  const userId = req.user.user._id;

  getCartItems(userId).then((currentCart) => {
    return res.send(currentCart);
  })

}

module.exports.cartDELETE = (req, res) => {
  // need order ID for deletion
  res.send('cart DELETE request');
}