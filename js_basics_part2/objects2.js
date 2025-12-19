

const productiveUser={}
productiveUser.name='pawan'
productiveUser.age=24
productiveUser.university='Mid-West University'
// console.log(productiveUser)


const instagramUser={ // we can make object inside object like we did it in array
    email:'pawan@instagram.com',
    FullName:{
        userFullName:{
            userFirstName:'Pawan',
            userLastName:"Acharya"
        }
    },

    Address:{
        userPermanentAddress:{
        province:'Karnali',
        district:'Surkhet',
        },
         userLocalAddress:{
            city:"Birendrangar",
            ward:11,
            tol:'Gagretal',
        }

    }

}
// console.log(instagramUser)
// console.log(instagramUser.Address.userLocalAddress)

const obj1={1:'Pawan', 2:'Sundar', 3:'Aman'}
const obj2={4:'Acharya',5:'Khadka', 6:'Gautam'}

// const obj3={obj1,obj2} // this is not a right way to merge objects

// const objResult=Object.assign({},obj1, obj2)
// const objResult=Object.assign({},obj1, obj2) // using {} this is very important it is target which stores the source which is obj1 and obj2
// console.log(obj1) // if we do not put {} this than when we print obj1 we will get value of both obj1 and obj2 this is{} target where the objects get stored
// console.log(objResult)

// **the best way to merge the objects is by using spread which we have done in the array earlier **//

 objResult={...obj1, ...obj2}
//  console.log(objResult)


 console.log(Object.keys(productiveUser)) // this Object.key() returns an array of the object’s own property names (keys).
 console.log(Object.values(productiveUser))
//  console.log(Object.values(productiveUser))

console.log(instagramUser.hasOwnProperty('email')) // this hasOwnProperty() checks weather the property is there or not and it gives answer in boolean (true or false)