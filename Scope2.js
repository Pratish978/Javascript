//Nested scope

function one(){
    const userName="Pratish";
    function Two(){
        const Website="Youtube";
        console.log(userName);//Child function can acess parent function.
    }
    // console.log(Website); It will not execute because it is out of scope
    Two();
}

one();

if(true){
    const name="Pratish";

    if(name=="Pratish"){
        const website="Youtube";
        console.log(name + website);
    }
    // console.log(website);   It will not execute because outside of block scope
}

// console.log(name); It will not execute because outside of block scope


//++++++++++++++++++++++++++++++++++++++Intresting++++++++++++++++++++++++++++++++++++//

console.log(addone(5));//It will run

function addone(num){
    return num+1;
}

addone(5);

// console.log(addtwo(5)); Iw will not run beacuase function is declared with varaiable.

const addTwo= function (num){
    return num =2;
}

addTwo(5)