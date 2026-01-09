// closure in JS

/** Closure
 *  1. When a function remembers and can access varible from its outer lexical(scope), even after the function has finished executing.
 *     - The variable is preserved because the inner function still holds a reference to it.
 *     
 *  2. Why do u need closures like in which scenarios ? or what are the use cases of it. 
 *     - Data encapsulation / private variables: // count is private, cannot be accessed directly.
 * 
 *     - State preservation: counters, caches and memoization . how >
 *       --> Normally, local variables disappear after function execution. But sometimes we want, values to persist across calls.
 *       --> Closures keep variables alive between function calls. For example: Like setting a count , it remembers the previous count that' why we can update it.
 *     
 *     - Callbacks & async code: setTimeout, event handlers, React handlers.
 *       --> Closures allow storing previously computed results without global variables
 *  
 */




// Example of closure:
function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    }
    // returning inner creates the closure
}

const fn = outer();
fn(); // 1 
fn(); // 2
fn(); // 3


// Now we will see how closure works in react --> so go to component --> js --> closure folder

