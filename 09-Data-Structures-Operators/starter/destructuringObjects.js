'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
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
const {name,openingHours,categories} = restaurant; // Where restaurent is an object
console.log(name,openingHours,categories);

// using different names instead of object names
const {name: restaurentName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurentName, hours, tags); 

// Setting default values in objects
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutating variabls in objects
let a = 111;
let b = 999;

const obj = {a:23, b:7, c:14};
({a,b} = obj);
console.log(a,b);

// ? Nested Objects
const {fri : {open:o, close:c}} = openingHours;
console.log(o,c);

