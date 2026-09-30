'use strict';

//////////////////////////////////////////////////////////
// Scoping in practices
/*  Remove this comment before running the code on your machine.
function calcAge(birthYear) {
  const age = 2055 - birthYear;
  console.log(firstName); //firstName is not defined inside the calcAge so variable lookup outside the function if found then print name if not then show error below you can see the error below you can see what error comes
  // console.log(lastName);
  // Uncaught ReferenceError: lastName is not defined
  //   at calcAge (script.js:10:15)
  //   at script.js:17:13
  return age;
}

const firstName = 'Rishi';
console.log(calcAge(2000)); //55
console.log('---------------------------------------------');

function calcAge1(birthYear) {
  const age = 2055 - birthYear;

  function printAge() {
    let output = `${firstName1}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    //block scope
    if (birthYear >= 1997 && birthYear <= 2012) {
      var genZ = true;
      // JavaScript first looks for `firstName1` in the current scope.
      // Since it is found here, it uses this value and does not continue
      // searching in the outer scopes (scope chain).
      //const firstName1 = 'Bishal';
      const str = `Oh, and you're a genZ, ${firstName1}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      output = 'NEW OUTPUT!';
    }

    // console.log(str) error beacuse const and let are block scoped so here reference error comes if you use var then it works
    console.log(genZ); //this works here because var is function scoped no matter it declared inside the blocked scope it initialize to its outer functions so always use let and const
    // console.log(add(2, 3)); it throws error becuse function is blocked scoped but it only throws error when you use 'use strict'; without use strict it works

    /*
=========================================================
FUNCTION DECLARATIONS INSIDE BLOCKS (if, for, while, etc.)
=========================================================

1. STRICT MODE ("use strict")

- Functions are block-scoped.
- A function declared inside an `if` block exists only
  within that block.
- Calling the function outside the block results in:

  ReferenceError: add is not defined

Example:

if (true) {
  function add(a, b) {
    return a + b;
  }
}

add(2, 3); // ReferenceError


---------------------------------------------------------

2. SLOPPY MODE (NON-STRICT MODE)

- Browsers keep special legacy behavior for backward
  compatibility.
- The function declaration is hoisted, but its assignment
  occurs only when execution enters the block.

Case 1: Condition is TRUE
---------------------------------
if (true) {
  function add(a, b) {
    return a + b;
  }
}

console.log(add(2, 3)); // 5

The block executes, so the function gets assigned.

Case 2: Condition is FALSE
---------------------------------
if (false) {
  function add(a, b) {
    return a + b;
  }
}

console.log(add(2, 3));

Result:
TypeError: add is not a function

The block never executes, so the function is not assigned.

---------------------------------------------------------

Key Takeaway:
- Strict Mode  -> Block Scoped Function
- Sloppy Mode  -> Legacy Browser Behavior (avoid relying on it)

Always use Strict Mode and avoid declaring functions
inside blocks unless the behavior is intentional.
=========================================================
*/
/*  and here also  
console.log(output); 
  }
  printAge();
  return age;
}

const firstName1 = 'Rishi';
calcAge1(2000);
//console.log(age) it shows error because age is inside the function
// printAge(); //it also shows reference error age this function is defined inside the calcAge1 function
*/ //here also

/////////////////////////////////////////////////////////////
//Hoisting and tdz in practice
/*
// Variables
console.log(hello); // undefined
//console.log(job);
//  Uncaught ReferenceError: Cannot access 'job' before initialization
//     at script.js:136:13
//console.log(year);
// Uncaught ReferenceError: Cannot access 'year' before initialization
//     at script.js:137:13

var hello = 'Rishi';
let job = 'Programmer';
const year = 2004;

// Functions

console.log(addDecl(2, 5)); // 7 output
//console.log(addExpConst(2,5));
// Uncaught ReferenceError: Cannot access 'addExpConst' before initialization
// at script.js:149:13 (Due to tdz of const/let)

// console.log(addExpVar(2,5));
// Function expressions assigned to `var` are not fully hoisted.
// Only the variable declaration is hoisted and initialized as `undefined`.
// Therefore, calling `addExpVar()` before the assignment results in:
//
// TypeError: addExpVar is not a function
// Uncaught TypeError: addExpVar is not a function
//     at script.js:153:13  

// console.log(addArrowConst(2,5));
//  Uncaught ReferenceError: Cannot access 'addArrowConst' before initialization
//     at script.js:162:13

//console.log(addArrowVar(2,5));
// Same as `addExpVar`.
// The variable is hoisted and initialized as `undefined`,
// so calling it before assignment throws a TypeError.

function addDecl(a, b) {
  return a + b;
}

const addExpConst = function (a, b) {
  return a + b;
};

var addExpVar = function (a, b) {
  return a + b;
};

const addArrowConst = (a, b) => a + b;
var addArrowVar = (a, b) => a + b;

// Example
console.log(numProducts); // undefined
console.log(!numProducts); // true
if(!numProducts) deleteShoppingCart();

var numProducts = 15;

function deleteShoppingCart() {
  console.log('All proudcts deleted');
}

var x = 1; // Creates a property on the global `window` object.

let y = 2; // Does not create a property on the global `window` object.

const z = 3; // Does not create a property on the global `window` object.

console.log(x === window.x); // true
console.log(window.x); // 1
console.log(y === window.y); // false
console.log(window.y); // undefined 
// `let` variables are not added to the global `window` object.
// `window` does not have a property named `y`.
// When we access a property that does not exist on an object,
// JavaScript returns `undefined`.
console.log(z === window.z); // false
console.log(window.z);  // undefine
*/
////////////////////////////////////////////////////////////////////
// This keyword in practice
/*
console.log(this); // In the global scope, `this` refers to the `window` object.

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
  // In strict mode, `this` is `undefined` inside a regular function.
  // In non-strict (sloppy) mode, it refers to the global `window` object.
};
calcAge(2000);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
  // Arrow functions do not have their own `this`.
  // They inherit `this` from their lexical (parent) scope.
  // Here, the parent scope is the global scope, so `this` is `window`.
};

calcAgeArrow(2000);

const rishi = {
  year: 2000,
  calcAge: function () {
    console.log(this);
    // `this` refers to the `rishi` object.
    //     {year: 2000, calcAge: ƒ}
    // calcAge
    // :
    // ƒ ()
    // year
    // :
    // 2000
    // [[Prototype]]
    // :
    // Object

    console.log(2037 - this.year);
  },
};
rishi.calcAge();
// Note : this keyword alway point the obj that is calling the method below you can see by example
// The value of `this` depends on how the function is called.

const bishal = {
  year: 2009,
};

bishal.calcAge = rishi.calcAge;
bishal.calcAge(); // 28
// {year: 2009, calcAge: ƒ}
// calcAge
// :
// ƒ ()
// year
// :
// 2009

const f = bishal.calcAge;
f();
// The method is detached from its object.
// Since `f()` is called as a regular function,
// `this` is `undefined` in strict mode.
// Uncaught TypeError: Cannot read properties of undefined (reading 'year')
//     at calcAge (script.js:249:29)
//     at script.js:270:1
*/