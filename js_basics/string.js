let name ='pawan'
let age = 24

// console.log(name+age) // not a good way to do

// console.log(`My name is ${name} and My age is ${age}`) // this ${name} means to inject variable so we put our variable name for ex name here which inject the value that is hold by that variable  (so we name this syntax as string interpolation) (this is a good syntax and better way to do than the previous one )

// const names=new String('John')
// console.log(typeof new String('John')); 
// console.log(names[0])
// console.log(names.__proto__)
// console.log(names.length)
// console.log(names.toUpperCase());
// console.log(names.toLowerCase())
// console.log(names.charAt(2))
// console.log(names.indexOf('h'));

// const newString = names.substring(0,2)
// console.log(newString)

// const anotherNewString=names.slice(-100,3)
// console.log(anotherNewString)

// const myName='  Pawan      '
// console.log(myName)
// console.log(myName.trim())

const url =('https://pawanacharya.com%22hello')
console.log(url.replace('%22', 'kxahajur?')) // replace is used to replace the certain part we want to replace, here we replace that %22 into kxahajur? so in output we will get kxahajur in the place of %22 

console.log(url.includes('pawan')) // includes checks whether there is correct value or not if it has correct value then it give say true otherwise false 


const sentence='My-name-is-John-the-don'
const word=sentence.split('-') // split is used to split the sentence and on what basis to split like here we have used dash ( - ) to separate and if we want to separate it by space we can do like this (' ')
console.log(word[3]) // if we don't put the value inside then it will such output [ 'My', 'name', 'is', 'John', 'the', 'don' ] it will split all the words on the basis of dash

