// premitive and non-premitive data-types

// # primitive

// 7 types : String , Number, Boolean, null, undefined, 
// Symbol(Kisi bhi value ko unique banane ke liye use hota hai) , BigInt


// Symbole declare
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//Bigint

//const bigNumber = 3456789999176521n // by adding n last it automaticaly declare as bigInt


// # JavaScript is the Dynamically typed language







// Reference (non premitive)


// Array, Objects, Functions

const heros = ["shaktiman","naagraj", "doga"]

let myObj = {
    name:"arati",
    age: 22
}

//function as variable treat

const myFunction = function(){
    console.log("Hello world")
}

console.log(typeof myFunction)


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Two type of memories
// 1 Stack (primitive), 2 Heap(non- Primitive)

let myYoutubenmae = 'aratihendkure.com'


let anothername = myYoutubenmae;
anothername = "another arati hendkure"

console.log(anothername)
console.log(myYoutubenmae)

//heap

let user = {
    email: "user@gamil.com",
    upi: "1234AS"
}

let user2 = user

user2.email = "arati@gmail.com"

console.log(user.email)
console.log(user2.email)




