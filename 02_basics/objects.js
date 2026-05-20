//singletone
//object.create
const user = {
    name : "Moinak",
    "full name" : "Moinak Maiti",
    "age" : 21,
    lastloign : ["Monday" , "Friday"] ,
    email : "user@google.com",
    isLoggedin : false,
}

Object.freeze(user)
console.log(user.email)
console.log(user.name)
console.log(user.age)
console.log(user["full name"])
