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
const flightData = [586,'George Cooper'];
book.apply(swiss,flightData);
*/