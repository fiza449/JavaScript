/**
 * Js is a single threaded, synchronous, non-blocking
 * and interpreted language BUT
 * it can also handle a asynchronous things like setTimeout,fetch,etc
 * using: Event loop system
 */

/*
 Execution context: is the environment where your code is evaluated and executed
    TYPES:
        1. Global Execution Context: Runs first.
            Created every when you run a JS file
            The global obj is created (window in browser)
            A special var this is also set
            All var/func declared in global scope are in this context
        
        2. Function Execution Context:
            Created everytime a function is called.
            Each function has it's own EC
        3. Eval execution context: Rare. Not imp
 */

/**
 *     Stages of execution context: Each EC has TWO phases
 *          1. Creation phase: (Memory Allocation Phase)
 *                JavaScript scans the code.
 *                Allocates memory for: Var(set to undefined),functions,this keyword is set
 *          2. Execution Phase:
 *                 Now code is executed line by line.   
 *                 Variables get assigned actual values.
 *                 Functions are invoked.    
 */
//EG:
var name = "Fiza";

function greet() {
  var msg = "Hello " + name;
  console.log(msg);
}

greet();

/**
 * Global Execution Context (always CREATED):
 * PHASES: 1. Creation: name = undefined
 *                      greet = function code
 *         2. Execution: name = "Fiza"
 *                       greet(); ->function call
 *  -----> NOW IT WILL IF THERE IS ANY FUNCTION IN MY CODE THERE IS SO IT WILL CREATE
 * 
 * Function Execution Context(for greet):
 * PHASES: 1. Creation: msg = undefined
 *         2. Execution: msg = "hello fiza"
 *                       console.log("hello fiza")
 */

//EG: 2
let val1 = 10;
let val2 = 5;
function addNum(num1,num2){
    let total = num1+ num2;
    return total
}
let result1 = addNum(val1,val2)
let result2 = addNum(10,2)