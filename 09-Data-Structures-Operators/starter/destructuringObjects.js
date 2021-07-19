'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address} 
  ) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be devivered to ${address} at ${time}`
    );
  },

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

// ? Destructuring objects in javascript
const { name, openingHours, categories } = restaurant; // Where restaurent is an object
console.log(name, openingHours, categories);

// using different names instead of object names
const {
  name: restaurentName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurentName, hours, tags);

// Setting default values in objects
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutating variabls in objects
let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj); // when we start a line with {} then javascript axpects a code block
console.log(a, b);

// ? Nested Objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

//!Using spread ... operator

//? Wuithout using spread operator
const arr = [7,8,9];
const badNewArr = [1,2, arr[0],arr[2],arr[3]];
console.log(badNewArr);

// !With spread operator
const goodNewArr = [1,2,...arr];
console.log(goodNewArr);

//! Expanding restaurant object mainmenu array
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//! ShallowCopy array
const mainMenuCoppy = [...restaurant.mainMenu];

//!Joining two array one or more together
const manu = [...restaurant.mainMenu,...restaurant.starterMenu];
console.log(manu);

// Interables:- Iterables are arrays,strings,maps,sets but not objects;

const str = "Gaurav";
const letters = [...str,' ', 'S.'];
console.log(letters)
