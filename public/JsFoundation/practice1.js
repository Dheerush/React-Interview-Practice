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

// for (var i = 0; i <= 3; i++) {
//     setTimeout(() => {
//         console.log("var i:", i);
//     }, 2000);
// }
// OUTPUT: 4 4 4 4
/**
 * WHY?
 * - var is FUNCTION scoped
 * - Only ONE `i` exists
 * - Loop finishes first → i = 4
 * - setTimeout runs later → prints same i
 */

// for (let i = 0; i <= 3; i++) {
//     setTimeout(() => {
//         console.log("let i:", i);
//     }, 2000);
// }
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
 * - WHEN you should NOT use Arrow Functions: 
 *   1) Object Methods ❌
 *   2) Constructor Functions ❌
 *   3) When you need dynamic this ❌
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

// for (var j = 0; j <= 3; j++) {
//     (function (j) {
//         setTimeout(() => {
//             console.log("IIFE j:", j);
//         }, 2000);
//     })(j);
// }

/**
 * IIFE creates a NEW scope
 * Each iteration gets its OWN j
 */

/**Generator Functions
 * - A generator function is a special function that can PAUSE and RESUME execution.
 * - Normal function:    Runs from start → end → completed in one go
 * - Generator function: Runs → pauses (yield) → resumes → pauses → resumes → completed
 *    --> How to create and use a Generator?
 *        - Defined using `function*`
 *        - Uses the `yield` keyword to:
 *           ✔ pause execution
 *           ✔ return a value
 *        - Calling the generator does NOT execute it
 *        - It returns an iterator
 *
 * - Syntax:
 *      function* generate() {
 *        yield "Hello";
 *        yield "World";
 *        return "Completed";
 *      }
 */
console.log("Learning Generator Function");

function* generate() {
    console.log("Start");
    yield "Hello";

    console.log("Paused...");
    yield "World";

    console.log("End");
    return "Completed";
}

const gen = generate();

console.log(gen.next()); // { value: "Hello", done: false }
console.log(gen.next()); // { value: "World", done: false }
console.log(gen.next()); // { value: "Completed", done: true }
console.log(gen.next()); // { value: undefined, done: true }



/**
 * Why do we need Generator Functions?
 * 1. Lazy execution
 *    - Values are produced only when needed
 *
 * 2️. Memory efficiency
 *    - Large data sets can be processed step-by-step
 *
 * 3️. Pause / Resume control
 *    - Execution can be stopped and continued later
 *
 * 4️. Better async flow control (before async/await)
 *
 *
 * Real-Life Use Cases:
 * --------------------
 * ✔ Pagination / infinite scrolling
 * ✔ Streaming large files
 * ✔ Iterating huge datasets
 * ✔ State machines
 * ✔ Redux-Saga (VERY IMPORTANT for interviews)
 *
 *
 * Generator vs Normal Function:
 * ------------------------------
 * Normal function → returns a value
 * Generator function → returns an iterator
 *
 * `yield` pauses execution
 * `return` ends the generator
 */



/** Partial Function:
 *  - A partial function is a function created by fixing (pre-filling) some arguments of an existing function, producing a new function with fewer parameters.
 *  - Original function vs partial function :
 *    --> The original function takes multiple arguments.
 *    --> The partial function fixes some of them , the remaining arguments are provided later.
 *  - Where do we use it ?
 *    --> 
 */

// Orignal Function
let calculateFees = function (tuitionFees, gst, duration) {
    return Math.floor((tuitionFees + tuitionFees * gst / 100) * duration)
}
console.log("Calculate Fees of 1 year with original Function: , ", calculateFees(10000, 18, 2)); // 23600

// Partial Function
// Method 1: Using "bind" keyword
let partial = calculateFees.bind(null, 5000, 2); //  First argument is for `this` (not used here, so we pass null), 5000 is for fees, 2 for rate, i.e we are basically providing some arguments in advance
console.log("partial: ", partial(2)); // remaining arguments are provided here 
// output : 10200
// NOTE: “bind creates a partial function by fixing arguments after the this value; when this is not used, we pass null.”
// Even if you pass null, JavaScript still reserves the first slot for this.You cannot skip this.


// Method 2: Using Closure
let partialFn = function (tuitionFees, gst) {
    // fixed arguments are captured by closure
    return function (duration) {
        return calculateFees(tuitionFees, gst, duration);
    };
};

