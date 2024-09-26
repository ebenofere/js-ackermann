// An example of how loops can be aborted via the break keyword 
const numbers = [2,4,56,22,65,2,54,88,29];
console.log("Before the loop");

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    // console.log(number);

    if (number % 2 == 1) {
        console.log("odd number found");
        break;
    }

    console.log(number);
}
console.log("After the loop");