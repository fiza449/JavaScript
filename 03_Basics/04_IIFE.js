//IIFE: Immediately Invoked Function Expression
//      is a function that runs as soon as it is defined.
//      DOESN'T need calling

// (function definition in this)(add this at end of func for it's execution)

(function (){
    console.log("Hello from IIFE from regular function!")
})(); //Semicolon between two IIFE is IMP

(()=>{
    console.log("Hello from IIFE with arrow function")
})();

// Imp asked in interview:  Why Use IIFE?
/**
 * Avoid polluting the global scope
 * Create a private scope
 * Run code immediately
 */

//Named IIFE
(function chai(){
    console.log("named IIFE")
})();
// Passing arguments in IIFE
((name)=>{
    console.log(`My name is ${name}`)
})("fiza");