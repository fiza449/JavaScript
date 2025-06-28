// this keyword: refers to the current context of object that it belongs to
//               it behaves differently in regular functions and arrow functions

// WITH regular function
const user = {
    username: "fiza",
    price: 999,
    welcomemessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this);
        /*
        o/p of this:
        {
            username: 'fiza',
            price: 999,
            welcomemessage: [Function: welcomemessage]
        }
         */
    }

}
// user.welcomemessage(); //fiza, welcome to website
// user.username = "shifa"
// user.welcomemessage(); //shifa, welcome to website
/* current context of this:
 * {
  username: 'shifa', //THIS CHANGED
  price: 999,
  welcomemessage: [Function: welcomemessage]
}
 */

//In node environment
// console.log(this) //{} -> empty obj

/**
 * JavaScript always has a global object, but its name depends on the environment:
 * In browser: Global object -> WINDOW
 *             console.log(window); // the global object in the browser
               console.log(window.alert === alert); // true
               console.log(this === window); // true (in global scope)
 * In Node.js: The global object -> **global**
               console.log(this === global); // false
               console.log(this); // {}
 */
console.log(this === global) //false
console.log(this) //{}

// function fiza()
// {
//     const username = "fiza"
//     console.log(this.username) //undefined: CAN'T be used in func
// }
// fiza();

// Arrow function
const addtwo = (num1,num2) => {
    return num1+num2
}
console.log(addtwo(1,2));
 
//implicit return(no return written) with arrow function
const addthree = (num1,num2,num3) => (num1+num2+num3)
console.log(addthree(1,2,3));

//WHY we use implicit return? so that we can return object too

const obj = (num1) => ({username:"fiza"})
console.log(obj(1))