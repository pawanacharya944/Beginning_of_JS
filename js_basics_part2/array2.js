const marvel_hero=["Spiderman","Ironman","Thor","Hulk"]
const dc_hero=["Superman", "Batman","Flash","Aquaman"]

// const allHero=marvel_hero.concat(dc_hero) //  concat helps to add two arrays in the new array which is allHero here
// console.log(allHero)


const usingSpread=[...marvel_hero, ...dc_hero] // instead of concat most developer use spread, so here we used spread which is done like this ...arrayName, ...anotherArray
// console.log(usingSpread)

const array_bhitra_array=[1,2,3,[4,5],6,7,[8,9,[10,11,[13,14,[15],16],17],18],19,[20]] // here i gave arrays inside array and its kind of tedious task to handle this and make in a single array but we have flat in which we can give value like flat(4) then it handles 4 levels of arrays and if we use infinity then it will solve any level 
const mergeInSingleArray=array_bhitra_array.flat(1)
// console.log(mergeInSingleArray)

// console.log(Array.isArray("pawan")) // this checks whether the given value is array or not we ask question and we get answer in true or false 

console.log(Array.from("Pawan")) // it converts the given string in array like this [ 'P', 'a', 'w', 'a', 'n' ]

console.log(Array.of(1,100,4,2)) // of can change number into strings 

let score1=24
let score2=32
let score3=44
 console.log(Array.of(score1,score2,score3)) // we can also use variables instead of numbers 
