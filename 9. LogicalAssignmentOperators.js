// Included in the standard with ES2021 are the logical assignment operators. This small group of operators combines logical operators and assignment expressions, making conditional value assignment easier for variables and object properties, among other things.

// The logical OR assignment operator ||= is a combination of the logical || operator and the assignment operator =; that is, it assigns the right operand to the left operand if the former has a falsy value and is thus a short form of the notation a || (a = b). 

// logical OR assignment
let a1 = 5;
let a2 = null;
let a3 = false;

a1 ||= 7; // 5
a2 ||= 7; // 7
a3 ||= 7; // 7

console.log(`a1: ${a1}`); // "a1: 5"
console.log(`a2: ${a2}`); // "a2: 7"
console.log(`a3: ${a3}`); // "a3: 7"



// The logical AND assignment operator &&= works similarly, but it combines the logical && operator and the assignment operator = and assigns the right operand to the left operand only if the former has a truthy value. This means it is a short form of the notation a && (a = b). 

// logical AND assignment
let b1 = 5;
let b2 = null;
let b3 = false;

b1 &&= 7; // 7
b2 &&= 7; // null
b3 &&= 7; // false

console.log(`b1: ${b1}`); // "b1: 7"
console.log(`b2: ${b2}`); // "b2: null"
console.log(`b3: ${b3}`); // "b3: false"



// The operator for the logical nullish assignment ??= in turn is a short form of the notation a ?? (a = b). It assigns the second operand to the first operand only if the former is null or undefined.

// logical nullish assignment
let c1 = 5;
let c2 = null;
let c3 = false;

c1 ??= 7; // 5
c2 ??= 7; // 7
c3 ??= 7; // false

console.log(`c1: ${c1}`); // "c1: 5"
console.log(`c2: ${c2}`); // "c2: 7"
console.log(`c3: ${c3}`); // "c3: false"
