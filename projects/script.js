// use of if-else-if-else branching
const testResultElement = document.getElementById('testResult');
const testResult = 0;
let icon = null;

if (testResult === 0) {
    icon = "pass.png";
} else if(testResult === 1) {
    icon = "info.png";
} else if(testResult === 2) {
    icon = "warning.png";
} else if (testResult === 3) {
    icon = "error.png";
} else {
    icon = "unknown.png"
}