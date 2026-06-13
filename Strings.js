const name="Pratish"
const repocount= 50;

console.log(name + " " + repocount + " " + "Value");

//Literals

console.log((`Hello my name is ${name} and my repo count is ${repocount}`));

const gameName= new String("Pratish-pb-com");

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());//Original value is not changes
console.log(gameName.charAt(2));//0:-P 1:-R 2:-A
console.log(gameName.indexOf("t"));//0:-P 1:-R 2:-A 3:-T


const newString=gameName.substring(0,4);//No negative values allowed it start from zero index and stops at end-1 means 4-1. so till P r a t.

const anotherString=gameName.slice(-8,4);
console.log(anotherString);

const newString1= "      Pratish      "
console.log(newString1);
console.log(newString1.trim());

const url="https://Pratish.com/Pratish%20"
console.log(url.replace('%20','-'));
console.log(url.includes('Pratish'));

console.log(gameName.split('-'));
