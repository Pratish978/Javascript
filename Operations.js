let value =3;
let negativeValue = -value;
console.log(value); // 3
console.log(negativeValue); // -3

//Operations
let a = 10;
let b = 5;

console.log(a + b); // 15 (Addition)
console.log(a - b); // 5 (Subtraction)
console.log(a * b); // 50 (Multiplication)
console.log(a / b); // 2 (Division)
console.log(a % b); // 0 (Modulus - Remainder of the division)

//Increment and Decrement
let c = 5;
console.log(c++); // 5 (Post-increment) postfix form, returns the value before incrementing
console.log(c); // 6 (Value after increment) value after incrementing
console.log(++c); // 7 (Pre-increment) prefix form, increments the value first and then returns it
console.log(c); // 7 (Value after increment) value after incrementing
console.log(c--); // 7 (Post-decrement) postfix form, returns the value before decrementing
console.log(c); // 6 (Value after decrement) value after decrementing
console.log(--c); // 5 (Pre-decrement) prefix form, decrements the value first and then returns it
console.log(c); // 5 (Value after decrement) value after decrementing


//Complex situation

let str1="Pratish";
let str2="Bhongle";
let str3=str1+str2;
console.log(str3); // "PratishBhongle" (String concatenation)

console.log("1" + 2);
// "1" + 2 results in "12" because the number 2 is coerced into a string and concatenated with "1".

console.log(1 + "2");
// 1 + "2" results in "12" because the number 1 is coerced into a string and concatenated with "2".

console.log("1" + 2 + 2);
// "1" + 2 + 2 results in "122" because the number 2 is coerced into a string and concatenated with "1" and "2".

console.log(1 + 2 + "2");
// 1 + 2 + "2" results in "32" because the number 1 is added to 2 first, resulting in 3, and then the number 3 is coerced into a string and concatenated with "2".

console.log(+true);
// +true results in 1 because the unary plus operator converts the boolean value true to the number 1.
console.log(+false);
// +false results in 0 because the unary plus operator converts the boolean value false to the number 0.
console.log(+ " ");
// + " " results in 0 because the unary plus operator converts the string with a space to the number 0.