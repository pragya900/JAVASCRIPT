// creating a symbol
const mySym = Symbol("key1")

const user = {
    name:"totoro",
    "full name" : "totoro hui",
    [mySym]:"mykey1",
    age: 90,
    location:"New york",
    email:"totoro@gmai.com",
    isLoggedIn: false,
    lastLoginDays:["Mondays","tuesday"]

}
console.log(user)

//overwriting the values
user.email= "ponyo@gmail.com"
console.log(user)

// freeaing the object user
//Object.freeze(user)


//accessing the values 
console.log(user.email)
console.log(user["email"])
console.log(user["full name"])
console.log(user[mySym])

//creating a function 
user.greetings = function(){
    console.log("hello to the amazing world of coding")
}
console.log(user.greetings())

//creating another function
user.greetingsTwo = function(){
    console.log(`hello javascript user, ${this.name}`)
}
console.log(user.greetingsTwo())
