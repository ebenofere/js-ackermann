// the null-coalescing operator (??) returns the value of the right hand operand only if the left operand is null or undefined.
// Remember that the logical OR operator returns the right operand even if the left operand is a falsy value - that is, a value that evaluates to false

const someNullValue = null;
const someUndefinedValue = undefined;
const sumNumber = 0;
const someText = "";
const someBoolean = false;

// Left operand is null --> return right operand
const a = someNullValue ?? "Default value for null"
console.log(a);

// Left operand is undefined --> return right operand
const b = someUndefinedValue ?? "Default value for undefined"
console.log(b);

// Left operand is 0 ("falsy") --> return left operand
const c = someNumber ?? 80;
console.log(c);

// Left operand is an empty string ("falsy") --> return left operand
const d = someText ?? "Default value for empty string";
console.log(d);

// Left operand is false --> return left operand 
const e = someBoolean ?? true;
console.log(e);

const x = 4711;

console.log({} ?? x); // {}
console.log(false ?? x); // false
console.log(x ?? null); // 4711
console.log(null ?? x); // 4711
console.log(null ?? null); // null
console.log(x ?? NaN); // 4711
console.log(NaN ?? x); // NaN
console.log(x ?? undefined); // 4711
console.log(undefined ?? x); // 4711
console.log(undefined ?? undefined); // undefined