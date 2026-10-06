'use strict';



/////////////////////////////////////////////////////////
// Enhanced Object Literals (ES6)
//
// ES6 introduced:
//
// 1. Property shorthand
//    openingHours: openingHours  -> openingHours
//
// 2. Method shorthand
//    orderPizza: function() {}   -> orderPizza()
//
// 3. Computed property names
//    [weekdays[3]] -> "thu"
//
// Before:
// openingHours: openingHours
//
// After:
// openingHours
//
// Before:
// orderPizza: function() {}
//
// After:
// orderPizza()
//
// Property names can also be computed dynamically
// using square brackets [].


// Array containing day names used to create dynamic property names.
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// ES6 Computed Property Names
//
// Property names can be generated dynamically using
// expressions inside square brackets ([]).
// Nested object containing opening hours
const openingHours = {
  [weekdays[3]]: {
    // Creates the property "thu"
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    // Creates the property "fri"
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    // Creates the property "sat"
    open: 0,
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',

  // Array of restaurant categories
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],

  // Menu items
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  // Property shorthand
  // Equivalent to: openingHours: openingHours
  openingHours,

  // Returns selected starter and main course
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Enhanced method syntax
  // Equivalent to:
  // orderDelivery: function (...) { ... }
  // Destructures the order object directly in the parameter list
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20.00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`,
    );
  },
  // ES6 method definition shorthand
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1},${ing2},${ing3},`);
  },
  // Method shorthand with a rest parameter
  orderPizza(mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};


///////////////////////////////////////
// Coding Challenge #3

