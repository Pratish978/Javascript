console.log(2>1);// true because 2 is greater than 1
console.log(2<1);// false because 2 is not less than 1
console.log(2>=1);// true because 2 is greater than or equal to 1
console.log(2<=1);// false because 2 is not less than or equal to 1
console.log(2==1);// false because 2 is not equal to 1
console.log(2!=1);// true because 2 is not equal to 1

console.log("2">1);
// true because when comparing a string and a number, JavaScript converts the string to a number. 
// In this case, "2" is converted to the number 2, and 2 is greater than 1.

console.log(null>0);
// false because null is converted to 0 when compared with a number, and 0 is not greater than 0.
console.log(null==0);
// false because null is only equal to undefined and not equal to any other value, including 0.
console.log(null>=0);
// true because null is converted to 0 when compared with a number, and 0 is greater than or equal to 0.

console.log(undefined>0);
// false because undefined is converted to NaN when compared with a number, and NaN is not greater than 0.
console.log(undefined==0);
// false because undefined is only equal to null and not equal to any other value, including 0.
console.log(undefined>=0);
// false because undefined is converted to NaN when compared with a number, and NaN is not greater than or equal to 0.


//=== Strict equality operator - checks for both value and type equality

console.log(2===2); // true because both value and type are the same (number)
console.log(2==="2"); // false because the value is the same but the type is different (number vs string)