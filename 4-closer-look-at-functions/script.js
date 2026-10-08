'use strict';

/*
///////////////////////////////////////
// Default Parameters

// Used when an argument is omitted.
//
// Rules:
// - Applied only for undefined.
// - Evaluated left to right.
// - Can use previous parameters.
// - Replaced the old ES5 pattern:
//   param = param || defaultValue;

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

/*
///////////////////////////////////////
// How Passing Arguments Works:
// Primitives (Value) vs Objects (Reference)


//NOTE: most important note comes from C and C++ learner first time in javascript
// JavaScript does NOT pass objects by reference.
//
// JavaScript passes everything by value.
//
// For objects, the value being copied is
// the object's reference (memory address).


// Objects are passed by reference
// Technically that's not true.
// A copy of the reference is passed.

// Primitive Types:
// string
// number
// boolean
// undefined
// null
// bigint
// symbol
//
// Copied by value.

// Objects live in the heap.
//
// Variables store a reference (address)
// to the object in memory.

const flight = 'LH234';

const rishi = {
  name: 'Rishi Yadav',
  passport: 24739479284,
};


// Function receives copies of the arguments.
//
// Primitive values are copied.
// Object references are copied.

const checkIn = function (flightNum, passenger) {

  
  // Changing a primitive parameter does NOT affect
  // the original variable outside the function.

  flightNum = 'LH999';

  
  // passenger contains a copy of the object's reference.
  // Both passenger and rishi point to the same object.
  //
  // Therefore modifying object properties affects
  // the original object.

  passenger.name = 'Mr. ' + passenger.name;

  
  // Check passport number

  if (passenger.passport === 24739479284) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, rishi);

// console.log(flight);
// console.log(rishi);


// Function parameters receive copies.
//
// Equivalent to:

// const flightNum = flight;    // primitive copy
// const passenger = rishi;     // copied reference


// Mutates (changes) the original object.

const newPassport = function (person) {

  // Generate a random passport number.
  person.passport = Math.trunc(
    Math.random() * 100000000000
  );
};


// Change passport before check-in

newPassport(jonas);


// Passport validation now fails because
// the original passport number was changed.

checkIn(flight, jonas);

// Summary 
// Passing Arguments in JavaScript
//
// Primitive values:
// - A copy of the value is passed.
// - Changes do NOT affect the original.
//
// Objects:
// - A copy of the reference is passed.
// - Changes to object properties affect
//   the original object.
*/

/*
///////////////////////////////////////
// Functions Accepting Callback Functions

// Callback Function:
//
// A function passed as an argument
// to another function so it can be
// executed later.

// Callback Function #1
//
// Removes all spaces and converts
// the string to lowercase.

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

// Callback Function #2
//
// Converts only the first word to uppercase.

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');

  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-Order Function
//
// A higher-order function is a function
// that receives another function as an argument,
// returns a function, or both.

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);

  // Execute the callback function.

  console.log(`Transformed string: ${fn(str)}`);

  // name returns the function name.

  console.log(`Transformed by: ${fn.name}`);
};

// Passing callback functions.
//
// Notice:
// We pass the function itself,
// NOT the result of calling the function.

transformer('JavaScript is the best!', upperFirstWord);

transformer('JavaScript is the best!', oneWord);

// JavaScript uses callbacks everywhere.

const high5 = function () {
  console.log('👋');
};

// Event listener callback.
//
// high5 executes whenever
// the click event occurs.

document.body.addEventListener('click', high5);

// forEach callback.
//
// high5 executes once for each element.

['Rishi', 'Martha', 'Adam'].forEach(high5);

// Summary

// Callback Function
//
// A function passed into another function
// to be executed later.
//
// Examples:
// - forEach()
// - map()
// - filter()
// - reduce()
// - addEventListener()
//
// Higher-Order Function
//
// A function that:
// 1. Accepts another function,
// 2. Returns a function,
// 3. Or both.
*/


/*
///////////////////////////////////////
// Functions Returning Functions

// Higher-Order Function
//
// Returns another function instead of a value.

const greet = function (greeting) {
  // Returned function has access to the greeting variable
  // even after greet() has finished execution.
  // This happens because of closures.

  // Closure:
  //
  // The returned function remembers variables
  // from the scope where it was created.

  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

// Call greet() and store the returned function.

const greeterHey = greet('Hey');

// Execute the returned function.

greeterHey('Rishi');
greeterHey('Yadav');

// Equivalent to:
//
// greet('Hello') returns a function.
// Then that returned function is immediately executed.

greet('Hello')('Rishi');

// Arrow Function Version
//
// Same functionality written using
// concise arrow function syntax.

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Rishi');

// Summary
// Functions Returning Functions
//
// A function can return another function.
//
// Uses:
// - Closures
// - Currying
// - Partial Application
// - Middleware
// - Event Handlers
//
// The returned function remembers variables
// from its creation scope (closure).
*/



///////////////////////////////////////
// The call() and apply() Methods

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],

  // Method shorthand (ES6)
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );

    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      name,
    });
  },
};


// Regular method calls

lufthansa.book(239, 'Rishi Yadav');
lufthansa.book(635, 'John Smith');


const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};


// Store the method in a separate variable.

const book = lufthansa.book;


// Does NOT work.
//
// book() is now a regular function call.
// In strict mode, `this` becomes undefined.
//
// book(23, 'Sarah Williams');


// call()
//
// call() allows us to manually set the
// value of `this` when invoking a function.
//
// Syntax:
// fn.call(thisArg, arg1, arg2, ...)

book.call(eurowings, 23, 'Sarah Williams');

console.log(eurowings);


// Here `this` points to lufthansa.

book.call(lufthansa, 239, 'Mary Cooper');

console.log(lufthansa);


// Another airline object

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};


// Reuse the same booking function for Swiss.

book.call(swiss, 583, 'Mary Cooper');


// apply()
//
// Similar to call(), but arguments are
// passed as an array.
//
// Syntax:
// fn.apply(thisArg, [arg1, arg2])

const flightData = [583, 'George Cooper'];

book.apply(swiss, flightData);

console.log(swiss);


// Modern JavaScript prefers call()
// with the spread operator.

book.call(swiss, ...flightData);