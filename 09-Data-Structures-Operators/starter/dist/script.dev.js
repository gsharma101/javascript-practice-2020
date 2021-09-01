'use strict';

var restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function orderDelivery(_ref) {
    var _ref$starterIndex = _ref.starterIndex,
        starterIndex = _ref$starterIndex === void 0 ? 1 : _ref$starterIndex,
        _ref$mainIndex = _ref.mainIndex,
        mainIndex = _ref$mainIndex === void 0 ? 0 : _ref$mainIndex,
        _ref$time = _ref.time,
        time = _ref$time === void 0 ? '20:00' : _ref$time,
        address = _ref.address;
    console.log("Order received! ".concat(this.starterMenu[starterIndex], " and ").concat(this.mainMenu[mainIndex], " will be delivered to ").concat(address, " at ").concat(time));
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22
    },
    fri: {
      open: 11,
      close: 23
    },
    sat: {
      open: 0,
      // Open 24 hours
      close: 24
    }
  }
}; // ! Spread Operator

/*
// !Destructuring of objects begins
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

//! Destructuring of array

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//! Dstructuring of array above example can be written as
const [x, y, z] = arr;
console.log(x, y, z);

//!getting elements from restaurant categories
// const [first, second] = restaurant.categories;
// console.log(first, second);
//!changing secondary and main item in categories

// skipped pizzeria from the categories
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//!switching varibales without destructuring 
//? First Method

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//? Second Mathod

[main, secondary] = [secondary, main];
console.log(main, secondary);
// console.log(restaurant.order(2,0));

// Receiving 2 return value from a function
const [starter, mainCourse] = restaurant.order(2,0);
console.log(starter,mainCourse);
const nested = [2,4,[5,6]];

// const [i,,j] = nested;
// console.log(i,j);
// ! Doing destructuring inside of desecturing
const [i,,[j,k]] = nested;
console.log(i,j,k); // this gives ous seperate variables

//! setting default values of varibles when we are setting them
const [p=1,q=1,r=1] = [8,9];
console.log(p,q,r);
*/