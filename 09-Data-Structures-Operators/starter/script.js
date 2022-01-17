'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
/*
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

//OPTIONAL CHAINING
// console.log(restaurant.openingHours.mon?.open);

for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day} we open at ${open}`);
}


//For methods

console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
// console.log(restaurant.orderBurger?.(0,1) ?? 'Method does not exist');


//Looping through OBJECTS ---  note, objects are not iterable
const properties = Object.keys(restaurant.openingHours);

const entries = Object.entries(restaurant.openingHours);

// console.log(entries);

for (const [day, {open, close}] of entries) {
  console.log(`On ${day}, we open at ${open} and close at ${close}`);
}

let openStr = `We are open for ${properties.length} days: `
for (const day of properties) {
  openStr += `${day} ,`;
}
console.log(openStr);






/*
//DESTRUCTURING IN ARRAY

const arr = [2,3,4];
const [a,b,c] = arr;

// console.log(a); 

//nested destructuring

const nested = [5,6,[7,8]];

// const [d, e, f] = nested;
const [d, e, [f,g]] = nested;


console.log(d,e,f,g);

//DESTRUCTURING IN OBJECT
const {name, openingHours, categories } = restaurant;
const {name: restaurantName, openingHours: hours, categories: cat } = restaurant;

// console.log(hours);

const {fri: {open, close}} = hours;

// console.log(open);

/* SPREAD OPERATOR */
//Spread Operator is on the RIGHT side
/*
const newMenu = [...restaurant.mainMenu, "Gnocci"];

const mainMenuCopy = [...restaurant.mainMenu];

const menu = [...mainMenuCopy,  ...newMenu];
// console.log(menu);


/* REST OPERATOR */
//REst operator is on the LEFT side
/*
const {sat, ...weekdays} = hours;

// console.log(weekdays.thu);

//Rest operator in functions

const add = function (...numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

const numbers = [23, 10, 10];

// console.log(add(...numbers)); 
console.log(add('a', 'n', 'u')); 


// FOR OF LOOP
for (const item of restaurant.starterMenu) {
  // console.log(item);
}
console.log('********************')
//Getting the index in FOR OF LOOP
for (const [i, el] of restaurant.starterMenu.entries()) {
  // console.log(item);
  // console.log(el);
}

// SET ITERABLE
// How to use set
// Set takes in an array as a parameter

let foodItems = new Set(['rice', 'beans', 'yam', 'potatoes', 'yam', 'beans']);
foodItems.add('yam-flour');
foodItems.delete('yam');

for (const food of foodItems) {
  console.log(food);
}
console.log(foodItems);

//How to convert set to array::: Just use the spread operator
console.log([...foodItems]);

*/


//MAP FUNDAMENTAL
const canteen = new Map();

canteen.set('location', 'Ikeja').set('foods', ['rice', 'amala', 'beans']);


// console.log(canteen);


//WORKING WITH STRINGS
const airline = "IBOM AIR";
const plane = "Q20334";

console.log(airline.indexOf('R'));
console.log(airline.lastIndexOf(' '));
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.indexOf(' ')+1));

//More Example

function serializeEmail(email) {
  return email.toLowerCase().trim();
}

function capitalizeLetter(name) {
  name = name.toLowerCase();
  name = name[0].toUpperCase() + name.slice(1);
  return name;
}

const email = "  AnuOderinlo@GMail.com  ";
console.log(serializeEmail(email));
console.log(capitalizeLetter("aNUoluwapo"));

//SOME STRINGS METHOD
  // String.replace();
  // String.includes();
  // String.startstWith()
  // String.endsWith()

// Using Split() method on string

const sentence = "The learning curve in programming is hard";

console.log(sentence.split(' ').length);


const capitalizeNames = function (names) {
  names = names.split(' ');
  let nameArr = [];

  for (const name of names) {
   nameArr.push(name.replace(name[0], name[0].toUpperCase()))
  }
  console.log(nameArr.join(''));
}

capitalizeNames('anuoluwapo ezekiel oderinlo');

//PADDING STRING
const str = "good padding";

// console.log(str.padStart(15, '*').padEnd(19, '*'));

const maskCreditCard = function (cardNumber) {
  let cardString = String(cardNumber) ;
  let cardStringSlice = cardString.slice(-4);
  console.log(cardStringSlice.padStart(cardString.length, '*'));
}

// maskCreditCard(124558500255572)

