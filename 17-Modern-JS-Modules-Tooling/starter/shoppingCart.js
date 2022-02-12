// Exporting Module

console.log("Exporting Module");

const cart = [];
const cost = 10;

export default function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
}
const totalPrice = 350;

export {cart, cost, totalPrice}