// jump labels can be used to specify the target of a continue statement. the continue outerloop statement then ensures that if a duplicate number is found, the process specifiically jumps from the inner loop to the outer loop and continues with the next loop iteration of this outer loop.

const numbers = [2, 4, 56, 22, 65, 2, 54, 88, 29];

outerLoop:
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];

    innerLoop:
    for (let j = i + 1; j < numbers.length; j++) {
        const number2 = numbers[j];

        console.log(`compare ${number} with ${number2}`);
        if (number === number2) {
            console.log("Same numbers found");
            break outerLoop;
        }
    }
}