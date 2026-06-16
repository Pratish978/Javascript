const marvel_Heroes=["Thor","IronMan","Spiderman"];
const dc_Heroes=["Sperman","Flash","batman"];

//Concat
let allHeroes=marvel_Heroes.concat(dc_Heroes);
console.log(allHeroes);

//Spread
const all_new_Heroes=[...marvel_Heroes,...dc_Heroes];
console.log(all_new_Heroes);

//Flat
const anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_array=anotherArray.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Pratish"));
console.log(Array.from("Pratish"));
Array.isArray(Array.from({name:"Pratish"})) //Empty array Search on it why it is empty

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));