/*
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

/*
// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64);

// 3.
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

// 4.
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}

/*
///////////////////////////////////////
// Maps: Iteration

// A Map is iterable by default.


// Map Iteration
//
// for...of         -> iterate Map entries
// keys()           -> all keys
// values()         -> all values
// entries()        -> all [key, value] pairs
//
// Maps are iterable by default.

// Objects are not directly iterable,
// but Maps are iterable by default.

// Create a Map using an array of [key, value] pairs.
// Map constructor expects an array
// of [key, value] pairs.
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);

console.log(question);


// Convert Object -> Map

// Object.entries() returns an array of [key, value] pairs,
// which can be passed directly into the Map constructor.
// Object.entries()
// converts an object into [key, value] pairs.
console.log(Object.entries(openingHours));

const hoursMap = new Map(Object.entries(openingHours));

console.log(hoursMap);


// Quiz Application Example

// Retrieve the question text.
console.log(question.get('question'));


// Iterate over the Map

for (const [key, value] of question) {

  // Display only answer options.
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}


// User answer

// const answer = Number(prompt('Your answer'));
const answer = 3;

console.log(answer);


// Check whether the answer is correct

// question.get('correct') returns 3
// 3 === answer -> true
//
// Equivalent to:
// question.get(true)

// If the answer is correct:
// question.get(true)
//
// If the answer is wrong:
// question.get(false)
console.log(
  question.get(
    question.get('correct') === answer
  )
);


// Convert Map -> Array

// Returns an array of [key, value] pairs.
// Spread the Map into an array
// of [key, value] pairs.
console.log([...question]);


// Get all keys

console.log([...question.keys()]);


// Get all values

console.log([...question.values()]);


/*
///////////////////////////////////////
// Maps: Fundamentals

// Map keys can be:
// strings, numbers, booleans,
// objects, arrays, functions, DOM elements, etc.

// Keys can be any data type.

// Common methods:
//
// set(key, value)
// get(key)
// has(key)
// delete(key)
// clear()
// size

// Objects and arrays can be used as keys,
// but they are compared by reference.

// A Map stores data as key-value pairs.
// Unlike objects, keys can be of any data type.

// Object keys are usually strings or symbols.
// Map keys can be any data type.

const rest = new Map();


// Adding entries

rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');

// set() returns the Map itself,
// allowing method chaining.
console.log(rest.set(2, 'Lisbon, Portugal'));


// Method chaining works because 
// set() returns the Map itself.
rest
  .set('categories', [
    'Italian',
    'Pizzeria',
    'Vegetarian',
    'Organic',
  ])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');


// Retrieving values

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));


// Using expressions as keys

const time = 8;

// time > 11 && time < 23
// evaluates to false
//
// Equivalent to:
// rest.get(false)
console.log(
  rest.get(
    time > rest.get('open') &&
    time < rest.get('close')
  )
);


// Check if a key exists

console.log(rest.has('categories'));


// Remove an entry

rest.delete(2);

// Remove all entries
// rest.clear();


// Using objects and arrays as keys
// Arrays are objects,
// so they can be used as Map keys.
const arr = [1, 2];
// The same array reference is used.
rest.set(arr, 'Test');

// Common mistake many beginners do this 
//rest.get([1, 2]);
// expects 'Test' but get undefined because Different array reference.
// Objects and arrays are compared by reference,
// not by value.


// DOM elements can also be keys

rest.set(
  document.querySelector('h1'),
  'Heading'
);

console.log(rest);


// Number of entries in the Map

console.log(rest.size);


// Retrieve value using the same array reference

console.log(rest.get(arr));


/*
///////////////////////////////////////
// New Set Operations (ES2025+)

// Set Operations
//
// intersection()         -> common values
// union()                -> all unique values
// difference()           -> values only in first set
// symmetricDifference() -> values not shared
// isDisjointFrom()       -> no common values?


// These methods return NEW sets.
// The original sets are not modified.

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);


// intersection()

// Returns values that exist in BOTH sets.
const commonFoods = italianFoods.intersection(mexicanFoods);

console.log('Intersection:', commonFoods);
console.log([...commonFoods]);


// union()

// Returns all unique values from both sets.
const italianMexicanFusion =
  italianFoods.union(mexicanFoods);

console.log('Union:', italianMexicanFusion);


// Traditional way before union()

// Create a new Set from both collections.
console.log(
  [...new Set([...italianFoods, ...mexicanFoods])]
);


// difference()

// Returns values that exist only in italianFoods.
const uniqueItalianFoods =
  italianFoods.difference(mexicanFoods);

console.log('Difference italian', uniqueItalianFoods);

// Returns values that exist only in mexicanFoods.
const uniqueMexicanFoods =
  mexicanFoods.difference(italianFoods);

console.log('Difference mexican', uniqueMexicanFoods);


// symmetricDifference()

// Returns values that exist in either set,
// but NOT in both sets.
const uniqueItalianAndMexicanFoods =
  italianFoods.symmetricDifference(mexicanFoods);

console.log(uniqueItalianAndMexicanFoods);


// isDisjointFrom()

// Returns true if the sets have no common values.
// Returns false if at least one value exists in both sets.
console.log(
  italianFoods.isDisjointFrom(mexicanFoods)
);

/*
///////////////////////////////////////
// Sets

// A Set is a collection of unique values.
// Duplicate values are automatically removed.

// Sets:
// - No duplicates
// - No indexes
// - Values can be iterated

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(ordersSet);


// Create a Set from a string

// Strings are iterable,
// Each character becomes a unique Set element.
console.log(new Set('Rishi'));


// Common Set Methods

// Number of unique elements
console.log(ordersSet.size);

// Check whether a value exists
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));

// Add a new value
ordersSet.add('Garlic Bread');

// Duplicate values are ignored
ordersSet.add('Garlic Bread');

// Remove a value
ordersSet.delete('Risotto');

// Remove all values
// ordersSet.clear();

console.log(ordersSet);


// Loop through Set values

for (const order of ordersSet) {
  console.log(order);
}


// Real-World Example

const staff = [
  'Waiter',
  'Chef',
  'Waiter',
  'Manager',
  'Chef',
  'Waiter',
];

// Remove duplicates by converting:
// Array -> Set -> Array
const staffUnique = [...new Set(staff)];

console.log(staffUnique);


// Count unique values

console.log(
  new Set([
    'Waiter',
    'Chef',
    'Waiter',
    'Manager',
    'Chef',
    'Waiter',
  ]).size
);


// Count unique characters in a string

console.log(new Set('rishiyadav').size);

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/*
// 1.
for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);

// 2.
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5

// BONUS
// So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
*/


