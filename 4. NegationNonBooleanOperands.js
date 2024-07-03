// An empty string returns true; a non-empty string returns false
// All numbers except 0 (including the special Infinity value) returns false, but the number 0 returns true
// Objects return false
// The special values (null, NaN, and undefined) all return true

const name = "John Doe";
const emptyString = "";

console.log(!name); // false
console.log(!emptyString); // true

const amount = 0;
const age = 25;

console.log(!amount); //true
console.log(!age); // false
console.log(!null); // true
console.log(!NaN); // true
console.log(!undefined); // true