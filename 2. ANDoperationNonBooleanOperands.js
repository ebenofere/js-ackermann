// If the first operand evaluates to false, the first operand is returned.
// A value that evaluates to false is also called a falsy value. Examples are the number 0, null or an empty string.
// In all other cases, the second operand is returned.

const john = {
    firstName: "John",
    lastName: "Doe"
};

const james = {
    firstName: "James",
    lastName: "Doe"
};

const isJohnAndJames = john && james;
console.log(isJohnAndJames);
// Output: Object {firstName: "James", lastName: "Doe"}

console.log(false && "John"); // Output: false
console.log("John" && null); // Output: null
console.log(null && "John"); // Output: null
