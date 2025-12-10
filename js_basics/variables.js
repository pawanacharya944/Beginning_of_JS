// "use strict"; use strict” helps catch your mistakes early by throwing errors instead of letting them silently break your code.
const accountId=123
let email='pawan@gmail.com'
var accPassword='hello'
city='surkhet'

// accountId=456 // this is not allowed cause we used const 
accPassword='newpassword' // this is allowed cause we used var
email='hello@gmail.com' // this is allowed cause we used let
city='kathmandu' // this is allowed but not recommended cause we did not use var, let or const


console.table([accountId,email,accPassword,city])
place=123
console.log(typeof place);
/*
prefer to use var because of issue in block scope and functional scope
*/
