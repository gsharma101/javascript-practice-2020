'use strict';

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
    console.log("Order received! ".concat(this.starterMenu[starterIndex], " and ").concat(this.mainMenu[mainIndex], " will be delivered to ").concat(address, " at ").concat(time));
  },
  orderPasta: function orderPasta(ing1, ing2, ing3) {
    console.log("Here is your delicious pasta with ".concat(ing1, ", ").concat(ing2, " and ").concat(ing3));
  },
  orderPizza: function orderPizza(mainIngredient) {
    console.log(mainIngredient);

    for (var _len = arguments.length, otherIngredients = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      otherIngredients[_key - 1] = arguments[_key];
    }

    console.log(otherIngredients);
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
}; // ! For-of-loop

var menu = [].concat(_toConsumableArray(restaurant.starterMenu), _toConsumableArray(restaurant.mainMenu));
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = menu[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var item = _step.value;
    console.log(item);
  } //? Old way

} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = menu.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var _item = _step2.value;
    console.log("".concat(_item[0] + 1, ": ").concat(_item[1]));
  } // ? Using destructuring

} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
      _iterator2["return"]();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

console.log('XXXXXXXXXX Uing Destructuring XXXXXXXXXXX');
var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
  for (var _iterator3 = menu.entries()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
    var _step3$value = _slicedToArray(_step3.value, 2),
        i = _step3$value[0],
        el = _step3$value[1];

    console.log("".concat(i + 1, ": ").concat(el));
  }
  /*
  // ! First Coding Challenge
  const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };
  // ? Challenge starts
  // 1
  const [players1, players2] = game.players;
  console.log(players1, players2);
  // 2
  const [gk, ...fieldPLayers] = players1;
  console.log(gk, fieldPLayers);
  // 3
  const allPlayers = [...players1, ...players2];
  // 4
  const players1Final = [players1, 'Thiaho', 'Coutinho', 'Periscic'];
  // 5 Nested destructuring of odds property
  const {
    odds: { team1, X: draw, team2 },
  } = game;
  console.log(team2,draw,team2);
  // 6
  const printGoals = function(...players){
    console.log(`${players.length} goals were scored`);
  }
  
  printGoals('Devies','Miller','Lewandowski','kimmich');
  printGoals('Devies','Miller');
  printGoals(...game.score);
  
  // 7
  team1 < team2 && console.log(`Team 1 is more likeely to win`);
  team1 > team2 && console.log(`Team 2 is more likeely to win`);
  
  // !Nullish coalesing operator
  restaurant.numGuests = 0;
  const guests = restaurant.numGuests || 10;
  console.log(guests);
  // Nullish: null and undefined (Not 0 or '')
  const guestCorrect = restaurant.numGuests ?? 10;
  console.log(guestCorrect); 
  
  console.log('----------OR------------');
  // ! Use ANY data type, return ANY data type, short-circuiting
  // ? Short circuiting using || operator
  console.log(3 || 'Gaurav');
  console.log('' || 'Jonas');
  console.log(true || 0);
  console.log(undefined || null);
  
  console.log(undefined || 0 ||''||'Hello'||23||null);
  restaurant.numGuests = 23;
  const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
  console.log(guests1);
  
  const guests2 = restaurant.numGuests || 10;
  console.log(guests2);
  console.log('----------AND-----------');
  console.log(0 && 'Jonas');
  console.log(7 && 'Jonas');
  console.log('Hello'&& 23 && null && 'jonas');
  // Practical example
  if(restaurant.orderPizza){
    restaurant.orderPizza('mushroooms','spinach');
  }
  // above example with 
  restaurant.orderPizza && restaurant.orderPizza('mushrooms','spinach');
  
  // !Rest Pattern Destructuring
  // ? This is SPREAD, because it is in the RIGHT side of the =
  const arr = [1,2,...[3,4]];
  // ? This is REST, because it is in the LEFT side of the =
  const [a,b,...others] = [1,2,3,4,5];
  console.log(a,b,others);
  
  const [pizza, ,risotto,...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
  console.log(pizza,risotto,otherFood);
  
  //Objects
  const {sat, ...weekdays} = restaurant.openingHours;
  console.log(weekdays);
  
  // ? Functions
  const add = function(...numbers){
    let sum = 0;
    for(let i = 0; i<numbers.length; i++)
    {
      sum += numbers[i];
    }
    console.log(sum);
  };
  // Any arbitary amount of arguments should work for this function
  add(2,3);
  add(5,3,7,2);
  // Another example
  const x = [23,5,7];
  add(...x);
  
  restaurant.orderPizza('mashroom','onion','olives','spinach');
  restaurant.orderPizza('mushroom');
  
  // ! Spread Operator
  const arr = [7, 8, 9];
  const badNewArr = [1, 2, arr[1], arr[2]];
  console.log(badNewArr);
  // ? Using spread operator
  const newArr = [1, 2, ...arr];
  console.log(newArr);
  
  const newMenu = [...restaurant.mainMenu, 'Gnocci']; //Completely a new array
  console.log(newMenu);
  
  // Coppy of array
  const mainMenuCoppy = [...restaurant.mainMenu];
  // Joining 2 arrays
  const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
  console.log(menu);
  // Iterables:
  const str = 'Jonas';
  const letters = [...str, ' ', 'S.'];
  console.log(letters);
  
  const ingridients = [
    // prompt("Let's make pasta! Ingredient 1?"),
    // prompt("Let's make pasta! Ingredient 2?"),
    // prompt("Let's make pasta! Ingredient 3?"),
  ];
  console.log(ingridients);
  // Order pasta function
  // restaurant.orderPasta(ingridients[0],ingridients[1],ingridients[3]); old way 
  restaurant.orderPasta(...ingridients);
  // using spread operator with objects
  const newRestaurant = {foundingYear:1998,...restaurant, founder:'Gaurav Sharma'};
  
  console.log(newRestaurant);
  // Copy of object
  const restaurentCopy = {...restaurant};
  restaurentCopy.name = "Sharmas Restaurent";
  console.log(restaurentCopy);
  
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

} catch (err) {
  _didIteratorError3 = true;
  _iteratorError3 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
      _iterator3["return"]();
    }
  } finally {
    if (_didIteratorError3) {
      throw _iteratorError3;
    }
  }
}