// ======================= Standard JS Questions =======================


/** Debouncing
 * 
 * 
 */

function debounce(fn, delay) {
    let timeoutId;
    return function (...args) {
        // cancel previous scheduled execution
        clearTimeout(timeoutId);

        //schedule new execution
        timeoutId = setTimeout(() => {
            console.log(this, args)
        }, delay)
    }
}


/** -------------------- Debounce Example -------------------- */
function searchAPI(query) {
  console.log("Calling API with:", query);
}

const debouncedSearch = debounce(searchAPI, 500);

// Simulating user typing fast
debouncedSearch("r");
debouncedSearch("re");
debouncedSearch("rea");
debouncedSearch("reac");
debouncedSearch("react"); 


undefined [ 'react' ]






/** Throttling
 * 
 * 
 */











