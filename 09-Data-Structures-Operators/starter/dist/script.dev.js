'use strict';

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
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
}; //! Destructuring of array

var arr = [2, 3, 4];
var a = arr[0];
var b = arr[1];
var c = arr[2]; //! Dstructuring of array

var x = arr[0],
    y = arr[1],
    z = arr[2];
console.log(x, y, z); //!getting elements from restaurant categories
// const [first, second] = restaurant.categories;
// console.log(first, second);
//!changing secondary and main item in categories
// skipped pizzeria from the categories

var _restaurant$categorie = _slicedToArray(restaurant.categories, 3),
    main = _restaurant$categorie[0],
    secondary = _restaurant$categorie[2];

console.log(main, secondary); //!switching varibales without destructuring 
//? First Method
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);
//? Second Mathod

var _ref = [secondary, main];
main = _ref[0];
secondary = _ref[1];
console.log(main, secondary); // console.log(restaurant.order(2,0));
// Receiving 2 return value from a function

var _restaurant$order = restaurant.order(2, 0),
    _restaurant$order2 = _slicedToArray(_restaurant$order, 2),
    starter = _restaurant$order2[0],
    mainCourse = _restaurant$order2[1];

console.log(starter, mainCourse);
var nested = [2, 4, [5, 6]]; // const [i,,j] = nested;
// console.log(i,j);
// ! Doing destructuring inside of desecturing

var i = nested[0],
    _nested$ = _slicedToArray(nested[2], 2),
    j = _nested$[0],
    k = _nested$[1];

console.log(i, j, k); // this gives ous seperate variables
//! setting default values of varibles when we are setting them

var _ref2 = [8, 9],
    _ref2$ = _ref2[0],
    p = _ref2$ === void 0 ? 1 : _ref2$,
    _ref2$2 = _ref2[1],
    q = _ref2$2 === void 0 ? 1 : _ref2$2,
    _ref2$3 = _ref2[2],
    r = _ref2$3 === void 0 ? 1 : _ref2$3;
console.log(p, q, r);