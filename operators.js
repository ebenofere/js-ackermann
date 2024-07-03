const someNullValue = null;
const someUndefinedValue = undefined;
const sumNumber = 0;
const someText = "";
const someBoolean = false;

// Left operand is null --> return right operand
const a = someNullValue ?? "Default value for null"
console.log(a);