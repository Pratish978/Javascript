//{} :- Scope

//let

// let a=10;

//const

// const b=20;

//var

// var c=30;

// console.log(a);
// console.log(b);
// console.log(c);

varc=300;//Global scope

if (true) {
    let a=10;//Block scope
    console.log(a);
    const b=20;//Block scope
    console.log(b);
    var c=30;//Block scope
}

// console.log(a);//A will not print of block scope.
// console.log(b);//B will not print of block scope.
console.log(c);//C will print 30 not 300.