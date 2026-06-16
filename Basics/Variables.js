const accountId = 123;
let accountName = "Pratish ";
var accountPassword = 12345;
accountCity = "Mumbai";
let accountState;//undefined

// accountId = 456; // This will throw an error because accountId is a constant and cannot be reassigned.
accountName = "Pratish Bhongle"; // This is allowed because accountName is declared with let and can be reassigned.
accountPassword = 54321; // This is allowed because accountPassword is declared with var and can be reassigned.
accountCity = "Pune"; // This is allowed because accountCity is a global variable and can be reassigned.


console.log(accountId);
console.table({ accountId, accountName, accountPassword, accountCity, accountState });

/*
This is a multi-line comment. It can span multiple lines and is often used for longer explanations or documentation.
Prefer not to use var for variable declarations in modern JavaScript, as let and const provide better scoping and immutability features. Use const for variables that should not be reassigned, and let for variables that may need to be reassigned. Avoid using global variables to prevent unintended side effects and improve code maintainability.
*/