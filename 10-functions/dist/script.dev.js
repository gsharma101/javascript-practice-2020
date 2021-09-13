'use strict'; // !Default Parameters in functions

var bookings = [];

var createBooking = function createBooking(flightNum) {
  var numPassengers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var price = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 199 * numPassengers;
  // ES5 old way
  // numPassengers = numPassengers || 1;
  // price = price || 199;
  var booking = {
    flightNum: flightNum,
    numPassengers: numPassengers,
    price: price
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", undefined, 800);