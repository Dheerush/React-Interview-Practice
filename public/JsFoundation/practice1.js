// ==================== let, const and var ====================

/**
 * HOISTING (IMPORTANT CORRECTION)
 * ---------------------------------------------------------
 * Hoisting means:
 * ➜ During MEMORY CREATION PHASE, JS allocates memory for:
 *    - variables
 *    - function declarations
 *
 * ❌ Hoisting does NOT mean "moved to top"
 * ✅ It means "memory is reserved before execution"
 */

// ==================== TDZ (Temporal Dead Zone) ====================

// console.log(num1); 
// ❌ ReferenceError: Cannot access 'num1' before initialization
let num1 = 4;

// console.log(num2);
// ❌ ReferenceError: Cannot access 'num2' before initialization
const num2 = 4;

/**
 * let / const ARE hoisted
 * BUT they stay in TDZ until initialized
 */

// ==================== var hoisting ====================

console.log("num3:", num3); // ✅ undefined
var num3 = 5;

/**
 * var is hoisted AND initialized with undefined
 * let / const are hoisted BUT NOT initialized
 */


// ==================== TDZ SUMMARY ====================
/**
 * TDZ exists from:
 * ➜ start of scope
 * ➜ until variable declaration line is executed
 *
 * Applies to: let, const
 */


// ==================== var vs let (setTimeout interview classic) ====================

for (var i = 0; i <= 3; i++) {
  setTimeout(() => {
    console.log("var i:", i);
  }, 2000);
}
// OUTPUT: 4 4 4 4
/**
 * WHY?
 * - var is FUNCTION scoped
 * - Only ONE `i` exists
 * - Loop finishes first → i = 4
 * - setTimeout runs later → prints same i
 */

for (let i = 0; i <= 3; i++) {
  setTimeout(() => {
    console.log("let i:", i);
  }, 2000);
}
// OUTPUT: 0 1 2 3
/**
 * WHY?
 * - let is BLOCK scoped
 * - Each iteration creates a NEW `i`
 */


// ==================== SCOPING TYPES ====================
/**
 * 1. Global scope
 * 2. Function scope
 * 3. Block scope (let, const)
 * 4. Lexical scope (nested functions)
 */


// ==================== DATA TYPES (Primitives are by VALUE) ====================

let x = 5;
let y = x;

console.log("x === y:", x === y); // true

/**
 * Primitives:
 * number, string, boolean, null, undefined, symbol, bigint
 *
 * Stored BY VALUE
 */


// ==================== const clarification (IMPORTANT) ====================

const variable1 = 2;

// variable1 = 5; ❌ TypeError

/**
 * ❌ WRONG understanding:
 * "const means value cannot change"
 *
 * ✅ CORRECT:
 * const means REBINDING is not allowed
 *
 * - Primitives are immutable
 * - Changing a primitive = creating new value
 * - const blocks rebinding
 */

console.log("variable1:", variable1);


// ============================== FUNCTIONS ==============================

// ==================== Function Declaration ====================

fd(); // ✅ works (hoisted)

function fd() {
  console.log("Function Declaration called");
}

/**
 * Function declarations are fully hoisted
 */


// ==================== Function Expression ====================

// fe(); ❌ ReferenceError (TDZ)
let fe = function () {
  console.log("Function Expression called");
};

/**
 * Function expression depends on variable hoisting
 */


// ==================== Arrow Function ====================

let arrowFn = (name) => {
  console.log(`Printing ${name} using arrow function`);
};

arrowFn("Dheeru");

/**
 * Arrow functions:
 * - shorter syntax
 * - NO own this
 * - NO arguments object
 */


// ==================== this keyword (INTERVIEW GOLD) ====================

let myObj1 = {
  name: "Dheeru",
  age: 29,

  // NORMAL FUNCTIONS
  normal1: function () {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  },

  normal2: function () {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  },

  // ❌ NEVER DO THIS
  // arrowFn: () => {
  //   console.log(this.name); // undefined
  // }
};

myObj1.normal1();
myObj1.normal2();

/**
 * WHY arrow fails here?
 * -----------------------------------------
 * Arrow functions:
 * - do NOT have their own this
 * - they CAPTURE this from where they are DEFINED
 *
 * Object does NOT create a this scope
 *
 * In browser:
 *   this → window
 * In strict / modules:
 *   this → undefined
 */


// ==================== this SUMMARY ====================
/**
 * Normal function:
 *   "this = whoever CALLS me"
 *
 * Arrow function:
 *   "this = whoever SURROUNDS me"
 *
 * RULE:
 * ❌ Never use arrow functions as object methods
 */


// ==================== Who creates this context? ====================
/**
 * 1. Normal functions
 * 2. Classes
 * 3. Global scope
 *
 * ❌ Objects do NOT create this
 */


// ==================== Higher Order Functions ====================

let generateFinalOrder = function (summary, bill) {
  summary();
  bill();
};

let summary = function () {
  console.log("Order: Pizza + Coke");
};

let bill = function () {
  console.log("Bill: ₹450");
};

generateFinalOrder(summary, bill);

/**
 * Higher Order Function:
 * - Takes functions as arguments
 * - OR returns a function
 */


// ==================== Another HOF Example ====================

let finalScore = function (totalRuns, wickets, overs, runRate) {
  totalRuns();
  wickets();
  overs();
  runRate();
};

function totalRuns() {
  console.log("Total Runs: 285");
}
function wickets() {
  console.log("Wickets: 6");
}
function overs() {
  console.log("Overs: 50");
}
function runRate() {
  console.log("Run Rate: 5.7");
}

finalScore(totalRuns, wickets, overs, runRate);


// ==================== PURE FUNCTION ====================

let calculateFinalPrice = function (price, discount) {
  if (discount < 0 || discount > 100) {
    throw new Error("Invalid Discount");
  }
  return Math.floor(price - (price * discount) / 100);
};

console.log(calculateFinalPrice(100, 10));
console.log(calculateFinalPrice(100, 20));

/**
 * Pure Function:
 * - Same input → Same output
 * - No external state
 * - No side effects
 */


// ==================== IMPURE FUNCTION ====================

let discountRate = 10;

function finalPriceImpure(price) {
  return Math.floor(price - (price * discountRate) / 100);
}

console.log(finalPriceImpure(100));

/**
 * Impure:
 * - Depends on external variable
 * - Result can change without input change
 */


// ==================== Side Effects Example ====================

let increment = 0;

function moreIncrement() {
  increment++; // ❌ side effect
  return increment;
}

console.log("Increment:", moreIncrement());

/**
 * Use PURE functions for:
 * - Calculations
 * - Business logic
 * - Redux reducers
 * - Data transformations
 *
 * Use IMPURE functions for:
 * - UI updates
 * - Logging
 * - API calls
 * - DB access
 */


// ==================== IIFE (Immediately Invoked Function Expression) ====================

let answer = (function addNumber(a, b) {
  return a + b;
})(2, 3);

console.log("IIFE Answer:", answer);

/**
 * IIFE use cases:
 * - Avoid global pollution
 * - Create private scope
 * - Older pattern before let/const
 */


// ==================== var loop fix using IIFE ====================

for (var j = 0; j <= 3; j++) {
  (function (j) {
    setTimeout(() => {
      console.log("IIFE j:", j);
    }, 2000);
  })(j);
}

/**
 * IIFE creates a NEW scope
 * Each iteration gets its OWN j
 */
