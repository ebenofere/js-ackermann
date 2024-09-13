// Included in the standard with ES2021 are the logical assignment operators. This small group of operators combines logical operators and assignment expressions, making conditional value assignment easier for variables and object properties, among other things.

// The logical OR assignment operator ||= is a combination of the logical || operator and the assignment operator =; that is, it assigns the right operand to the left operand if the former has a falsy value and is thus a short form of the notation a || (a = b). 

// logical OR assignment
let a1 = 5;
let a2 = null;
let a3 = false;

a1 ||= 7; 
a2 ||= 7; 
a3 ||= 7; 

console.log(`a1: ${a1}`); 
console.log(`a2: ${a2}`); 
console.log(`a3: ${a3}`); 



// The logical AND assignment operator &&= works similarly, but it combines the logical && operator and the assignment operator = and assigns the right operand to the left operand only if the former has a truthy value. This means it is a short form of the notation a && (a = b). 

// logical AND assignment
let b1 = 5;
let b2 = null;
let b3 = false;

b1 &&= 7; 
b2 &&= 7; 
b3 &&= 7;

console.log(`b1: ${b1}`); 
console.log(`b2: ${b2}`); 
console.log(`b3: ${b3}`); 



// The operator for the logical nullish assignment ??= in turn is a short form of the notation a ?? (a = b). It assigns the second operand to the first operand only if the former is null or undefined.

// logical nullish assignment
let c1 = 5;
let c2 = null;
let c3 = false;

c1 ??= 7; 
c2 ??= 7;
c3 ??= 7; 

console.log(`c1: ${c1}`);
console.log(`c2: ${c2}`); 
console.log(`c3: ${c3}`);