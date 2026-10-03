const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',

  // Array of restaurant categories
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],

  // Menu items
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // Nested object containing opening hours
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

  // Returns selected starter and main course
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Destructures the order object directly in the parameter list
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20.00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`,
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1},${ing2},${ing3},`);
  },

  orderPizza: function(mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  }
};

/*
/////////////////////////////////////////////////////////
// Rest Pattern and Rest Parameters

// Rest collects multiple values
// and packs them into an array.

// The syntax is the same (`...`),
// but the behavior depends on the context.
//
// Spread  -> Expands values
// Rest    -> Collects values

// 1. Destructuring
// Arrays
// Spread syntax is used on the right side of `=`.
// Spread expands array elements into individual values.
const arr = [1, 2, ...[3, 4]];


// Rest syntax is used on the left side of `=`.
// Rest collects remaining values.

// Collect remaining elements into `others`.
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);


// Rest must appear at the end because it collects
// all remaining elements.
// Extract the first two items and collect the rest.
const [Pizza, risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(Pizza, risotto, otherFood);


// Objects
// Extract `sat` and collect the remaining properties.
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2.  Functions
// The rest parameter gathers an unknown number
// of arguments into an array.

// Accept any number of arguments.
const add = function(...numbers) {
  console.log(numbers);
  let sum = 0;
  // Calculate the sum of all numbers.
  for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
  }
  console.log(sum);
}
add(2,3);
add(4,5,6,7);
add(8,9,10,11,12,13);

const x = [23, 5, 7];
// Spread the array into individual arguments.
add(...x);

// First argument becomes `mainIngredient`.
// Remaining arguments are collected into `otherIngredient`.
restaurant.orderPizza('mushroom','onion', 'olives', 'spinach');
// First argument becomes `mainIngredient`.
// otherIngredient return empty array []
restaurant.orderPizza('mushroom');
*/

/*
/////////////////////////////////////////////////////////
// // Spread Operator (...)
//Spread  operator unpack 

const arr = [7, 8, 9];
// Manually creating a new array using individual elements
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// Spread expands all elements of `arr`
const newArr = [1, 2, ...arr];
console.log(newArr);

// Spread passes each element as a separate value
console.log(...newArr);

// Add a new item while creating a new array
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Create a shallow copy of the array
const mainMenuCopy = [...restaurant.mainMenu];

// Join two arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Spread works on iterables:
// Arrays, Strings, Maps, Sets, etc.
// Plain objects are not iterable.
const str = 'Rishi';
// Strings are iterable, so they can be spread into characters
const letters = [...str, ' ', 's'];
console.log(letters);
console.log(...str);
// Uncaught SyntaxError: Unexpected token '...'
// console.log(`${...str} Rishi`);

// Real-world examples
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Let's make pasta! Ingredient 2?"),
//   prompt("Let's make pasta! Ingredient 3?"),
// ];
//console.log(ingredients);

// Traditional approach
//restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
//restaurant.orderPasta(...ingredients); // Cleaner ES6 approach using the spread operator.

// Create a new object by copying existing properties
// and adding new ones
const newResturant = {
  foundedIn: 1998,
  ...restaurant,
  founder: 'Guiseppe',
};

// Create a shallow copy of the object
// Spread creates a shallow copy.
// Nested objects and arrays are still shared by reference.
const restaurantCopy = { ...restaurant };
// Changing the copied object does not affect
// top-level properties of the original object
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

/*
//////////////////////////////////////////////////////////
// OBJECT DESTRUCTURING in practice

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

// Extract properties into variables with the same names
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Rename properties while destructuring
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

// Default values are used when a property does not exist
// Useful when working with APIs or optional data
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);


// MUTATING VARIABLES

let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14 };

// Parentheses are required because JavaScript would
// interpret {} as a code block instead of an object literal
({ a, b } = obj);

console.log(a, b);


// NESTED OBJECT DESTRUCTURING

// Extract nested properties and rename them
const {
  fri: { open: o, close: c },
} = openingHours;

console.log(o, c);

//////////////////////////////////////////////////////////
// ARRAY DESTRUCTURING in practice

const arr = [5, 6, 7];

// Traditional way
const firstValue = arr[0];
const secondValue = arr[1];
const thirdValue = arr[2];

// Destructuring is shorter and more readable
const [first, second] = arr;
console.log(first, second);


// DESTRUCTURING RESTAURANT CATEGORIES

let [main, secondary] = restaurant.categories;

console.log(main, secondary);


// SWAPPING VARIABLES

// Traditional approach:
// const temp = main;
// main = secondary;
// secondary = temp;

// Destructuring allows swapping without a temporary variable
[secondary, main] = [main, secondary];

console.log(main, secondary);


// RECEIVING MULTIPLE VALUES FROM A FUNCTION

const [starter, mainCourse] = restaurant.order(2, 0);

console.log(starter, mainCourse);


// NESTED ARRAY DESTRUCTURING

const nested = [2, 4, [5, 6]];

// Skip elements using commas
const [i, , [j, k]] = nested;

console.log(i, j, k); // 2 5 6


// DEFAULT VALUES

// Without defaults:
// const [p, q, r] = [8, 9];
// r would be undefined

// Default values are used when an element is missing
const [p = 1, q = 1, r = 1] = [8, 9];

console.log(p, q, r); // 8 9 1
*/
