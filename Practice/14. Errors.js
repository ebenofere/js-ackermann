// Example of a syntax error
// funktion divide(x,y) {
//     return normalize(x) / normalize(y);
// }

// function normalize(x) {
//     return x <= 0 ? 1 : x;
// }





// Example of a runtime error
// function divide(x, y) {
//     return normalized(x) / normalized(y);
// }

// function normalized(x) {
//     if (x <= 0) {
//         return undefined; // Returning undefined for invalid inputs
//     }
//     return x;
// }

// console.log(normalized(-2)); // Output: undefined
// console.log(normalized(5));  // Output: 5
// console.log(divide(-2, 5));  // Runtime error: TypeError: Cannot read property '0' of undefined
// In this example, the `divide` function will cause a runtime error when `normalized(x)` returns `undefined`. The error occurs because you cannot divide by `undefined`, leading to a `TypeError`.





// Example of logic error
// function divide(x,y) {
//     return normalized(x) / normalized(y);
// }

// function normalized(x) {
//     return x < 0 ? 1 : x; 
// }

// console.log(normalized(5, -1));
// console.log(normalized(5, -2));
// console.log(divide(5 , 0));





// Example of the use of a try-catch block
// const userInput = prompt("Please enter the length of the array");
// const length = parseInt(userInput);
// let array;

// try {
//     array = createArray(length);
// } catch (error) {
//     console.log(error.name); // Output: RangeError
//     console.log(error.message); // Invalid array length
// }


// function createArray(length) {
//     return new Array(length);
// }

// The code asks the user to enter a number.
// It converts the entered value to an integer.
// It tries to create a new array with the specified length.
// If the length is invalid, it catches the error and logs the error details to the console.





// A function that throws an error
// console.log(checkAge(22)); // true
// console.log(checkAge(-22)); // Error: Age must not be negative
// function checkAge(age) {
//     if (age < 0) {
//         throw new Error("Age must not be negative");
//     } else {
//         return true;
//     }
// }





// The code after throw is no longer executed in case of an error
// console.log(checkAge(22)); // true
// console.log(checkAge(-22)); // Error: Age must not be negative
// function checkAge(age) {
//     if (age < 0) {
//         throw new Error("Age must not be negative");
//     } 
    
//     return true; // In case of an error, this statement will no longer be executed.
// }





// One function can throw multiple errors
console.log(checkAge(22)); // true
console.log(checkAge("Gavi")); // Error: Age must be a number
function checkAge(age) {
    if(isNaN(parseFloat(age))) {
        throw new Error("Age must be a number");
    } else if (age < 0) {
        throw new Error("Age must not be negative");
    }
    
    return true; // In case of an error, this statement will no longer be executed.
}
