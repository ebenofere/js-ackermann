//With function expressions, the function cannot be called by its name
// const showMessage = function showMessageFunctionName() {
//     console.log('Welcome');
// }

// showMessage();
// showMessageFunctionName(); // function call not possible





// Functions created using function expressions cannot be used before this expression
// showMessage(); // Function call not possible, this statement produces an error.
// const showMessage = function() {
//     console.log('Welcome');
// }





// Functions created using function declaration can already be used before this declaration
// showMessage(); // Function call possible
// function showMessage() {
//     console.log('Welcome');
// }




// Via the arguments Object, all arguments of a function call are available within a function
// function printPersonInformation (firstName, lastName, age) {
//     console.log(`First name: ${firstName}`);
//     console.log(`Last name: ${lastName}`);
//     console.log(`Age: ${age}`);

//     console.log(arguments);

//     if (arguments.length > 3) {
//         console.log(`Age: ${arguments[2]} years old`);
//     }

//     if (arguments.length > 4) {
//         console.log(`Weight: ${arguments[3]} kg`);
//     }
// }

// printPersonInformation("Lautaro", "Martinez", 28, 75.3, "Argentina");





// Rest parameters provides all arguments of a function call within a function for which there is no corresponding parameter in the function declaration
// function printPersonInformation(firstName, lastName, age, ...restArgs) {
//     console.log(`First name: ${firstName}`);
//     console.log(`Last name: ${lastName}`);
//     console.log(`Age: ${age}`);
    
//     console.log(...restArgs, "rest args");

//     if (restArgs.length > 0) {
//         console.log(`Size: ${restArgs[0]}`);
//     }

//     if (restArgs.length > 1) {
//         console.log(`Size: ${restArgs[1]}`);
//     }
// }

// printPersonInformation("Lautaro", "Martinez", 28, 75.3, "Argentina");





// Implementation of a function via Array
// function sum(numbers) {
//     let result = 0;

//     for (let i = 0; i < numbers.length; i++) {
//         result += numbers[i];
//     }

//     console.log(result);
// }

// sum([2,3,4,5]);
// sum([2,3,4,5,6,7,8,9]);
// sum([2,3,4,5,6,7,8,9,10,11]);





// Implementation of a true variadic function via Rest Parameters
// function sum(...numbers) {
//     let result = 0;

//     for (let i = 0; i < numbers.length; i++) {
//         result += numbers[i];
//     }

//     console.log(result);
// }

// sum(2,3,4,5);
// sum(2,3,4,5,6,7,8,9);
// sum(2,3,4,5,6,7,8,9,10,11);





// Functions can be defined within other functions
// function sum(x, y) {
//     const result = normalize(x) + normalize(y);

//     function normalize(i) {
//         if (i < 0) {
//             return 0;
//         }

//         return i;
//     }

//     return result
// }

// console.log(sum (-5, 5));
// console.log(normalize(-5));