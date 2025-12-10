const score=222   

// console.log(score);

// const newScore= new Number(555)
// console.log( newScore.toString().length) // it shows how many character are there in value for example here in 555 there are three character so its shows 3
// console.log(newScore.toFixed(1)) // here toFiexd (2) gives the 2 zero after the give value for ex: 555.00 and if we put 3 then 555.000 this is useful in e-commerce and banking app to show the balance 


// const precisionValue=12124.33455
// console.log(precisionValue.toPrecision(5))

// const nayaNumber=1000000
// console.log(nayaNumber.toLocaleString()) // it will give comma on the basis of USA standard
// console.log(nayaNumber.toLocaleString('en-IN')) // it will give comma on the basis of indian or nepali standard







// ************************ Maths******************************//
// console.log(Math) 
// console.log(Math.abs(-19)) // it changes the negative number to positive and does not change the positive to negative 
// console.log(Math.round(44.54)) // it round off the the given number now the output will be 45 and if it is less than .5 then i will give 44

// console.log(Math.sqrt(25)) // it find the square root of the value here the output will be 5 cause the square root of 25 is 5
// console.log(Math.min(45,56,2,66,7678,3422)) // it finds the minimum value from the given here min value is 2
// console.log(Math.max(2134,356,56,2352,25266)) // it finds the maximum value from the given here max value is 25266

console.log(Math.random()) // it generates the random value between zero and 1

console.log((Math.random()*10)+1) // the random number gets multiplied by 10 and latter the in result 1 will be added 


const min = 50
const max = 100

console.log(Math.floor(Math.random()*(max-min+1))+min) // here the floor is used to avoid the decimal value and the random value is multiplied with the value we get from (max-min+1) and helps us to get value more then one and that +min helps to get the minimum value which is 50
