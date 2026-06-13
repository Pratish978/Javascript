//Stack Primitive Types one above the other

let myName= "Pratish";
let anothername= "Bhongle";
anotherName="Pratish Bhongle"; 
// we can change the value of anothername because it is a primitive type and stored in stack memory, but we cannot change the value of myName because it is a primitive type and stored in stack memory. When we assign a new value to anothername, it creates a new memory location in the stack for the new value, while myName still points to the original memory location with the value "Pratish".

console.log(myName);
console.log(anothername);

//Heap  non-primitive types 

let user ={
    name:"Pratish",
    age: 21,
    isLoggedIn: true,
    email:"pratish@gmail.com"
}

let user2 = user; // user2 is a reference to the same object in heap memory as user

user2.email ="bhonglepratish@gmail.com"

console.log(user.email);
console.log(user2.email);
