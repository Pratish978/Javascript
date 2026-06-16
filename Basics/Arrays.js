//Array is an collection of multiple items.It is 0 based indexing.

const myArr=[0,1,2,3,4,5];
const heroes=["Spiderman","Antman","Batman"];

const newArray= new Array(1,2,3,4)


console.log(myArr[0]);
myArr.push(6);//Add at the end
console.log(myArr);
myArr.pop(6);//Delete at the end
console.log(myArr);
myArr.unshift(0);//Add at the start
console.log(myArr);
myArr.shift(0);//Removes from the start
console.log(myArr);

console.log(myArr.includes(9));//false
console.log(myArr.indexOf(9));//-1
console.log(myArr.indexOf(3));//2

const newArr=myArr.join();
console.log(myArr);
console.log(newArr);



console.log("A",myArr);

//Slice 

const myn1=myArr.slice(1,3);//1,2 
console.log("B",myArr);
console.log(myn1);


//Splice

const myn2=myArr.splice(1,3);//1,2,3
console.log("C",myArr);
console.log(myn2);
