/** ===================================================================
 * 🔥 JAVASCRIPT + REACT INTERVIEW PRACTICE ROADMAP (COMPACT)
 * ===================================================================
 */

/** ================= 1️⃣ DATA TYPES & VARIABLES ======================
 * THEORY
 * - Primitive vs Reference (immutability, value vs reference)
 *   # Changing a primitive value creates a new value, instead of modifying the old one. You are assigning a new value, not modifying the old one.
 * - Dynamic / Duck Typing
 * - var / let / const  
 *   - const makes values immutable ? NO. It makes the binding immutable.
 * - Hoisting, TDZ
 * - typeof quirks (typeof null)
 * - Stack vs Heap (intro)
 *
 * PRACTICE
 * - Explain why primitives are immutable
 * - Predict output (hoisting + TDZ)
 * - typeof edge cases
 */


/** ================= 2️⃣ FUNCTIONS & SCOPING ==========================
 * THEORY
 * - Function declaration vs expression
 * - Arrow functions
 * - First-class & Higher-order functions
 * - Pure vs Impure functions
 * - IIFE
 * - Lexical Scoping
 * - Generator Functioning 
 * - Partial Functions
 * - Currying
 *
 * PRACTICE
 * - Convert function → arrow
 * - Identify lexical scope
 * - Write IIFE examples
 */


/** ================= 3️⃣ this, CONTEXT & BINDING ======================
 * THEORY
 * - this in global / function / object / arrow
 * - this in class & constructor
 * - call / apply / bind (hard binding)
 * - Losing this in callbacks
 * - Common React this bugs
 *
 * PRACTICE
 * - Fix broken this in event handler
 * - Predict this output
 * - Implement bind() polyfill
 */


/** ================= 4️⃣ CLOSURES (VERY IMPORTANT) ====================
 * THEORY
 * - What is closure?
 * - Closures + lexical environment
 * - Variable retention after execution
 *
 * PRACTICE
 * - Simple closure example
 * - Counter using closure
 * - Button click counter
 * - Closure usage in React
 * - Closures causing memory leaks
 */


/** ================= 5️⃣ CALL STACK & EXECUTION =======================
 * THEORY
 * - Call Stack (push/pop)
 * - Nested function calls
 * - Stack overflow
 * - Call Stack + Event Loop
 * - Blocking the Call Stack (UI freeze)
 *
 * PRACTICE
 * - Trace function execution
 * - Create stack overflow example
 * - Explain React freeze scenario
 */


/** ================= 6️⃣ EVENT LOOP & ASYNC ===========================
 * THEORY
 * - Event Loop
 * - Call Stack
 * - Microtask vs Macrotask Queue
 * - Task starvation
 *
 * PRACTICE
 * - Predict console.log order
 * - Promise + setTimeout mix
 * - Event loop inside React component
 */


/** ================= 7️⃣ PROMISES & ASYNC/AWAIT ======================
 * THEORY
 * - Promise states (pending, fulfilled, rejected)
 * - then / catch / finally
 * - Promise.all / race / any / allSettled
 * - Async / Await
 * - AbortController
 *
 * PRACTICE
 * - Create promise
 * - Handle async errors
 * - Retry logic implementation
 */


/** ================= 8️⃣ TIMERS & PERFORMANCE =========================
 * THEORY
 * - setTimeout vs setInterval
 * - Timer delays & clamping
 * - Clearing timers
 *
 * PRACTICE
 * - Auto-start timer
 * - Start / Pause / Reset timer
 * - Cleanup timers in React
 */


/** ================= 9️⃣ DEBOUNCE & THROTTLE ==========================
 * THEORY
 * - Debounce vs Throttle
 * - Why needed
 *
 * PRACTICE
 * - Implement debounce (search)
 * - Implement throttle (scroll)
 * - Real-world use cases
 */


/** ================= 🔟 ARRAYS & OBJECTS ==============================
 * THEORY
 * - Array & Object creation methods
 * - Array-like objects
 * - Spread vs Rest
 * - Optional chaining (?.)
 * - Nullish coalescing (??)
 * - Object.freeze vs seal
 *
 * PRACTICE
 * - Convert array ↔ object
 * - Predict mutation behavior
 */


/** ================= 1️⃣1️⃣ COPYING & IMMUTABILITY =====================
 * THEORY
 * - Shallow vs Deep copy
 * - JSON method limitations
 * - structuredClone
 *
 * PRACTICE
 * - Deep copy object
 * - Fix mutation bugs
 */


/** ================= 1️⃣2️⃣ OOP & PROTOTYPES ===========================
 * THEORY
 * - Prototypal inheritance
 * - prototype vs __proto__
 * - Constructor functions
 * - ES6 classes
 * - Getters, setters, static, private
 *
 * PRACTICE
 * - Prototype chain tracing
 * - Class vs constructor example
 */


/** ================= 1️⃣3️⃣ BROWSER & WEB APIs =========================
 * THEORY
 * - DOM manipulation
 * - Event propagation
 * - preventDefault
 * - localStorage vs sessionStorage
 * - Cookies
 * - Fetch API
 * - WebSockets
 * - Web Workers
 *
 * PRACTICE
 * - Infinite scroll
 * - Polling system
 */


/** ================= 1️⃣4️⃣ ERROR HANDLING =============================
 * THEORY
 * - Syntax vs Runtime errors
 * - try/catch
 * - Throwing custom errors
 * - Async error handling
 *
 * PRACTICE
 * - Wrap async code with try/catch
 * - Debug stack traces
 */


/** ================= 1️⃣5️⃣ MISC (INTERVIEW TRAPS) =====================
 * - Shadowing & Illegal Shadowing
 * - Module patterns
 * - Template literals
 * - Destructuring
 * - Short-circuiting
 * - Deep comparison
 * - JSON handling
 * - Polyfills (map, filter, reduce, bind)
 */
