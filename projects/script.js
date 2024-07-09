// use of if-else-if-else branching
const testResultElement = document.getElementById('testResult');
const testResult = 0;
let icon = null;

if (testResult === 0) {
    icon = "./img/pass.png";
} else if(testResult === 1) {
    icon = "./img/info.png";
} else if(testResult === 2) {
    icon = "./img/warning.png";
} else if (testResult === 3) {
    icon = "./img/error.png";
} else {
    icon = "./img/unknown.png"
}

testResultElement.src = icon; 