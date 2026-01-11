/** ============================ TIMER RULES (MUST MEMORIZE) ============================
 *
 * RULE 1️⃣:
 * setTimeout → runs ONLY ONCE → auto-cleans after execution
 * 👉 clearTimeout is NOT required unless you want to CANCEL it before it runs
 *
 * RULE 2️⃣:
 * setInterval → runs REPEATEDLY → MUST be stopped using clearInterval
 * 👉 forgetting clearInterval causes memory leaks & infinite execution
 *
 * RULE 3️⃣:
 * clearTimeout cancels a timeout BEFORE it executes
 * clearInterval stops future interval executions
 *
 * RULE 4️⃣:
 * setTimeout does NOT block code execution
 * It only delays the CALLBACK
 *
 * RULE 5️⃣ (React):
 * Even setTimeout should be cleared on component unmount
 */


/** ============================ setTimeout (ONE-TIME TASK) ============================
 */

console.log("setTimeout example started");

const timeoutId = setTimeout(() => {
  console.log("setTimeout executed after 2 seconds");
}, 2000);

console.log("timeoutId:", timeoutId); // logs immediately

// ❌ NOT REQUIRED:
// clearTimeout(timeoutId); // unnecessary unless canceling


/** ============================ clearTimeout (CANCEL BEFORE RUN) ======================
 *
 * REAL USE CASE:
 * - Undo delete
 * - Cancel delayed UI action
 */

const deleteId = setTimeout(() => {
  console.log("Item permanently deleted ❌");
}, 3000);

// User clicks undo BEFORE 3s
clearTimeout(deleteId);
console.log("Delete cancelled, timeout cleared ✅");


/** ============================ setInterval (REPEATED TASK) ===========================
 */

let count = 0;

const intervalId = setInterval(() => {
  count++;
  console.log("Interval tick:", count);

  if (count === 5) {
    clearInterval(intervalId); // ✅ MUST stop it
    console.log("Interval cleared after 5 ticks");
  }
}, 1000);


/** ============================ WRONG vs RIGHT ============================
 */

// ❌ WRONG: interval never stops
// setInterval(() => console.log("Running forever"), 1000);

// ✅ RIGHT:
const safeInterval = setInterval(() => {
  console.log("Safe interval");
  clearInterval(safeInterval);
}, 1000);


/** ============================ BETTER ALTERNATIVE (Recursive setTimeout) ============================
 *
 * WHY BETTER:
 * - No overlapping executions
 * - Better accuracy
 * - No need for clearInterval
 */

let seconds = 5;

function countdown() {
  console.log("Countdown:", seconds);
  seconds--;

  if (seconds >= 0) {
    setTimeout(countdown, 1000);
  } else {
    console.log("Countdown finished ✅");
  }
}

countdown();


/** ============================ REACT CLEANUP RULE ============================
 *
 * useEffect(() => {
 *   const id = setTimeout(() => {
 *     setState(true);
 *   }, 1000);
 *
 *   return () => clearTimeout(id); // cleanup on unmount
 * }, []);
 */


/** ============================ INTERVIEW SUMMARY (ONE-LINERS) ============================
 *
 * - setTimeout runs once and auto-cleans after execution
 * - clearTimeout is used only to cancel before execution
 * - setInterval repeats forever unless cleared
 * - clearInterval is mandatory to stop intervals
 * - Recursive setTimeout is preferred for accurate timers
 */
