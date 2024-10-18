// primitive (call by value)

// 7 types: String, Number, Boolean,  null, undefined, Symbol, BigInt

//JS is a dynamically typied language.

const score =  100     //const score:number = 100(In typeScript)
const scoreValue = 100.3

const isLoggedIn = true
const outsideTemp = null // it's return type is object.

let userEmail; //undefined or we can assign it mannually.

const id = Symbol("123")
const anotherId = Symbol("123")

// console.log(id === anotherId); //false


const bigNumber = 123232423132323n


//Reference type( Non premitive)

//Array, Objects, Functions

const heros = ["shaktiman", "nagraj", "doga"] // it's return type is object.

let myObj = {
    name:"kodeX",
    age: 22,
}



const myFunction = function(){ // it is called as object function
    console.log("heyy kodeX!");
    
}

// console.log(typeof score);
// console.log(typeof scoreValue);
// console.log(typeof isLoggedIn);
// console.log(typeof outsideTemp);
// console.log(typeof userEmail);
// console.log(typeof id);
// console.log(typeof anotherId);
// console.log(typeof bigNumber);
// console.log(typeof heros);
// console.log(typeof myObj);
// console.log( typeof myFunction);


// ********************** Memory in js ***************** //

// stack (Primitive), Heap (Non Premitive)

// stack- copy
// Heap- Reference (original)

let myYoutubename = "Thinkwithsom"

let anotherName = "kodeXsom"

console.log(anotherName);
console.log(myYoutubename);


let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl",

}

let userTwo = userOne

userTwo.email = "kodeX@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

