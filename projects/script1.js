const testResultElement = document.getElementById('testResult');
const enteredNumber = parseInt(prompt("enter test score between 0 to 5"));
let icon = null;

// use of if-else-if-else branching
// if (enteredNumber === 0) {
//     icon = "pass.png";
// } else if(enteredNumber === 1) {
//     icon = "info.png";
// } else if(enteredNumber === 2) {
//     icon = "warning.png";
// } else if (enteredNumber === 3) {
//     icon = "error.png";
// } else {
//     icon = "unknown.png"
// }

// using the switch application
switch(enteredNumber) {
    case 0:
        icon = "pass.png";
        break;
    case 1:
        icon = "info.png";
        break;
    case 2:
        icon = "warning.png";
        break;
    case 3:
        icon = "error.png";
        break;
    default:
        icon = "unknown.png";
}

testResultElement.src = `./img/${icon}`; 