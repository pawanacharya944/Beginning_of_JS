//alert(2+2). // this will throw error because we are not in browser, we are using nodeJS
// console.log(4+10);


/*
 
data types
=> number = 123
=> bigint
=> string = "John"
=> boolean = true/false
=> null = standalone value / it represent there is no any value 
=> undefined => the value is not assigned

*/

// object
// console.log(typeof null) 


/*
 There are 7 types of primitive data types which are :
 # Number
 # String
 # Boolean
 # Null
 # Undefined
 # Symbol
 # BigInt
*/


/*

 There are three Non-primitive data types which are:
 # Array
 # Objects
 # Function
 */


 let myNull=null;
//  console.log(typeof myNull) // the output will be the object cause js treat the null as an object

 let myArray =["Sundar", "pawan","12"];
 console.log(typeof myArray)

 let myFunction=function(){
    console.log('Hello this is my first function in '); // if we only write this only 
 }
 myFunction(); 

let myObj={
    name:'pawan',
    age:23,
    gender:'male',
    grade:12,

}
let bigNum=3343535355656564646464646464646464646n; // to make the bigint use n at the end of the number

// console.log(typeof myObj);
// console.log(myObj)

// console.log(typeof bigNum); // the output is bigint



//************************* Stack(Primitive) and Heap(Non-Primitive) memory */

let myYtName='codeFlicks'

let anotherName=myYtName
anotherName="code code"

// console.log(anotherName)
// console.log(myYtName);


let userA={
    email:'pawan@gmail.com',
    id:10,
}

  let userB=userA

  userB.email='john@gmail.com'
  userB.id=12

  console.log(userA.email)
  console.log(userB.id)
  

// let stack = [];
// stack.push(1);
// stack.push(2);
// console.log(stack.pop()); // 2

let a=12;
let b=12;
let c=a+b;
console.log(c)