let calculateFeesPartial = partialFn(5000, 2);
console.log("Partial (closure):", calculateFeesPartial(2)); // 10200



/** Currying
 *  - Currying is the technique of converting a function that takes multiple arguments at once into a sequence of functions that take one argument at a time.
 *  - Currying transforms a multi-argument function into chained single-argument functions using closures, enabling reusability and partial application.
 * // Syntax and method ?
 */

console.log("Currying Implementaion")
function calculateNewPrice(price) {
    return function (tax) {
        return function (discount) {
            return price + price * tax - discount;
        }
    }
}
// NOTE: Each function call returns another function that remembers its arguments through closures, and execution happens only when the final argument is provided.

let newPrice = calculateNewPrice(1000)
let newTaxRate = newPrice(0.2);
let newDiscount = newTaxRate(500);
console.log("Final Price:", newDiscount); //700


/** this
 *  - The 'this' keyword is a powerful and fundamental concept used to access properties and methods of an object, allowing for more flexible and reusable code.
 *  - `this` is a runtime binding that refers to the OBJECT that is currently invoking (calling) a function.
 * 
 * 
 *  - RULES TO MEMORIZE :
 *    1. "this" is decided by HOW a function is CALLED, not where it is written
 *        NOTE:  JS has different environments
 *        Environment                                     Global this
          ----------------------------------------------------------------------
 *        1. Browser (non-module)                         window 
 *        2. Browser (ES module)                          undefined
 *        3. Node.js (CommonJS file)                      {} (module.exports)
 *        4. Node.js (ES module / strict)                 undefined
          ----------------------------------------------------------------------

 *    2. Arrow function do not have "this" . If we try to access it will give undefined. 
 *       --> Arrow functions lexically inherit `this` from their surrounding scope.
 * 
 *  
 *  - Why we use "this"? Is it a good thing to use "this" ? 
 *    1. Code Reusability: Same function can work for multiple objects.
 *    2. Object-Oriented Programming: Helps represent real-world entities (state + behavior).
 *    3. Cleaner Code: Avoids hardcoding object names.
 * 
 * 
 * 
 * - call, apply, and bind are JavaScript Function methods used to control the value of this and pass arguments explicitly when invoking a function.
 *   --> Sometimes we want a function written for one object to be used by another object but we want to control what "this" should point toThat’s exactly where call, apply, and bind are used.
 *       1. call():
 *          --> It immediately calls a function. We manually set "this"
 *          --> Arguments are passed one by one: functionName.call(thisArg, arg1, arg2, arg3)
 *          --> call() is used: Function borrowing, Reusing methods across objects, Explicitly setting "this"
 * 
 *       2. apply()
 *          --> Same as call. 
 *          --> Arguments are passed as an array: functionName.apply(thisArg, [arg1, arg2, arg3])
 *          --> Function is called immediately
 *          --> It is used when :
 *              → When arguments are already in an array.
 *              → Math operations like Math.max
 * 
 *       3. bind()
 *          --> Does NOT call the function immediately
 *          --> Returns a new function
 *          --> this is permanently bound
 *              NOTE: Remember we did this in partial function when we were doing binding
 * 
 *  - Problems with "this"?
 *    1. Losing `this` in CALLBACK
 *       i.   Solution 1: Arrow Function 
 *       ii.  Solution 2: bind()
 * 
 *    2. Method Extraction
 *       i.   Solution 1: bind()
 *
 *    3. this in Class Callback (React Class Bug)
 *       i.   Solution 1: bind() in constructor
 */

console.log("Global this -->  ", this); // undefined; why becuse we are running/executing this command in a react app (NodeJs environment --> ES module)
console.log("Global this -->  ", this); // online JS compiler --> {}
console.log("Global this -->  ", this); // browser --> window


let employee = {
    name: "Dheeru",
    id: 147549,
    company: "Infosys Limited",
    // NOTE : Right now, "this" is points to employee. This is called IMPLICIT BINDING

    // normal function 
    normalFn: function () {
        console.log(`the employee name is ${this.name} and works in ${this.company} and the id is ${this.id}`);
    },

    // arrow function : ❌ WRONG PRACTICE
    // arrowFn: () => {
    //     console.log(`the employee name is ${this.name} and works in ${this.company} and the id is ${this.id}`)
    // }
}

