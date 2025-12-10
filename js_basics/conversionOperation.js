// ************************** Data Conversion ***************************//
let score = "1234abc"

// console.log(typeof score);

let valueOfNumber=Number(score) // the above score is in string but this line of code convert that string in number and store the score in valueOfNumber. if we add abc in that score like 1234abc then it will give nan(not a number) and if we give just number then it will convert that string in number

// console.log(typeof valueOfNumber);
// console.log(valueOfNumber);
// console.log(typeof valueOfNumber)

let isLoading=1

let booleanIsLoading=Boolean(isLoading)
// console.log( typeof booleanIsLoading)

let randomNumber=14

let stringNumber=String(randomNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber)




//* ****************************** Operations ********************* */

let value =50
let negValue=-value
// console.log(negValue)

// ************** String Concatenation **********//

let fName="Pawan"
let lName=" Acharya"
let finalName= fName+lName
// console.log(finalName)


// console.log(1+"2") // the output is 12 because it treats as string it concat the both as string
// console.log("1"+2) // again the output is 12 
// console.log(1+2+"5") // the output is 35 because the first two value got added and then it concat with the string 5
// console.log("1"+2+2) // here the output is 122 cause the first one is string and later on all got concat they don't added



// console.log(+false) // it give output 0
// console.log(-false) // it gives output -0 

// console.log(+true) // it gives output 1
// console.log(-true) // it gives -1 because the true value is 1 and when we + or - in this then it gives value and add the operator what we have used it applies safe for false too cause the false value is 0 and so on



// ********************  Comparison of DataTypes ****************//

// console.log(5>3) // we will get output true
// console.log(5>=2) // true
// console.log(5<=10) // true  

// console.log(5<1) // we will ge output false 
// console.log("5"<1)

// console.log("02">12)  this string is converted into number by javascript so we will get answer "true" here

// console.log(null >0) // null > 0 becomes 0 > 0 which is false because zero is not greater than zero ( but here null is treated as zero)
// console.log(null ==0) // null == 0 becomes null==0 which is false ( here null is not treated as number )
// console.log(null >=0)      // null >- 0 becomes 0>=0 which is true  ( here null is treated zero so the zero is greater than or equal to zero which is true)


console.log("5"==5); // here the "==" operator only compares the values here one is string and another is number so it gives true cause it is comparing values only

console.log("5"===5); // here the "===" operator compares value and dataType both so here we get false cause one is string and another is number 

// **** Note don't use such kind of conversion which is done above (that was for learning purpose only) *******// 
