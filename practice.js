// this nested loop finds duplicate numbers in the array
const numbers = [2, 4, 56, 22, 65, 2, 54, 88, 29];
console.log("Before the loop");

// inner loop
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];

    // outer loop
    for (let j = i + 1; j < numbers.length; j++) {
        const number2 = numbers[j];
        console.log(`compare ${number} to ${number2}`);
        
        if (number === number2) {
            console.log("both numbers are the same");
            continue;
        }
    }

}

console.log("After the loop");
