// Creating two Symbols
const mySym = Symbol("key1");
const mySym2 = Symbol("key2");
/*
Symbols are unique and cannot be accidentally overwritten.
Even if the description is the same, each Symbol is different.
Symbols are often used when you want to hide properties or avoid key conflicts.
*/

//Object Creation

const JsUser = {
  "full name": "Fiza Ansari",// Key is a string with a space, so use bracket notation to access it
  name: "Fiza",
  age: 18,

  // ❌ This adds a normal string key named "mySym"
  mySym: "key1",                // typeof JsUser.mySym → string

  // ✅ This uses a Symbol as a key — the key remains a Symbol type
  [mySym2]: "key2",             // typeof JsUser[mySym2] → string
                                // key itself is of type symbol

  location: "Mumbai",
  email: "fizaansari@google.com",
  isLoggedIn: false,
  lastlogindays: ["Monday", "Thursday"]
};
// ✅ When using [mySym2], the key stays a Symbol, not converted to string.

//Accessing Object Properties
console.log(JsUser.name);             // "Fiza" (dot notation works)
console.log(JsUser["full name"]);     // "Fiza Ansari" (must use bracket notation)

console.log(typeof JsUser.mySym);     // "string" (it's just a regular key)
console.log(typeof mySym2);           // "symbol" (this is the Symbol itself)

console.log(JsUser[mySym2]);          // "key2" (access Symbol-keyed value)
console.log(typeof JsUser[mySym2]);   // "string"

// Updating existing properties
JsUser.email = "shifaansari@google.com";

// Freeze the object (optional)
// Object.freeze(JsUser);

JsUser["full name"] = "shifa ansari";  // ❗Will NOT work if object is frozen

console.log(JsUser);

// Adding a Method (Function as Property)

JsUser.greeting = function () {
  console.log(`Hello JS User ${this["full name"]}`);
};

console.log(JsUser.greeting);     // [Function (anonymous)]
console.log(JsUser.greeting());   // Hello JS User shifa ansari