const tinderUser = new Object() //-> empty object
//Adding values and key in empty objects
tinderUser.name = "Fiza";
tinderUser.id = "123abc"
tinderUser.isLoggedIn = false
// console.log(tinderUser)

//Nested Objects
const regularUser = {
    email: "some@gmail.com",
    fullname:{
        username: {
            firstname : "Fiza",
            lastName: "Ansari"
        }
    }
}
//console.log(regularUser.fullname.username.firstname)

//Merging Object
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"};
const merged = Object.assign({},obj1,obj2)
console.log(merged)
const obj3 = {...obj1,...obj2} //this is MOSTLY used
console.log(obj3)

//Object.assign(): JS function used to copy properties from one or more obj to other obj
//                 Syntax: Object.assign(target, source1, source2, ...); target: {empty obj}
//                 Why is {} used?: to make sure we don’t change the original objects. This creates a brand new object and fills it with the copied values.

console.log(tinderUser); //{ name: 'Fiza', id: '123abc', isLoggedIn: false }

console.log(Object.keys(tinderUser))//-> [ 'name', 'id', 'isLoggedIn' ] (gives in array form so we can apply loops on this)
// ONLY KEYS IN ARRAY FORM: [ 'name', 'id', 'isLoggedIn' ]
console.log(Object.values(tinderUser)) 
// ONLY VALUES IN ARRAY FORM: [ 'Fiza', '123abc', false ]
console.log(Object.entries(tinderUser))
// KEYS+ VALUES IN ARRAY FORM: [ [ 'name', 'Fiza' ], [ 'id', '123abc' ], [ 'isLoggedIn', false ] ]

//Prototypes of Objects

// obj.hasOwnProperty() -> checks if property exists
console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true

// obj.valueOf() -> returns primitive value of an object.
console.log(tinderUser.valueOf())

//obj.constructor() -> returns the function that created the object
console.log(tinderUser.constructor)

/*
__proto__: is a hidden link inside every object that points to its parent object — basically, where it gets its methods from.
Every object has a __proto__
It shows what it inherits from
Forms the prototype chain (used in inheritance)  

isPrototypeof() -> checks whether an object is in the prototype chain of another object.
 */