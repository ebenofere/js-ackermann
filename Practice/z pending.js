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
function capitalize(strings, ...values) {
    const capitalizedValues = values.map(value => value.toUpperCase());
    let result = "";
    strings.forEach((string, i) => {
        result += string + (capitalizedValues[i] || "");
    });
    return result;
}

const name = "Alice";
const city = "Wonderland";
const greeting = capitalize`Hello, ${name} from ${city}!`;
console.log(greeting); // Output: Hello, ALICE from WONDERLAND!

