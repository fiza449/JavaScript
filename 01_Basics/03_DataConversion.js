let score = "123abc"
let intoNumber = Number(score)
console.log(intoNumber) //NaN
console.log(Number(undefined)) //NaN
console.log(Number(null)) //0

/* OPERATIONS: */
console.log("5" + 3 ) //"53"
console.log("5" - 3) //2
console.log(true + false) //1
console.log(1 + "2" + 3) //"123"
console.log("10" - "4" - "3" - 2 + "5") //"15"
console.log(null + 1) //1
console.log(undefined + 1) //NaN
console.log([] + []) //""
console.log([] + {}) //[object Object]
console.log("{}"+ []) //{}
console.log(null == undefined) //true: ONLY TIME THEY ARE EQUAL
console.log(null === undefined) //false
console.log(NaN == NaN) //false
console.log([1] + [1])  //11