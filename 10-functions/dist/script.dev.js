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
*/
// !How Passing Arguments Works Vs Reference

var flight = 'LH234';
var Gaurav = {
  name: 'Gaurav Sharma',
  passport: 63487263847623
};

var checkIn = function checkIn(flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = "Mr. " + Gaurav.name;

  if (passenger.passport === 63487263847623) {
    alert('Checked in ✅');
  } else {
    alert('Wrong passport! ❌');
  }
}; // checkIn(flight,Gaurav);
// console.log(flight);
// console.log(Gaurav);
// Is the same as doing...
// const fllightNum = flight;
// const passenger = jonas;


var newPassport = function newPassport(person) {
  person.passport = Math.trunc(Maths.random() * 100000000);
};

newPassport(Gaurav);
checkIn(flight, Gaurav);