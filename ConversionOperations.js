let score="33abc";

console.log(typeof score); // "string"

let convertedScore = Number(score); // Convert the string to a number
console.log(typeof convertedScore); // "number"
console.log(convertedScore); // NaN (Not a Number) because "33abc" cannot be converted to a valid number

let Score=null;

let convertedScore2 = Number(Score); // Convert null to a number
console.log(typeof convertedScore2); // "number"
console.log(convertedScore2); // 0 because null is converted to 0 when using the Number function

let Score3=1;

let convertedScore3 = Boolean(Score3); // Convert true to a number
console.log(typeof convertedScore3); // "boolean"
console.log(convertedScore3); // true

//"33" => 33
//"33abc" => NaN
//null => 0
//undefined => NaN
//true => 1 
//false => 0