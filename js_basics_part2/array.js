const myArray=[1,2,3,4,5]
// console.log(myArray[0])

myArray.push(50) // this helps to add new value in the array
// console.log(myArray)

myArray.pop() // this helps to remove the last value of the array . in this case the 50 will be removed 
// console.log(myArray)

myArray.unshift(4) // this add the new value like 4 in this case in the first place in array
// console.log(myArray)

myArray.shift() // this removes the first value of the array in this case 4 is removed 
// console.log(myArray)

// console.log(myArray.includes(4)) // it gives the answer whether the given element is in that array or not if that is present there then it will give true and otherwise false
// console.log(myArray.includes(55))

// console.log(myArray.indexOf(3)) // it gives the index of that element which we are pointing here we gave three which index is 2 so it will give 2 cause index starts from 0 if we put the element which we have not given then it will give -1

const newArray=myArray.join() // in JavaScript, join() is used to combine all elements of an array into a single string.
// console.log(newArray)


let fname="pawanAcharya"
let oName= fname.slice(0,5)
// console.log(oName)

// console.log("This is an Array", myArray)

const nArray1=myArray.slice(1,3) //In JavaScript, slice() is used to copy a part of an array or string without changing the original one.
console.log(myArray)
// console.log(nArray1)
// console.log("this is an array", myArray)

const mySplice=myArray.splice(1,3) //  Used to ADD, REMOVE, or REPLACE elements in an array and it changes the original array 
console.log(mySplice)
console.log(myArray)

