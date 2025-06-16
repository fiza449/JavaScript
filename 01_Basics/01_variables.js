const accountId = 37473;
let accountEmail = "fizaansari@google.com";
var accountPass = "23773";

//Let's see which variables can be re-assign
//accountId = 76534; //NOT allowed for const
accountEmail = "shifa@google.com";  //allowed
accountPass = "8754"; //allowed

console.table([accountId,accountEmail,accountPass])