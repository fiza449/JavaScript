// Creating an Array: Are zero-based
let arr1 = [];//empty array
let arr2 = [1,2,3,4,5]; //numbers
let arr3 = ["name",25,true]; //mixed

//Array methods
arr2.push(7); //Add a new element to the responses array at the end
arr2.push(9);
// console.log(arr2) //[ 1, 2, 3, 4, 5, 7, 9 ]

arr3.pop() //Remove the last element
// console.log(arr3) //[ 'name', 25 ]

arr3.unshift(9); //same as push but adds element at start
arr3.shift() //same as pop but remove element from start

// console.log(arr1.length) //0

// console.log(arr2.includes(7)); //Checks value: in true or false

// console.log(arr2.indexOf(2)); //Find position

//slice: LAST element is NOT included. Does not change ORIGINAL array
//splice: LAST element IS included. DOES changed ORIGINAL array
// console.log("Original array is ",arr2);
// const myn1 = arr2.slice(1,3);
// console.log(myn1); //[ 2, 3 ] -> last element is not included
// console.log(arr2); // [1,2,3,4,5,7,9] -> ORIGINAL array does not change after slice
// const myn2 = arr2.splice(1,3);
// console.log(myn2); //[ 2, 3, 4 ]
// console.log(arr2); //[ 1, 5, 7, 9 ] -> ORIGINAL array DOES change after splice

// Merging arrays: WRONG way don't use push for it
// const marvel_heros = ["thor","Ironman","spiderman"]
// const dc_heros = ["superman","flash","batman"]

// // marvel_heros.push(dc_heros)
// // console.log(marvel_heros) //-> GIVES nested array: [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// //USE concat: to merge TWO arrays

// const concated = marvel_heros.concat(dc_heros)
// console.log(concated)//[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// //USE spread operator: to merger TWO OR MORE THAN TWO arrays

// const all_newheros = [...marvel_heros,...dc_heros]
// console.log(all_newheros); //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realarray = another_array.flat(Infinity)
console.log(realarray)

console.log(Array.isArray([1,2,3,4])); //true
console.log(Array.isArray("IsFiza")) //false
console.log(Array.from("IsFiza")); //->Convert into array: [ 'I', 's', 'F', 'i', 'z', 'a' ]

//Interesting case for Interviews:
console.log(Array.from({
    name: "fiza"
})) //Gives: [] -> Empty array because it can't convert object into array

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)); //[ 100, 200, 300 ] 