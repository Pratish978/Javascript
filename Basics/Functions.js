//Functions
function MyName(){
console.log("Pratish");
}

MyName();

function add(num1 ,num2){ //Parameters
    console.log(num1+num2);
}

add(3,4);//arguments


function add(num1 ,num2){ //Parameters
    let result=num1+num2;
    return result;
}

const result=add(3,4)
console.log(result);

function LoginUser(userName){
    if(userName===undefined){
        console.log("Please Enter your username");
    }
    return `${userName} just logged in`
}

console.log(LoginUser("Pratish"));


function calculateCartPrice(...num1){//Rest operator
    return num1;
}

console.log(calculateCartPrice(200,400,600));


const user={
    username:"Pratish",
    age:21
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and age is ${anyObject.age}`);
}

handleObject(user);
