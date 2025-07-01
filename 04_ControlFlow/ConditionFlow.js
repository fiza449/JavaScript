/**
 * Control flow: is the order in which your JS code runs or executes
 *               JS runs code line by line from top to bottom - unless CONTROL flow statements change it!
 * 
 *  1. if,else-if,else: TO make decisions in code
 *  2. switch: include case and break(for multiple choices)
 *  3. Loops: for loop, while loop, do while loop
 *  4. break and continue: break(exits the loop early), continue(skips current iteration and moves to next)
 *  5. function calls(changes the flow)
 */

// const useremail = "" //-> no space in string so IT IS FALSE
// if(useremail){ //assumed that string value is true and empty string is false
//     console.log("YES")
// }else{
//     console.log("nope")
// }

//falsy values: false, 0 ,-0, BigInt 0n,null,undefined,NaN,"no space"
//truthy values:  "0", 'false', "space",[],{},function(){}

const emptyobj = {}
if(Object.keys(emptyobj).length == 0){
    console.log("obj is empty")
}
console.log(false == "0")
console.log( false == 0)
console.log(true == "1")
console.log(false == '')
console.log(0 == '')

//Nullish coalescing operator (??): returns the right-hand value only if the left-hand value is null or undefined.
//Syntax:
// let result = a ?? b;
// If a is not null or undefined, result is a
// If a is null or undefined, result is b
let val1;
val1 = 2 ?? 10
let val2 = null ?? 10
console.log(val2) //10
console.log(val1) //2
//WHY IT IS USED: safely fall back to default values only when the original value is truly missing (null or undefined)

//ternary operator
//condition? true:false
const iceTeaProce = 100
iceTeaProce <=80 ? console.log("less than 80") : console.log("more than 80")