// employee.arrowFn()
employee.normalFn()

// normal fnction : they have this property unlike arrow function
function normalFunction() {
    console.log("this in normal function: ---> ", this)
}
normalFunction(); // undefined


// Let's practice with "this" further more
let myCarObj = {
    name: "Hyundai Venue",
    mfgYear: 2025,
    cost: "10 Lakhs",
    message() {
        console.log(`Congrats on buying the ${this.name} which was manufactured in ${this.mfgYear} and costed you around ${this.cost}`)
    }
}
myCarObj.message(); // this works ---> Because this is implicit binding:
let fn = myCarObj.message;
// console.log(fn()) ; // TypeError: Cannot read properties of undefined (reading 'name') --> so we lost the CONTEXT (this)  ---> as we extracted the method, it becomes a plain function call, 

// To retain "this" property
/** call
 *  - Syntax: fn.call(thisArg, arg1, arg2, ...)
 *  - We must explicitly tell JS what "this" should be
 * 
 */
fn.call(myCarObj); // We must explicitly tell JS what "this" should be
/** call
 *  - Syntax: fn.call(thisArg, arg1, arg2, ...)
 *  - We must explicitly tell JS what "this" should be
 * 
 */
let boundFn = fn.bind(myCarObj);
boundFn();



/** PROMISES in JS
 *  - Promises in JS are objects that represents the eventual completion (or failure) of an asynchronous operation.
 *  - It acts as a placeholder for a value that is not available yet but will be in the future.
 * 
 *  - Promises solve problems caused by callbacks:
 *    1. Callback Hell
 *    2. Inversion of control
 * 
 *  - Promise States 
 *    1. pending
 *       → initial state
 *       → operation is still running
 *    2. fulfilled
 *       → operation completed successfully
 *       → resolve(value) was called
 *    3. rejected
 *       → operation failed
 *       → reject(error) was called
 * 
 *  - NOTE: A promise can change state ONLY ONCE : pending → fulfilled OR rejected
 *  - Syntax: 
 *     new Promise((resolve, reject) => {
 *           // async task
 *      })
 * 
 */

// let's practice Promises
// Example 1
console.log("Practicing the Promise")
let myPromise1 = new Promise((resolve, reject) => {
    let num = 10;
    num % 2 === 0 ? resolve("the number is even") : reject("the number is odd")
})
myPromise1.then((val) => console.log(val)).catch((error) => console.log(error)); // the number is even


//Example2:  create a promise that resolves after 2 seconds
function prFn(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Resolving promise after 2 seconds");
        }, ms);
    });
}

prFn(2000)
    .then((val) => console.log(val))
    .catch((err) => console.log(err));


// Example3: Promise all: Run multiple async tasks in parallel and continue only if all succeed
function task(name, time, shouldFail = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject(`${name} failed`)
            } else {
                resolve(`${name} suceessful`)
            }
        }, time)
    })
}
// making one promise fail/reject
Promise.all([
    task("task1", 1000),
    task("task2", 1000, true),
    task("task3", 1000)
]).then((results) => {
    console.log("Promise.all");
    console.log(results)
}
).catch((error) => console.error(error)); // if one promise fails, one rejection stops everything

// making all promises fulfilled
Promise.all([
    task("task1", 1000),
    task("task2", 2000),
    task("task3", 3000)
]).then((results) => console.log(results)).catch((error) => console.error(error));


// Example4: Promise.allSettled: Use case: I want result of ALL promises, even if some fail
Promise.allSettled([
    task("taskA", 1000),
    task("taskB", 1500, true), // fails
    task("taskC", 2000)
])
    .then((results) => {
        console.log("Promise.allSettled result:");
        console.log(results);
    });


// Example5: Promise.race() : First settled promise (success OR failure) wins
Promise.race([
    task("T1", 4000, true), // failed task
    task("T2", 1000, true), // failed task   --> since this will be settled first 
    task("T3", 4000), //  task
]).then((val) => console.log(val)).catch((err) => console.log(err));


// Example6: Promise.any(): Use case: First SUCCESS wins, failures are ignored
Promise.any([
    task("any1", 1000, true),
    task("any2", 1500, true),
    task("any3", 2000)
])
    .then((result) => {
        console.log("Promise.any SUCCESS:", result);
    })
    .catch((error) => {
        console.log("Promise.any ERROR:", error);
    });


