const arr = [1,2,3,4,5,6]

// forof
// for (const num of arr ) {
//     console.log(num)
// }
// const greetings = "Hello world"
// for (const i of greetings) {
//     console.log(i)
// }

// //Maps:  is a special type of object that stores key-value pairs, just like objects — but with better features.
// const map = new Map()
// //Setting value in map using (.set)
// map.set('IN','India')
// map.set('US','United states')
// map.set('US','United states') //It won't be print two times 
// console.log(map) //Map(2) { 'IN' => 'India', 'US' => 'United states' }

// // using forof with map
// for (const [key,value] of map) {
//     console.log(key, ":-" , value)
// }
// // IN :- India
// // US :- United states

// //forof with object: NOT ITERABLE
// // const myobj = {
// //     name: "Fiza",
// //     id: "123abc"
// // }
// // for (const [key,value] of myobj) {
// //         console.log(key, ":-", value) //NOT ITERATABLES  
// // }

// lets talk about forin loop for object

const myObject = {
    js:'javascript',
    cpp: 'c++',
    rb:'ruby',
    swift:'swift by apple'
}
// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }

//forin with array
const array = [2,3,4,5,6]
// for (const element in array) {
//     console.log(array[element])//
// }
//forin with map : NOT POSSIBLE

//forEach loop
const coding = ['js','ruby','cpp','python']

// coding.forEach(function (element){ //regular function
//     console.log(element);
// })

// coding.forEach( (element) => { //arrow function
//     console.log(element)
// })

// function printme(element){
//     console.log(element)
// }
// coding.forEach(printme) //only give reference of function

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr)
// })

//printing objects in array using forEach loop

// const myCoding = [
//     {
//         languageName: "javascript",
//         languageFile:"js"
//     },
//     {
//         languageName: "c++",
//         languageFile:"cpp"
//     },
//     {
//         languageName: "python",
//         languageFile:"py"
//     }
// ]

// myCoding.forEach((item)=>{
//     console.log(item.languageFile)
//     console.log(item.languageName)
// })

const mycoding = ['js','ruby','cpp','python']
const values = mycoding.forEach((item) => {
    //console.log(item)
    return item
})
console.log(values) //forEach can't return any values