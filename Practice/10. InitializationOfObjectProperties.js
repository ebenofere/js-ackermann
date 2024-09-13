// Real-Life Example: Initialization of Object Properties

// The statement james.lastName ||= "Doe"; internally ensures that the lastName property of the object james is initalized with the value Doe if the proerty is not yet assigned.
const james = {
    firstName: "James",
}

james.firstName ||= "John";
james.lastName ||= "Doe";
console.log(james); 



// Prior to ES2021, the following was required;
const peter = {
    firstName: "Peter"
};

peter.firstName || (peter.firstName = "John");
peter.lastName || (peter.lastName = "Doe");

console.log(peter); 