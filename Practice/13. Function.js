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
// console.log(normalize(-5)); // normalize is not defined





// A function that returns an object
// function createUser(username, email, password) {
//     const user = {
//         username: username,
//         email: email,
//         password: password
//     }

//     return user;
// }

// const john = createUser('Kylian Mbappe', 'kmbappe9@gmail.com', 'secret');
// console.log(john);
// console.log(john.username);
// console.log(john.email);
// console.log(john.password);





// Default values in ES2015
// function createUser(username, email, password = "DeFaUlTPaSsWoRd") {
//     const user = {
//         username: username,
//         email: email,
//         password: password
//     }

//     return user;
// }

// const john = createUser('Kylian Mbappe', 'kmbappe9@gmail.com', 'secret');
// console.log(john);
// console.log(john.username);
// console.log(john.email);
// console.log(john.password);





// Using array values as arguments of a function
// function createUser(username, email, password) {
//     const user = {
//         username: username,
//         email: email,
//         password: password
//     }

//     return user;
// }

// const userData1 = ['Jude Bellingham', 'jude210bell@gmail.com', 'secret3143'];
// const userData2 = ['Bukayo Saka', 'bukayosaka@gmail.com', 'iBadan005!'];

// const Jude = createUser(userData1[0], userData1[1], userData1[2]);
// const Bukayo = createUser(userData2[0], userData2[1], userData2[2]);

// console.log(Jude);
// console.log(Bukayo);





// Using array values as arguments to a function using the spread operator
// function createUser(username, email, password) {
//     const user = {
//         username: username,
//         email: email,
//         password: password
//     }

//     return user;
// }

// const userData1 = ['Jude Bellingham', 'jude210bell@gmail.com', 'secret3143'];
// const userData2 = ['Bukayo Saka', 'bukayosaka@gmail.com', 'iBadan005!'];

// const Jude = createUser(...userData1);
// const Bukayo = createUser(...userData2);

// console.log(Jude);
// console.log(Bukayo);





// The two different ways to write a function
// const createUser = (username, email, password) => {
//     const user = {
//         username: username,
//         email: email,
//         password: password
//     }

//     return user;
// }

// ...is the same as...

// function createUser(username, email, password) {
//     const user = {
//         username: username,
//         email: email,
//         password: password
//     }

//     return user;
// }





// MANIPULATING STRINGS VIA FUNCTIONS
// Tagged templates are a way to parse template literals (strings enclosed in backticks `) with a function. They allow you to process the template literal and modify its output before it's returned.

// Template literals are a way to work with strings. They are enclosed in backticks and can include placeholders (variables or expressions) using the ${...} syntax.

// A tagged template is a combination of a function (tag function) and a template literal. The tag function receives the template literal’s parts (strings and placeholders) and can manipulate or use them in any way.

// Tagged functions are essentially the functions used in tagged templates. They allow you to manipulate the template literal's parts in any way you want.

// function tag(strings, ...values) {
//     console.log(strings, "strings");  // Array of string parts
//     console.log(values, "values");   // Array of placeholder values
//     return "Custom output";
// }

// const name = "Alice";
// const greeting = tag`Hello, ${name}!`;
// console.log(greeting); // Output: Custom output





// Example of a Tagged Function
// Let's create a tagged function that capitalizes the placeholders.
// function capitalize(strings, ...values) {
//     console.log(strings, "strings");  // Array of string parts
//     console.log(values, "values");   // Array of placeholder values

//     const capitalizedValues = values.map(value => value.toUpperCase());
//     let result = "";
//     strings.forEach((string, i) => {
//         result += string + (capitalizedValues[i] || "");
//     });
//     return result;
// }

// const name = "Alice";
// const city = "Wonderland";
// const greeting = capitalize`Hello, ${name} from ${city}!`;
// console.log(greeting); // Output: Hello, ALICE from WONDERLAND!





// Implementation and usage of a Tag function
// function tagFunction(strings, ...replacements) {
//     const name = replacements[0];
//     const age = replacements[1];
//     console.log(strings, "strings");
//     console.log(replacements, "replacements");

//     if (age > 80) {
//         return `${strings[0]}${replacements[0]}`;
//     }

//     return `${strings[0]}${name}${strings[1]}${age}${strings[2]}}`;
// }

// // example 1
// const name = "Bukayo Saka";
// const age = 22;

// // example 2
// // const name = "Alex Ferguson";
// // const age = 82;

// let message = tagFunction`My name is ${name}, and I am ${age} years old`;
// console.log(message);





// The "this" keyword in the context of an object refers to the object
// const person = {
//     name: "John",
//     getName: function() {
//         return this.name;
//     }
// }

// console.log(person.getName());





// A simple global function which is used
// function getNameGlobal() {
//     return this.name;
// }

// console.log(getNameGlobal()); // when this function is called, it refers to the global context. there, the variable "name" is not defined, so you get "undefined" as the return value





// The "this" keyword in the global context refers to the global object
// var name = "global name";

// function getNameGlobal() {
//     return this.name;
// }

// console.log(getNameGlobal()); // Output: global name





// The "this" keyword refers to the context of the function
// function getNameGlobal() {
//     return this.name;
// }

// const person = {
//     name: 'James',
//     getName: getNameGlobal
// }

// const artist = {
//     name: 'Rodriguez',
//     getName: getNameGlobal
// }

// console.log(person.getName());
// console.log(artist.getName());