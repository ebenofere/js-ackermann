// With ES2020, the optional chaining operator was fortunately included in the standard. This operator is place directly after a property when it is accessed, which ensures that the next hierarchy level is only accessed if the corresponding property exists. If it does not, the access attempt is aborted. 

const john = {
    firstName: "John",
    lastName: "Doe",
    contact: {
        email: "john.doe@javascripthandbuch.com"
    }
};

const james = {
    firstName: "James",
    lastName: "Doe"
};

// Access to nested property via optional chaining operator
console.log(john.contact?.email);
// Output: "john.doe@javascripthandbuch.com"

console.log(james.contact?.email);
// Output: undefined

// Alternative possibility: Using the operator on multiple hierarchy levels:
console.log(john?.contact?.email);
// Output: "john.doe@javascripthandbuch.com"

console.log(james?.contact?.email);
// Output: undefined
