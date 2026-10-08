'use strict';

/*
///////////////////////////////////////
// Default Parameters

const bookings = [];

const createBooking = function (
  flightNum,

  // If no value is provided, numPassengers defaults to 1.
  numPassengers = 1,

  // Default values can use previous parameters.
  // If price is not provided:
  // price = 199 * numPassengers
  price = 199 * numPassengers
) {

  
  // ES5 Way (Before ES6 Default Parameters)

  // numPassengers = numPassengers || 1;
  // price = price || 199;

  
  // Create booking object

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);

  // Store booking in bookings array.
  bookings.push(booking);
};


// Using Default Parameters

// numPassengers = 1
// price = 199
createBooking('LH123');


// All values provided

createBooking('LH123', 2, 800);


// price uses default value
// 199 * 2 = 398

createBooking('LH123', 2);


// price uses default value
// 199 * 5 = 995

createBooking('LH123', 5);


// Skip numPassengers and use default value.
//
// When we want to skip a parameter and provide
// a later parameter, we pass undefined.
//
// numPassengers = 1 (default)
// price = 1000

createBooking('LH123', undefined, 1000);
*/