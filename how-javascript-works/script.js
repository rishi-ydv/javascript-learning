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


