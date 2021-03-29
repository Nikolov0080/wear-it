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
  }).catch((e) => {
    return resp.send(e);
  });

}

module.exports.cartDELETE = (req, res) => {
  const userId = req.user.user._id;

  cartSchema.deleteMany({ userId }).then((resp) => {
    res.send(resp);
  }).catch((e) => {
    res.send(e);
  })

}