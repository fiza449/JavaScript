const accountId = 37473;
let accountEmail = "fizaansari@google.com";
var accountPass = "23773";
let accountsecure; //undefined: because it is declared but no value are assigned

//Let's see which variables can be re-assign
//accountId = 76534; //NOT allowed for const
accountEmail = "shifa@google.com";  //allowed
accountPass = "8754"; //allowed

console.table([accountId,accountEmail,accountPass,accountsecure])