//Object Literals

const myKey=Symbol("keyNo1")
const myUsers={
    id:1,
    [myKey]:"KeyNo1",
    userName:'Pawan Acharya',
    age:24,
    location:"Surkhet",
    university:'Mid-West University',
    email:'pawan@gmail.com'
}

// console.log(myUsers['id'])
// console.log(myUsers['userName'])
// console.log(myUsers['age'])
// console.log(myUsers['university'])
// console.log(myUsers['email'])
// console.log(myUsers[myKey])

// myUsers.userName="John Acharya"
// console.log(myUsers['userName'])
// Object.freeze(myUsers) // freeze locks an object completely after freezing we cannot add delete modify properties and values the object become read only
// myUsers.university='Tribhuwan-University'
// console.log(myUsers['university'])




// delete myUsers.age // in this way we can delete the object we want like in this case i deleted age and if this done before we freeze the value will delete otherwise it will not 
// console.log(myUsers)

myUsers.greetings=function(){
    console.log('Hello My Users')
}
console.log(myUsers.greetings())

myUsers.addName=function(){
    console.log(`Hello My User, ${this.userName}`)
}
console.log(myUsers.addName())