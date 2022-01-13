'use strict';
/*
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
};


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
*/

//CODING CHALLENGE