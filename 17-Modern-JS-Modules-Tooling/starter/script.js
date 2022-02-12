// Importing Module

// import {addToCart} from "./shoppingCart.js";

// import * as ShoppingCart from "./shoppingCart.js";
import add, {cart} from "./shoppingCart.js"

console.log("Importing Module");

// console.log(ShoppingCart);


// ShoppingCart.addToCart('Shoes', 5)
add('Shoes', 5)
add('T-shirt', 3)

console.log(cart);