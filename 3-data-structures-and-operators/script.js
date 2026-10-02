'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};


//////////////////////////////////////////////////////////////////////////
// Destructing array in practice
/*
const arr = [5, 6, 7];


const a = arr[0];
const b = arr[1]
const c = arr[2]
console.log(a, b, c);

//Destructing with this method is simple and easy and readable
const [first, second] = arr;
console.log(first, second);

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

//Swapping using temp var
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// Swap using destructing simple and easy
[secondary, main] = [main, secondary];
console.log(main, secondary);


// Receive two return values from functions
const [ starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested array
const nested = [2, 4, [5, 6]];
//, , this skip the 4 
// const [ i, ,j] = nested;
// console.log(i, j); // this will give 2 [5,6]
const [i, ,[j, k]] = nested;
console.log(i, j, k); // this will give 2,5,6

// Default values
// const [p, q, r] = [8, 9];
// console.log(p, q, r); // here r become undefined if there is no value

const [p=1, q=1, r=1] = [8, 9];
console.log(p, q, r); // Now r become 1 because default value is 1 if value is not present
*/


