'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
          i + 1
        } ${type}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value,
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value,
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username,
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES


/*
///////////////////////////////////////
// Converting and Checking Numbers

// ===============================================
// 1. Understanding JavaScript numbers

// JavaScript uses the Number type for both integers and decimals.
// 23 and 23.0 represent the same numeric value.
console.log(23 === 23.0); // true

// JavaScript uses IEEE 754 double-precision floating-point numbers.
// Some decimal fractions cannot be represented exactly in binary.
console.log(0.1 + 0.2); // 0.30000000000000004

// Therefore, this comparison is false.
console.log(0.1 + 0.2 === 0.3); // false

// ===============================================
// 2. Converting strings to numbers

// Number() explicitly converts a value to a number.
console.log(Number('23')); // 23

// The unary plus (+) operator also converts a value to a number.
console.log(+'23'); // 23

// ===============================================
// 3. Parsing integers

// Number.parseInt() reads an integer from the beginning of a string.
// The second argument specifies the radix (base); 10 means decimal.
console.log(Number.parseInt('30px', 10)); // 30

// Parsing fails when the string does not begin with a valid integer.
console.log(Number.parseInt('e23', 10)); // NaN

// Leading whitespace is ignored.
// parseInt() stops when it reaches the decimal point.
console.log(Number.parseInt('  2.5rem  ', 10)); // 2

// ===============================================
// 4. Parsing floating-point numbers

// Number.parseFloat() reads a number, including its decimal part,
// from the beginning of a string and stops at the first invalid character.
console.log(Number.parseFloat('  2.5rem  ')); // 2.5

// The global parseFloat() function also works, but using
// Number.parseFloat() makes the relationship to Number explicit.
// console.log(parseFloat('  2.5rem  '));

// ===============================================
// 5. Checking for NaN

// NaN means "Not-a-Number" and often indicates a failed conversion
// or an invalid mathematical result.
//
// Number.isNaN() checks whether the value itself is NaN.
// It does NOT convert strings to numbers first.
console.log(Number.isNaN(20));       // false
console.log(Number.isNaN('20'));     // false
console.log(Number.isNaN(+'20X'));   // true: conversion produces NaN
console.log(Number.isNaN(23 / 0));   // false: result is Infinity

// ===============================================
// 6. Checking whether a value is finite

// Number.isFinite() returns true only for numeric values that are
// neither Infinity, -Infinity, nor NaN.
// It does not convert strings to numbers.
console.log(Number.isFinite(20));     // true
console.log(Number.isFinite('20'));   // false: this is a string
console.log(Number.isFinite(+'20X')); // false: this is NaN
console.log(Number.isFinite(23 / 0)); // false: result is Infinity

// ===============================================
// 7. Checking whether a value is an integer

// Number.isInteger() checks whether a value is a finite number
// with no fractional part.
console.log(Number.isInteger(23));     // true
console.log(Number.isInteger(23.0));   // true: same value as 23
console.log(Number.isInteger(23 / 0)); // false: Infinity is not an integer

// ===============================================
// QUICK REVISION
//
// Number(value) / +value
// -> Convert a value to a number.
//
// Number.parseInt(value, radix)
// -> Parse an integer from the start of a string.
//
// Number.parseFloat(value)
// -> Parse a decimal number from the start of a string.
//
// Number.isNaN(value)
// -> Check whether the value is NaN without converting it.
//
// Number.isFinite(value)
// -> Check whether the value is a finite number.
//
// Number.isInteger(value)
// -> Check whether the value is an integer.
//
// Important:
// - 23 === 23.0 is true.
// - Floating-point calculations can produce small precision errors.
// - parseInt('30px', 10) returns 30, but Number('30px') returns NaN.
// - Number.isNaN('20') is false because '20' is a string, not NaN.
// - Division of a nonzero number by zero produces Infinity.
// - Use Number.isFinite() to reject NaN and Infinity in numeric checks.

*/

