//Primitive Data Types in JavaScript :- Call by value 

// 7 types : String, Number, Boolean, Undefined, Null, Symbol, BigInt.

const Score =100;
const ScoreValue=100.3;

const isLoggedIn = true;
const outsideTemp = null;
let userEmail;

const id=Symbol("123");
const anotherId=Symbol("123");
console.log(id===anotherId); // false because each Symbol is unique, even if they have the same description.

const bigNumber = 1234567890123456789012345678901234567890n; // The 'n' at the end indicates that this is a BigInt literal

//Non-Primitive Data Types in JavaScript :- Call by reference

// 3 types : Arrays, objects, and Functions

const heros = ["Spiderman", "Ironman", "Thor"];

const myObj = {
    name:"Pratish",
    age: 21,
    isLoggedIn: true
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);


    
//Javscript is dynamically typed language - we don't need to specify the data type of a variable when declaring it. The data type is determined automatically based on the value assigned to the variable. This allows for flexibility in coding, but it also means that we need to be careful when working with different data types to avoid unexpected behavior.