/** async await
 *  - It is a syntactic sugar over Promises. 
 *  - It makes async code look synchronous and readable.
 *    --> async function always returns a Promise
 *    --> await can be used only inside async functions
 */



// Example 1: basic Syntax 
async function fetchApiData() {
    const response = await fetch("https://api.nationalize.io/?name=nathaniel"); // fetch() does NOT return JSON. It returns a Response object
    const data = await response.json();
    console.log("Response is: ", response);
    console.log("Response is: ", data);
}
fetchApiData()

// Example 2: Promise and aysnct awaie
function fetchApiWithPromise() {
    fetch("https://api.nationalize.io/?name=nathaniel").then((response) => {
        if (!response.ok) throw new Error("API called promise")
        return response.json();
    }).then((data) => {
        console.log("API response data in promise");
        console.log(data);
    }).catch((error) => {
        console.log("Promise ERROR:", error.message);
    });
}
fetchApiWithPromise();


// Example 2: 
let fetchApiWithAsyncAwait = async () => {
    try {
        let response = await fetch("https://api.nationalize.io/?name=nathaniel");
        let data = await response.json();
        console.log("Data in async-await: ", data)
    } catch (error) {
        console.error("Async-Await ERROR:", error.message);
    }
}
fetchApiWithAsyncAwait();


//  Object traversal and manipulation
const userResponse1 = {
    status: "success",
    meta: {
        requestId: "req_12345",
        timestamp: "2026-01-11T10:30:00Z"
    },
    data: {
        user: {
            id: 101,
            name: "Dheeru Sharma",
            age: 29,
            isActive: true,
            roles: ["admin", "developer"],
            address: {
                city: "Bangalore",
                country: "India",
                pincode: 560001
            }
        },
        skills: [
            {
                type: "programming",
                values: ["JavaScript", "Python", "C++"]
            },
            {
                type: "frameworks",
                values: ["React", "Node.js", "Express"]
            }
        ],
        projects: [
            {
                id: "p1",
                name: "E-Commerce App",
                techStack: ["React", "Redux", "Node.js"],
                isCompleted: true
            },
            {
                id: "p2",
                name: "Chat Application",
                techStack: ["Socket.io", "Node.js"],
                isCompleted: false
            }
        ]
    },
    errors: null
};

// give me a list of techStack
let allTechStacks = userResponse1.data.projects.flatMap((project) => project.techStack);
console.log("All Tech Stack: ", allTechStacks); //  [ 'React', 'Redux', 'Node.js', 'Socket.io', 'Node.js' ]

let allSkills = userResponse1.data.skills.flatMap((skill) => skill.values);
console.log("All Skills: ", allSkills); // [ 'JavaScript', 'Python', 'C++', 'React', 'Node.js', 'Express' ]

// get user city
let userCity = userResponse1.data.user.address.city;
console.log("User City: ", userCity); // Bangalore


// Optional Chaining : We use it when property may not exist and API response is unreliable
// Null Coalescing   : When we want a default value


const orderResponse = {
    orderId: "ORD123",
    customer: {
        name: "Amit",
        contact: {
            email: "amit@gmail.com"
            // phone is missing
        }
    },
    payment: {
        method: "UPI",
        amount: 0,        // valid value
        discount: null   // may or may not exist
    },
    delivery: null      // delivery info not assigned yet
};

// Get phone number
let phoneNumber = orderResponse.customer.contact?.phone
console.log("phone number: ", phoneNumber); // we are using the ooptional chaing,if it is not present it will give undefined

let getPhoneNumber = orderResponse.customer.contact?.phone ?? "No phone number provided";
console.log("Phone number: ", getPhoneNumber); // No phone number provided 
// nullish coalescing operator (??) checks for null or undefined only, if phone is missing it will give the default value


//now lets pracice these
// setTimeout
// setInterval
// clearTimeout
// clearInterval
// setImmediate 



// Deboucing and throttling
// Spread vs Rest
// Event Loop 
// Polyfills



// Cloning in JS
// Arrays, vs Array like objects and conversion
// ARRAY Practice and manipulation
// Object Manipulation
// String Practice





































