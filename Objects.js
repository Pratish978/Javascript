// Singleton 

//Object literals key value pairs

const mySym = Symbol ("key1");
console.log(mySym);


const jsUser={
    name:"Pratish",
    "Full Name" : "Pratish Bhongle",//Can not be acessed by . only square bracket[]
    [mySym] : "Key1",//For symbol use []
    age:21,
    location:"Mumbai",
    email:"bhonglepratish@gmail.com",
    isLoggedIn:false,
    lastLoggedIn:["Monday","Saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["Full Name"]);
console.log(jsUser[mySym]);

jsUser.email="pratish@gmail.com";
// Object.freeze(jsUser) //Can not change after this Freeze
jsUser.email="bhongle@gmail.com";
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello js User");
}

jsUser.greeting2 = function(){
    console.log(`Hello js user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());