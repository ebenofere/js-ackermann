// null-coalescing operator

const x = 4711;

console.log({} ?? x); // {}
console.log(false ?? x); // false
console.log(x ?? null); // 4711
console.log(null ?? x); // 4711
console.log(null ?? null); // null
console.log(x ?? NaN); // 4711
console.log(NaN ?? x); // NaN
console.log(x ?? undefined); //4711
console.log(undefined ?? x); //4711
console.log(undefined ?? undefined); // undefined