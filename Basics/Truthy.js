const userEmail=[];

if(userEmail){
    console.log("Got user Email");
}else{
    console.log("Don't have user email");
}

//Falsy values:-

/*
False
0
-0
bigInt 0n
" "
null 
undefined
NaN
*/

//Rest all truthy values "0" and "false" because it is in strings , [] , {} , function(){} 

if(userEmail===0){
    console.log("Array is empty");
}

const emptyObj={}

if(emptyObj===0){
    console.log("Object is empty");
}