/*
///////////////////////////////////////
// Math and Rounding

// ===============================================
// 1. Square roots and powers

// Math.sqrt() calculates the square root of a number.
console.log(Math.sqrt(25)); // 5

// The exponent 1 / 2 is another way to calculate a square root.
console.log(25 ** (1 / 2)); // 5

// The exponent 1 / 3 calculates the cube root.
console.log(8 ** (1 / 3)); // 2

// ===============================================
// 2. Finding maximum and minimum values

// Math.max() returns the largest of the supplied arguments.
console.log(Math.max(5, 18, 23, 11, 2)); // 23

// Numeric strings are converted to numbers during this calculation.
console.log(Math.max(5, 18, '23', 11, 2)); // 23

// A string such as '23px' cannot be converted to a number.
// Math.max() returns NaN if an argument cannot be converted to a number.
console.log(Math.max(5, 18, '23px', 11, 2)); // NaN

// Math.min() returns the smallest of the supplied arguments.
console.log(Math.min(5, 18, 23, 11, 2)); // 2

// ===============================================
// 3. Calculating the area of a circle

// Area = π × radius²
// Number.parseFloat() extracts the numeric prefix from '10px'.
// The radius is therefore 10, and the area is approximately 314.16.
console.log(Math.PI * Number.parseFloat('10px') ** 2);

// ===============================================
// 4. Generating random numbers

// Math.random() returns a pseudo-random number in the range [0, 1).
// Multiplying by 6 gives a value in [0, 6).
// Math.trunc() removes the decimal part, producing 0 through 5.
// Adding 1 gives a random integer from 1 through 6, like a die.
console.log(Math.trunc(Math.random() * 6) + 1);

// Generate a random integer between min and max, inclusive.
// max - min + 1 gives the number of possible integer values.
// Math.random() * that range produces a value from 0 up to,
// but not including, the range size.
// Math.floor() converts it into an integer offset.
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomInt(10, 20)); // Integer from 10 through 20.
console.log(randomInt(0, 3));   // Integer from 0 through 3.

// ===============================================
// 5. Rounding positive numbers to integers

// Math.round() rounds to the nearest integer.
// Fractions of 0.5 or greater round toward positive infinity.
console.log(Math.round(23.3)); // 23
console.log(Math.round(23.9)); // 24

// Math.ceil() rounds toward positive infinity.
console.log(Math.ceil(23.3)); // 24
console.log(Math.ceil(23.9)); // 24

// Math.floor() rounds toward negative infinity.
console.log(Math.floor(23.3)); // 23

// Math.floor() converts the numeric string to a number first.
console.log(Math.floor('23.9')); // 23

// Math.trunc() removes the fractional part, moving toward zero.
console.log(Math.trunc(23.3)); // 23

// ===============================================
// 6. Understanding negative numbers

// Math.trunc() removes the decimal part and moves toward zero.
console.log(Math.trunc(-23.3)); // -23

// Math.floor() rounds down toward negative infinity.
console.log(Math.floor(-23.3)); // -24

// Notice that floor() and trunc() give different results
// for negative numbers with a fractional part.

// ===============================================
// 7. Rounding decimal places with toFixed()

// toFixed() returns a STRING with the specified number of decimal places.
// It rounds the number to that precision and pads zeros if necessary.
console.log((2.7).toFixed(0));   // '3'
console.log((2.7).toFixed(3));   // '2.700'
console.log((2.345).toFixed(2)); // '2.35'

// Use unary plus (+) to convert the formatted string back to a number.
// Trailing zeros are not preserved in a numeric value.
console.log(+(2.345).toFixed(2)); // 2.35

// ===============================================
// QUICK REVISION
//
// Math.sqrt(x) -> Square root.
// x ** (1 / 2) -> Square root using exponentiation.
// x ** (1 / 3) -> Cube root.
//
// Math.max(...) -> Largest argument.
// Math.min(...) -> Smallest argument.
//
// Math.random() -> Pseudo-random number in [0, 1).
// Math.floor()  -> Rounds toward negative infinity.
// Math.ceil()   -> Rounds toward positive infinity.
// Math.trunc()  -> Removes the decimal part, toward zero.
// Math.round()  -> Rounds to the nearest integer.
//
// number.toFixed(digits) -> Returns a formatted string.
//
// Important:
// - Math.floor(-23.3) is -24, but Math.trunc(-23.3) is -23.
// - Math.random() is not suitable for security-sensitive randomness.
// - toFixed() returns a string, even when digits is 0.
// - Floating-point representation can affect decimal rounding.
*/

/*
///////////////////////////////////////
// The Remainder Operator (%)

// ===============================================
// 1. Understanding the remainder operator

// % returns the remainder after division.
// 5 = (2 * 2) + 1, so the remainder is 1.
console.log(5 % 2); // 1
console.log(5 / 2); // 2.5

// 8 = (2 * 3) + 2, so the remainder is 2.
console.log(8 % 3); // 2
console.log(8 / 3); // 2.666...

// If a number is divisible by another number, the remainder is 0.
console.log(6 % 2); // 0
console.log(6 / 2); // 3

// 7 divided by 2 leaves a remainder of 1.
console.log(7 % 2); // 1
console.log(7 / 2); // 3.5

// ===============================================
// 2. Checking whether a number is even

// Even numbers are divisible by 2 with no remainder.
// Therefore, n % 2 === 0 means n is even.
const isEven = n => n % 2 === 0;

console.log(isEven(8));   // true
console.log(isEven(23));  // false
console.log(isEven(514)); // true

// ===============================================
// 3. Using the remainder operator to style DOM elements

// When the balance label is clicked, select all movement rows
// and convert the NodeList into an array using the spread operator.
labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(
    function (row, i) {
      // Highlight rows with even indexes: 0, 2, 4, 6, ...
      if (i % 2 === 0) {
        row.style.backgroundColor = 'orangered';
      }

      // Highlight rows whose indexes are divisible by 3:
      // 0, 3, 6, 9, ...
      //
      // This runs after the first condition, so blue overrides
      // orangered when an index satisfies both conditions.
      if (i % 3 === 0) {
        row.style.backgroundColor = 'blue';
      }
    }
  );
});

// ===============================================
// QUICK REVISION
//
// n % 2 === 0 -> Even number.
// n % 2 !== 0 -> Odd number (for integers).
// n % 3 === 0 -> Divisible by 3.
//
// Important:
// - % returns the remainder, not the division result.
// - An even index satisfies i % 2 === 0.
// - Indexes divisible by 3 satisfy i % 3 === 0.
// - Both conditions can be true for the same index.
// - Since the blue style is applied second, it takes priority
//   when both conditions match.
*/
