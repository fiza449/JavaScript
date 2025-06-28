let a = 90; // Global scope variable 
const b = 80; //Global scope Variable
if(true){
    let a = 20; // scope sensitive (can't be used outside the scope)
    const b = 30; // scope sensitive (can't be used outside the scope)
    var c = 40; // CAN be print outside the scope (DON'T USE THIS)
    // console.log("Inner a: ",a) //Local scope var
    // console.log("Inner b: ",b) //local scope var
}
// console.log("Outer a: ",a);
// console.log("Outer b: ",b);
// console.log(c);

// Nested scope

//1. For function
function one()
{
    const username = "fiza";

    function two(){
        const website = "YouTube";
        console.log(username); //when two() get called it prints fiza
    }
    two();
}
one(); //pehle one() call hua jismai two() ko call kiya h

//for if-else()

if (true){
    const username = "fiza";
    if(username === "fiza")
    {
        const website = "Youtube";
        console.log(username + website);
    }
    // console.log(website)
}

// +++++++++++++++++Interesting ++++++++++++++++
// HOISTING
// function declaring
console.log(addone(5)) //ALLOWED
function addone(num){
    return num + 1;
}

// Function declaring while storing in the variable
console.log(addtwo(7)) //NOT ALLOWED
const funchold = function addtwo(num){
    return num + 2;
}