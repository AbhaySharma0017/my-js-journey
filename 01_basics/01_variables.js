let accountId = 12345
const accountPassward= 'abhay@123'
var accountType ="Saving"
accountCity = "Indore"

console.table([accountId,accountPassward,accountType, accountCity]) // It print data in tabular form.

//accountPassward = '12345'// Not allowed

let accountState;
/*
  prefer not to use var because of issue in block scope and functional scope.
*/

console.log(accountPassward);
console.log(accountState);
