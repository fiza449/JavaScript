//Function: A function is a reusable block of code that performs a specific task.
function saymyname()
{
    console.log("Fiza");
}
// console.log(saymyname) //Gives just a reference: [Function: saymyname]
//saymyname(); //Fiza

function addnum(num1,num2) //parameters
{
    return `Addition of ${num1} and ${num2} is ${num1+num2} `
}
const result = addnum(2,3)
// console.log(result)

function loginUsermessage(username)
{
    if(!username)
    {
        console.log("Please enter a username")
        return
    }
     return `${username} just logged in!`
}
// console.log(loginUsermessage()); //undefined just logged in!
// console.log(loginUsermessage("fiza"));

function calculateCardtPrice(val1,val2,num1){ //
    return val1,val2,num1
}
console.log(calculateCardtPrice(200,300,400)) //Only returns 400 not all 3

function values(val1,val2,...num1)
{
    return val1,val2,num1
}
console.log(values(200,300,400,500,600)) //[ 400, 500, 600 ]

/**
 Now why? [ 400, 500, 600 ]: 
    return a,b,c -> ONLY c prints
    return val1(a),val2(b),...num1(c) --> ONLY ...num1(which wraps all rest values in array) printed
 */

//Passing objects in function
const user = {
    name: "fiza",
    age: 21,
}

function greeting({name,age}){
    return `${name} and ${age}`
}
console.log(greeting(user))

//Passing array in functions
const array = [200,300,400]
function getsecondelement(getArray){
    return getArray[2]
}
console.log(getsecondelement(array))