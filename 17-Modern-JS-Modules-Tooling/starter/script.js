// Importing Module
// 
// import {addToCart} from "./shoppingCart.js";

// import * as ShoppingCart from "./shoppingCart.js";
import add, * as ShoppingCart from "./shoppingCart.js"

console.log("Importing Module");

// console.log(ShoppingCart);

// console.log(cart);

// ShoppingCart.addToCart('Shoes', 5)
add('Shoes', 5)
add('T-shirt', 3)
add('T-shirt', ShoppingCart.totalPrice)

// console.log(ShoppingCart);
console.log(ShoppingCart.cart);





const shoppingCart = (function () {
  const cart = [];
  const cost = 10;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to the cart`);
  };

  const orderedStock = function (product, quantity, supplier) {
    console.log(`${quantity} ${product} ordered from ${supplier}`);
  };


  return {addToCart, orderedStock, cart, cost};
})();


shoppingCart.addToCart('shoes', 3)
shoppingCart.orderedStock('shoes', 3, 'Amazon');

console.log(shoppingCart.cart);


if (module.hot) {
  module.hot.accept();
}
