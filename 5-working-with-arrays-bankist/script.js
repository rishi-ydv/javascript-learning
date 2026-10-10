'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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
/////////////////////////////////////////////////
// LECTURES


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*
/////////////////////////////////////////////////
// Simple Array Methods

let arr = ['a', 'b', 'c', 'd', 'e'];

// ===============================================
// 1. SLICE()
// Returns a shallow copy of a portion of an array.
// Does NOT modify the original array.
// The end index is excluded.

// Extract elements from index 2 to the end.
console.log(arr.slice(2)); // ['c', 'd', 'e']

// Extract elements from index 2 up to (but not including) index 4.
console.log(arr.slice(2, 4)); // ['c', 'd']

// A negative index counts backward from the end of the array.
console.log(arr.slice(-2)); // ['d', 'e']

// Extract the last element.
console.log(arr.slice(-1)); // ['e']

// Start at index 1 and stop before the second-last element.
console.log(arr.slice(1, -2)); // ['b', 'c']

// Omit both arguments to create a shallow copy of the entire array.
console.log(arr.slice()); // ['a', 'b', 'c', 'd', 'e']

// The spread operator also creates a shallow copy of the array.
console.log([...arr]); // ['a', 'b', 'c', 'd', 'e']

// ===============================================
// 2. SPLICE()
// Adds, removes, or replaces elements in an array.
// MODIFIES the original array.

// Remove one element starting from the last index.
// arr.splice(2); // Would remove 'c', 'd', and 'e'.

arr.splice(-1); // Removes the last element: 'e'.
console.log(arr); // ['a', 'b', 'c', 'd']

// Starting at index 1, remove 2 elements: 'b' and 'c'.
arr.splice(1, 2);
console.log(arr); // ['a', 'd']

// ===============================================
// 3. REVERSE()
// Reverses the order of elements in an array.
// MODIFIES the original array.

arr = ['a', 'b', 'c', 'd', 'e'];

const arr2 = ['j', 'i', 'h', 'g', 'f'];

// Reverse arr2 and return the same array.
console.log(arr2.reverse()); // ['f', 'g', 'h', 'i', 'j']

// The original arr2 is also reversed.
console.log(arr2); // ['f', 'g', 'h', 'i', 'j']

// ===============================================
// 4. CONCAT()
// Combines arrays and returns a new array.
// Does NOT modify the original arrays.

const letters = arr.concat(arr2);
console.log(letters);
// ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

// The spread operator provides another way to combine arrays.
console.log([...arr, ...arr2]);
// ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

// ===============================================
// 5. JOIN()
// Combines all array elements into a single string.
// The provided separator is placed between the elements.

console.log(letters.join(' - '));
// 'a - b - c - d - e - f - g - h - i - j'

// ===============================================
// QUICK REVISION
//
// slice()   -> Returns a shallow copy of a selected portion.
// splice()  -> Adds, removes, or replaces elements in the original.
// reverse() -> Reverses the original array.
// concat()  -> Combines arrays into a new array.
// join()    -> Converts array elements into a string.
//
// Important:
// - slice() uses an exclusive end index.
// - Negative indexes count backward from the end.
// - slice(), concat(), and the spread-copy pattern are shallow.
// - splice() and reverse() mutate the original array.
//
// One important detail
// Both arr.slice() and [...arr] create shallow copies, not deep copies. If an array contains objects, the copied array still references those same objects.
*/

/*
///////////////////////////////////////
// The New at() Method

const arr = [23, 11, 64];

// ===============================================
// 1. Accessing array elements using bracket notation
// Indexes start at 0.
console.log(arr[0]); // 23

// The at() method provides another way to access an element by index.
console.log(arr.at(0)); // 23

// ===============================================
// 2. Getting the last array element

// Traditional approach: use the array length minus 1.
console.log(arr[arr.length - 1]); // 64

// Using slice(): creates a new array containing the last element.
// [0] retrieves that element from the new array.
console.log(arr.slice(-1)[0]); // 64

// Using at(): a negative index counts backward from the end.
// -1 refers to the last element.
console.log(arr.at(-1)); // 64

// ===============================================
// 3. Using at() with strings

// Strings also support at() for accessing characters by index.
console.log('jonas'.at(0)); // 'j'

// A negative index counts backward from the end of the string.
console.log('jonas'.at(-1)); // 's'

// ===============================================
// QUICK REVISION
//
// arr.at(0)  -> Returns the first element.
// arr.at(-1) -> Returns the last element.
// arr.at(-2) -> Returns the second-last element.
//
// at() works with both arrays and strings.
// Unlike slice(), at() returns a single element or character.
// at() does NOT modify the original array or string.
*/

/*
///////////////////////////////////////
// Looping Arrays: forEach()

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// ===============================================
// 1. Using a for...of loop

// movements.entries() returns an iterator containing [index, element] pairs.
// Array destructuring extracts the index (i) and current movement.
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    // Positive values represent deposits.
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    // Negative values represent withdrawals.
    // Math.abs() converts the negative amount to a positive number.
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('---- FOREACH ----');

// ===============================================
// 2. Using the forEach() method

// forEach() calls the callback once for each array element.
// Callback parameters are provided in this order:
// 1. Current element (mov)
// 2. Current index (i)
// 3. Original array (arr)
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});

// ===============================================
// QUICK REVISION
//
// for...of:
// - Iterates over array values.
// - Can use break and continue.
// - Use entries() when you need both the index and value.
//
// forEach():
// - Executes a callback for each array element.
// - Callback arguments: element, index, original array.
// - Does not support break or continue to stop iteration.
// - Its return value is always undefined.
//
// Note: In this example, arr is available as a callback argument,
// but it is not needed for the deposit/withdrawal logic.
*/


/*
///////////////////////////////////////
// forEach() With Maps and Sets

// ===============================================
// 1. forEach() With Maps

// A Map stores key-value pairs.
// Each entry contains a currency code and its full name.
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// Map.forEach() callback arguments are provided in this order:
// 1. value -> The value associated with the current key.
// 2. key   -> The current key.
// 3. map   -> The original Map.
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Output:
// USD: United States dollar
// EUR: Euro
// GBP: Pound sterling

// ===============================================
// 2. forEach() With Sets

// A Set stores unique values.
// Duplicate values are automatically removed.
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

console.log(currenciesUnique);
// Set(3) { 'USD', 'GBP', 'EUR' }

// Set.forEach() callback arguments are provided in this order:
// 1. value       -> The current Set value.
// 2. valueAgain  -> The same value again.
// 3. set         -> The original Set.
//
// Unlike Map, a Set has no separate key for each value.
// The first two callback arguments are therefore identical.
// The underscore (_) is a variable name used by convention to
// indicate that this parameter is intentionally unused.
currenciesUnique.forEach(function (value, _, set) {
  console.log(`${value}: ${value}`);
});

// Output:
// USD: USD
// GBP: GBP
// EUR: EUR

// ===============================================
// QUICK REVISION
//
// Map.forEach((value, key, map) => { ... })
// - First argument: value
// - Second argument: key
// - Third argument: original Map
//
// Set.forEach((value, valueAgain, set) => { ... })
// - First argument: value
// - Second argument: the same value again
// - Third argument: original Set
//
// Why does Set pass the value twice?
// It keeps the callback signature consistent with Map.forEach(),
// even though Set elements do not have separate keys.
*/

