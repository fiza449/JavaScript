// Creating an Array: Are zero-based
let arr1 = [];//empty array
let arr2 = [1,2,3,4,5]; //numbers
let arr3 = ["name",25,true]; //mixed

//Array methods
arr2.push(7); //Add a new element to the responses array at the end
arr2.push(9);
console.log(arr2) //[ 1, 2, 3, 4, 5, 7, 9 ]

arr3.pop() //Remove the last element
console.log(arr3) //[ 'name', 25 ]

arr3.unshift(9); //same as push but adds element at start
arr3.shift() //same as pop but remove element from start

console.log(arr1.length) //0

console.log(arr2.includes(7)); //Checks value: in true or false

console.log(arr2.indexOf(2)); //Find position


