// Example of a syntax error
// funktion divide(x,y) {
//     return normalize(x) / normalize(y);
// }

// function normalize(x) {
//     return x <= 0 ? 1 : x;
// }





// Example of a runtime error
// function divide(x,y) {
//     return normalized(x) / normalized(y);
// }

// function normalized(x) {
//     return x <= 0 ? 1 : x;
// }

// console.log(normalized(-2));;
// console.log(normalized(5));;
// console.log(divide(-2, 5));;





// Example of logic error
function divide(x,y) {
    return normalized(x) / normalized(y);
}

function normalized(x) {
    return x < 0 ? 1 : x;
}

console.log(normalized(5, -1));;
console.log(normalized(5, -2));;
console.log(divide(-2, 0));;
