'use strict';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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
    console.log("Order received! ".concat(this.starterMenu[starterIndex], " and ").concat(this.mainMenu[mainIndex], " will be devivered to ").concat(address, " at ").concat(time));
  },
  orderPasta: function orderPasta(ing1, ing2, ing3) {
    console.log("Here is your declicious pasts with ".concat(ing1, ",").concat(ing2, "and ").concat(ing3));
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
}; // ? Destructuring objects in javascript

var name = restaurant.name,
    openingHours = restaurant.openingHours,
    categories = restaurant.categories; // Where restaurent is an object

console.log(name, openingHours, categories); // using different names instead of object names

var restaurentName = restaurant.name,
    hours = restaurant.openingHours,
    tags = restaurant.categories;
console.log(restaurentName, hours, tags); // Setting default values in objects

var _restaurant$menu = restaurant.menu,
    menu = _restaurant$menu === void 0 ? [] : _restaurant$menu,
    _restaurant$starterMe = restaurant.starterMenu,
    starters = _restaurant$starterMe === void 0 ? [] : _restaurant$starterMe;
console.log(menu, starters); // mutating variabls in objects

var a = 111;
var b = 999;
var obj = {
  a: 23,
  b: 7,
  c: 14
};
a = obj.a;
b = obj.b;
// when we start a line with {} then javascript axpects a code block
console.log(a, b); // ? Nested Objects

var _openingHours$fri = openingHours.fri,
    o = _openingHours$fri.open,
    c = _openingHours$fri.close;
console.log(o, c);
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2
}); //!Using spread ... operator
//? Wuithout using spread operator

var arr = [7, 8, 9];
var badNewArr = [1, 2, arr[0], arr[2], arr[3]];
console.log(badNewArr); // !With spread operator

var goodNewArr = [1, 2].concat(arr);
console.log(goodNewArr); //! Expanding restaurant object mainmenu array

var newMenu = [].concat(_toConsumableArray(restaurant.mainMenu), ['Gnocci']);
console.log(newMenu); //! ShallowCopy array

var mainMenuCoppy = _toConsumableArray(restaurant.mainMenu); //!Joining two array one or more together


var manu = [].concat(_toConsumableArray(restaurant.mainMenu), _toConsumableArray(restaurant.starterMenu));
console.log(manu); // Interables:- Iterables are arrays,strings,maps,sets but not objects;

var str = 'Gaurav';
var letters = [].concat(_toConsumableArray(str), [' ', 'S.']);
console.log(letters); // ! function + desctructuring
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1"),
//   prompt("Let's make pasta! Ingredient 2"),
//   prompt("Let's make pasta! Ingredient 3"),
// ];
// restaurant.orderPasta(ingredients[0],ingredients[1],ingredients[2]);
// restaurant.orderPasta(...ingredients);
//! Itrating objects using spread operator
//object

var newRestaurant = _objectSpread({
  foundedIn: 1998
}, restaurant, {
  founder: "Gaurav"
});

var restaurantCopy = _objectSpread({}, restaurant);

restaurantCopy.name = "Sharma's Resaturent";
console.log(restaurant.name);
console.log(restaurantCopy.name);
var game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [['Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski'], ['Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze']],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5
  }
};