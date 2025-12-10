let myDate=new Date()
console.log(myDate.toDateString());
console.log(myDate.toString());
console.log(myDate.toTimeString() )


console.log(typeof myDate)

let myCreatedDate=new Date(2024, 0,24) // this is the date we created and the 0 means january cause in js the date starts from 0 so 11 is december and 0 is january

console.log(myCreatedDate.toDateString()) // this toDateString prints the date only 


let myTimeStamp =  Date.now()
console.log(myTimeStamp);


let anotherDate= new Date()

console.log(anotherDate.getDay()+1)
console.log(anotherDate.getMonth()+1)
console.log(anotherDate.getFullYear())

console.log(`The current day is ${anotherDate.getDay()} and the current month is ${anotherDate.getMonth()} and the current year is ${anotherDate.getFullYear()}`)


console.log(anotherDate.toLocaleString('default',{
    year:'numeric',
    weekday:'long',
    day:'numeric',
    era:'long',
})
)