/*
///////////////////////////////////////
// Looping Objects: Keys, Values, and Entries

// Object.keys()    -> returns property names
// Object.values()  -> returns property values
// Object.entries() -> returns [key, value] pairs


// Object.keys()

// Returns an array containing all property names (keys).
const properties = Object.keys(openingHours);

console.log(properties);
// ['thu', 'fri', 'sat']


// Loop through all property names

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}

console.log(openStr);

// Object.values()

// Returns an array containing all property values.
const values = Object.values(openingHours);

console.log(values);


// Object.entries()

// Returns an array of [key, value] pairs.
const entries = Object.entries(openingHours);

// Example:
// [
//   ['thu', { open: 12, close: 22 }],
//   ['fri', { open: 11, close: 23 }],
//   ['sat', { open: 0, close: 24 }]
// ]

// console.log(entries);


// Loop through key-value pairs
// Destructure each entry:
//
// ['thu', { open: 12, close: 22 }]
//
// day   -> 'thu'
// open  -> 12
// close -> 22
for (const [day, { open, close }] of entries) {
  console.log(
    `On ${day} we open at ${open} and close at ${close}`
  );
}

/*
///////////////////////////////////////
// Optional Chaining (?.)
// stops evaluation if a value is null or undefined.
// Optional chaining safely accesses properties,
// methods, or array elements that may not exist.
//
// Instead of throwing an error,
// it returns `undefined`.


// Traditional Approach

// Check if each property exists before accessing it.
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

// Without the check above, this would throw:
// TypeError: Cannot read properties of undefined

// console.log(restaurant.openingHours.mon.open);


// Using Optional Chaining

// Returns undefined if `mon` does not exist.
console.log(restaurant.openingHours.mon?.open);

// Safer version.
// Checks both `openingHours` and `mon`.
console.log(restaurant.openingHours?.mon?.open);


// Real-World Example

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// Access opening hours only if the day exists.
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';

  console.log(`On ${day}, we open at ${open}`);
}


// Optional Chaining with Methods

// Call the method only if it exists.
console.log(
  restaurant.order?.(0, 1) ?? 'Method does not exist'
);

// `orderRisotto` does not exist,
// so undefined is returned.
console.log(
  restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist'
);


// Optional Chaining with Arrays

const users = [{ name: 'Rishi', email: 'hello@rishi.io' }];
// const users = [];

// Access the first user's name only if
// the first array element exists.
console.log(users[0]?.name ?? 'User array empty');


// Traditional Approach

if (users.length > 0) {
  console.log(users[0].name);
} else {
  console.log('User array empty');
}


/*
///////////////////////////////////////
// The for...of Loop

// Combine both arrays into a single menu array.
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// Iterate over array values

// `for...of` loops through each element of the array.
for (const item of menu) {
  console.log(item);
}


// Access both index and value

// `entries()` returns an iterator containing:
// [index, value] pairs.
//
// Example:
// [0, 'Focaccia']
// [1, 'Bruschetta']

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// Convert the iterator into an array

// console.log([...menu.entries()]);


//////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

/*
// 1.
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

// 5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6.
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
printGoals(...game.scored);

// 7.
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

/*
///////////////////////////////////////
// Logical Assignment Operators
//
// ||=   OR Assignment
// ??=   Nullish Assignment
// &&=   AND Assignment

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// OR Assignment Operator (||=)

// Assign the value only if the current value is falsy.
//
// Equivalent to:
// rest.numGuests = rest.numGuests || 10
//
// Be careful:
// 0, '', and false are considered falsy.

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;


// Nullish Assignment Operator (??=)

// Assign the value only if the current value is
// null or undefined.
//
// Equivalent to:
// rest.numGuests = rest.numGuests ?? 10
//
// Unlike ||=, it preserves valid values such as
// 0, false, and ''.

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;


// AND Assignment Operator (&&=)

// Assign the value only if the current value is truthy.
//
// Equivalent to:
// rest.owner = rest.owner && '<ANONYMOUS>'
//
// Useful for conditionally updating existing properties.

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

/*
///////////////////////////////////////
// Nullish Coalescing Operator (??)

// OR (||) returns the first truthy value.
// Since 0 is falsy, 10 is returned instead.
restaurant.numGuests = 0;

const guests = restaurant.numGuests || 10;

console.log(guests); // 10


// Nullish values are only:
// - null
// - undefined

// `??` returns the right-hand value only when
// the left-hand value is null or undefined.

// Since 0 is a valid value (not nullish),
// it is preserved.
const guestCorrect = restaurant.numGuests ?? 10;

console.log(guestCorrect); // 0
*/

/*
/////////////////////////////////////////////////////////
// Short Circuiting (|| AND &&)

// Logical operators don't always return true or false.
// They can return any value.

// OR (||)
// Returns the first truthy value.
// If all values are falsy, it returns the last value.

console.log('---- OR ----');

console.log(3 || 'Rishi');          // 3
console.log('' || 'Rishi');         // 'Rishi'
console.log(true || 0);             // true
console.log(undefined || null);     // null

// Stops at the first truthy value ('Hello')
console.log(undefined || 0 || '' || 'Hello' || 23 || null);


// Using OR to set default values

restaurant.numGuests = 0;

// Traditional approach using the ternary operator
const guests1 = restaurant.numGuests
  ? restaurant.numGuests
  : 10;

console.log(guests1);

// OR returns the first truthy value.
// Since 0 is falsy, 10 is returned instead.
const guests2 = restaurant.numGuests || 10;

console.log(guests2);


// AND (&&)

console.log('---- AND ----');

// AND returns the first falsy value.
// If all values are truthy, it returns the last value.

console.log(0 && 'Rishi');      // 0
console.log(7 && 'Rishi');      // 'Rishi'

// Stops at the first falsy value (null)
console.log('Hello' && 23 && null && 'Rishi');
// Practical Example

// Traditional way
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

// Short-circuiting version
// If orderPizza exists, call it.
// Otherwise, the function call is skipped.
restaurant.orderPizza &&
  restaurant.orderPizza('mushrooms', 'spinach');
*/

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
