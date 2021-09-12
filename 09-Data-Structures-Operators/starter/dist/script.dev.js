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
}; // ! Coding Challenge 4

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
document.querySelector('button').addEventListener('click', function () {
  var text = document.querySelector('textarea').value;
  var rows = text.split('\n');
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = rows.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = _slicedToArray(_step.value, 2),
          i = _step$value[0],
          names = _step$value[1];

      var _names$toLowerCase$tr = names.toLowerCase().trim().split('_'),
          _names$toLowerCase$tr2 = _slicedToArray(_names$toLowerCase$tr, 2),
          first = _names$toLowerCase$tr2[0],
          second = _names$toLowerCase$tr2[1];

      var output = "".concat(first).concat(second.replace(second[0], second[0].toUpperCase()));
      console.log("".concat(output.padEnd(20)).concat('✅'.repeat(i + 1)));
    }
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
});
/*
// ! Working with string Part-3
// ? Split and Join
console.log('a+very+nice+string'.split('+'));
console.log('Gaurav Sharma'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
const newName = ['Mr.',firstName, lastName. toUpperCase()].join(' ');
console.log(newName);

//? function to Capatalizing the first letter of the string
const capitalizeName = function(name){
  const names = name.split(' ');
  const namesUpper = [];
  for(const n of names){
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0],n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica and smith davis');
capitalizeName('Gaurav Sharma');

// ? Padding a string in JavaScript
const message = 'Go to gate 23';
console.log(message.padStart(20,'+').padEnd(30,'+'));
console.log('Gaurav'.padStart(20,'+').padEnd(30,'+'));

// ? Real example of padding 
const maskCreditCard = function(number){
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length,'*');
}

console.log(maskCreditCard(4536765476572537));
console.log(maskCreditCard('83764283746283'));
//? Repaeat
const message2 = 'Bad weather... All Departures Delayed...';
console.log(message2.repeat(5)); 

const planes = function(n){
  console.log(`There are ${n} planes in the line ${'✈️'.repeat(n)}`);
}
planes(5);
planes(6);

// ! Working with string Part-2
const airline = 'TAP Air Portugal';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
// Fix capitalization in name
const passenger = 'jOnAS'; //Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);
// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = ' Hello@gaurav.Io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimedEmail = lowerEmail.trim();
console.log(trimedEmail);
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

console.log(email === normalizedEmail);
// ?replacing strings
const priceGB = '288,97£';
const priceUS = priceGB.replace('£','$').replace(',','.');
console.log(priceUS);
const announcement = 'All passengers come to barding door 23. Boarding door 23';
// console.log(announcement.replaceAll('door','gate'));
// ? Regular expression
console.log(announcement.replaceAll(/door/g,'gate'));
// ?Boolean Methods 
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boing'));
console.log(plane.startsWith('AIR'));

if(plane.startsWith('Airbus') && plane.endsWith('neo'))
{
  console.log('Part of the NEW Airbus family');
}
// ? Practice exercise
const checkBaggage = function(item){
  const baggage = item.toLowerCase();
  if(baggage.includes('knife') || baggage.includes('gun')){
    console.log('You are NOT allowed on board❌');
  } else{
    console.log('Welcome aboard✔️');
  }
}
checkBaggage('I have a laptop, some food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks anda gun for protection');

// ! Working with string Part-1
const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);
console.log(airline.length);
console.log('B737'.length);
// ? Methods in array
console.log(airline.indexOf('r'));
console.log(airline.slice(4));
console.log(airline.slice(4,7));
console.log(airline.slice(0,airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
console.log(airline.slice(-5));
console.log(airline.slice(1,-1));
// ? Practice
const checkMiddleSeat = function(seat){
  // B and E are middle sets
  const s = seat.slice(-1);
  if(s == 'B' || s == 'E'){
    console.log('You got the middle seat');
  } else
  {
    console.log('You got lucky');
  }
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3B');
// ? Boxing in JavaScript 
console.log(new String('jonas'));
console.log(typeof new String('jonas'));
console.log(typeof new String('jonas').slice(1));

// !Coding Challenge 3
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
// 1 
const events = [...new Set(gameEvents.values())];
console.log(events);
// 2
gameEvents.delete(64);
// 3
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(`An event happened, on average, every ${time/gameEvents.size} minutes`);
// 4
for(const [min, event] of gameEvents){
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}

// ! Maps Iteration in
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2,'JAVA'],
  [3,'JavaScript'],
  [1,'Python'],
  ['correct',3],
  [true,'Correct✅'],
  [false,'Wrong ❌'],
]);
console.log(question);

// Converting objects ot maps
console.log(Object.entries(restaurant.openingHours));
const hoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(hoursMap);
// ? Iterations is possible in maps because we all know maps are also iterables

// Quiz App
console.log(question.get('question'));

for(const [key,value] of question){
    if( typeof key === 'number')
        console.log(`Answer ${key}: ${value}`);
}

const answer = Number(prompt("Your answer"));
console.log(answer);

console.log(question.get(question.get('correct') === answer));
// Converting maps into array
console.log([...question]);

// ! Maps in JavaScript
const rest = new Map();
rest.set('name', 'Sharmas Restaurent');
rest.set(1, 'Dalhousie, India');
rest.set(2, 'Chamba');
console.log(rest.set(3, 'Shimla'));
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed');

  console.log(rest.get('name'));
  console.log(rest.get(true));
  // Example
  const time = 21;
  console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
  // ? Check is a map contains a certain key
  console.log(rest.has('categories'));
  rest.delete(2);
  // rest.clear();
  const arr = [1,2];
  rest.set(arr,'Test');
  rest.set(document.querySelector('h1'),'Heading');
  console.log(rest);
  console.log(rest.size);
  console.log(rest.get(arr));

// ! Sets
const orderSets = new Set(['Pasta', 'Pizza', 'Pasta', 'Pizza']);
// ? Size of the set
console.log(orderSets.size);
// ? To check is a certain element is in the set
console.log(orderSets.has('Pizza'));
console.log(orderSets.has('Bread'));
orderSets.add('Garlic Bread');
orderSets.add('Garlic Bread');
orderSets.delete('Pizza');
console.log(orderSets);
// ? Looping ove the sets
for(const order of orderSets)
{
  console.log(order);
}
// ? Biggest use case of sets is to remove duplicate values from the sets
const staff = ['Waiter','Chef','Waiter','Manager','Chef','Waiter'];
const stuffUnique = new Set(staff);
console.log(stuffUnique);

// ! Codding Challenge 2
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
// 1 looping through array
for(const [index,value] of game.scored.entries()){
  console.log(`Goal ${index}: ${value}`);
}
// 2 Calculating the average odd
let odds = Object.values(game.odds);
let average = 0;
for(const odd of odds){
  average += odd;
}
average /= odds.length;
console.log(average);
// 3 To print the comtent og the object to the console.
for( const [team,odd] of Object.entries(game.odds)){
    const teamString = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of ${teamString} ${odd}`);
}

//! Looping Objects Object Keys,Values and Entries
//? Looping over properties name
const properties = Object.keys(restaurant.openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days`;

for(const day of properties){
  openStr += ` ${day},`;
}
console.log(openStr);
// ? Old one
// for (const day of Object.keys(openingHours)){
//   console.log(day); 
// }

// ! Looping over properties values
const values = Object.values(restaurant.openingHours);
console.log(values);

// ! Looping over entries of the object
const entries = Object.entries(restaurant.openingHours);
console.log(entries);
// ? [key,values]
for ( const [keys, {open,close} ] of entries){
  console.log(`On ${keys} we open at ${open} and close at ${close}`);
}

// ! For-of-loop
const menu = [...restaurant.starterMenu,...restaurant.mainMenu];

for (const item of menu) {
  console.log(item);
}
//? Old way
for (const item of menu.entries()){
  console.log(`${item[0] + 1}: ${item[1]}`);
}
// ? Using destructuring
console.log('XXXXXXXXXX Uing Destructuring XXXXXXXXXXX');
for (const [i,el] of menu.entries()){
  console.log(`${i + 1}: ${el}`);
}

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