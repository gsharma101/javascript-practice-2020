'use strict';
/*
// !Default Parameters in functions
const bookings = [];
const createBooking = function(flightNum,numPassengers = 1,price = 199 * numPassengers){
    // ES5 old way
    // numPassengers = numPassengers || 1;
    // price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price,
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking("LH123");
createBooking("LH123",2,800);
createBooking("LH123",undefined,800);

// !How Passing Arguments Works Vs Reference

const flight = 'LH234';
const Gaurav = {
    name:'Gaurav Sharma',
    passport:63487263847623,
}

const checkIn = function(flightNum,passenger){
    flightNum = 'LH999';
    passenger.name = "Mr. "+Gaurav.name;
    if(passenger.passport === 63487263847623){
        alert('Checked in ✅');
    } else {
        alert('Wrong passport! ❌');
    }
}

// checkIn(flight,Gaurav);
// console.log(flight);
// console.log(Gaurav);

// Is the same as doing...
// const fllightNum = flight;
// const passenger = jonas;

const newPassport = function(person){
    person.passport = Math.trunc(Maths.random() * 100000000);
};

newPassport(Gaurav);
checkIn(flight,Gaurav);

// !Functions accepting callback funvtion.
const oneWord = function(str){
    return str.replace(/ /g,'').toLowerCase();
};

const upperFirstWord = function(str){
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

// Higher Order Function
const transform = function(str, fn){
    console.log(`Original String: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
};

transform('JavaScript is the best!', upperFirstWord);
transform('JavaScript is th best',oneWord); 

// JS uses claaback all the time
const high5 = function(){
    console.log("👋");
};

document.body.addEventListener('click',high5);

// !Function Returning function

const greet = function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Gaurav');

// ? Using Arrow Function
// const greetArr = greeting => name => console.log(`${greeting} ${name}`);
const greet2 = (greeting2)=>{
    return (name2)=>{
        console.log(`${greeting2} ${name2}`);
    }
}

greet2('Whatsup')('Gaurav');

// !The Call and apply Methods

const Vistara = {
  airline: 'Vistara',
  iataCode: 'LH',
  bookings: [],
  // book: function(){ } ordway
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
};

Vistara.book(239, 'Gaurav Sharma');
Vistara.book(239, 'Aryan Sharma');
console.log(Vistara);
// ? New airline of the same company
const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = Vistara.book;
// Don't work
// book(23,'Saraha Williams');

// ? Call Method
book.call(eurowings, 23, 'Saraha Williams');
console.log(eurowings);

book.call(Vistara, 239, 'Mary Cooper');
console.log(Vistara);

// ? New airlines

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 242, 'Rahul Sharma');
console.log(swiss);

// Apply Method
const flightData = [586, 'George Cooper'];
book.apply(swiss, flightData);

// ! The bind operator
const bookEW = book.bind(eurowings);
const bookVS = book.bind(Vistara);
const bookLX = book.bind(swiss);
bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Gaurav Sharma');
bookEW23('Tony Stark');

//? With Event Listener
Vistara.planes = 30;
Vistara.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', Vistara.buyPlane.bind(Vistara));

//? Partial Application

const addTax = (rate,value) => value + value * rate;
console.log(addTax(0.1,200));

const addVAT = addTax.bind(null,0.23);
// addVat = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(200));
console.log(addVAT(400));
//? Above program using function return function + 
const addTax2 = rate2 => value2 => console.log(value2 + value2 * rate2);

const addVAT2 = addTax2(0.23);
addVAT2(233);
addVAT2(453);
*/

// ! Coding Challlenge 1
/*
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
  question: 'What is your favouririte programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0,0,0,0] More in the next sextion in array section 
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n (Write option number)`
      )
    );
    console.log(answer);
    // Register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;
      this.displayResults();
      this.displayResults('string');
  },

  displayResults(type = 'array'){
      if(type === 'array'){
        console.log(this.answers);
      }else if(type === 'string'){
        console.log(`Poll results are ${this.answers.join(',')}`);
      }
  },
};

poll.registerNewAnswer();
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

  poll.displayResults.call({answers: [5,2,3]}, 'string');

  // [5,2,3]
  // [1,5,3,9,6,1]
