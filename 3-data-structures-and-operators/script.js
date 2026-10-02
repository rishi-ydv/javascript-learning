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
};

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