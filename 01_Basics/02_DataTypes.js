"use strict"; //treat all JS code as newer version

console.log(typeof(42)); //number: range of number is 2 to power 53
console.log(typeof("42")); //string
console.log(typeof(true)); //boolean
console.log(typeof(undefined)); //undefined
console.log(typeof(null)); //object
console.log(typeof(Symbol())); //symbol
console.log(typeof(123n)); //BigInt : use when need to store big numbers
console.log(typeof([1,2,3])); //object (data type of array is object)
console.log(typeof({a:1})); //object
console.log(typeof(function(){})); //function

/*
1.  Undefined: A variable declared but not assigned a value
2.  Null:      Represents **intentional** absence of value
3.  Symbol:    Unique and immutable values (ES6+)
*/