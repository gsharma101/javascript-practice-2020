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

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
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
/*
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
