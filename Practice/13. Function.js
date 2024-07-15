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





function printPersonInformation (firstName, lastName, age) {
    console.log(`First name: ${firstName}`);
    console.log(`Last name: ${lastName}`);
    console.log(`Age: ${age}`);

    console.log(arguments);

    if (arguments.length > 3) {
        console.log(`Size: ${arguments[3]}`);
    }

    if (arguments.length > 4) {
        console.log(`Size: ${arguments[4]}`);
    }
}

printPersonInformation("Lautaro", "Martinez", 28, "Argentina");