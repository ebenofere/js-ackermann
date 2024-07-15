// A nested counting loop that outputs all number combinations of the numbers from 1 to 10

// outer loop
// for (let i = 1; i < 11; i++) {

//     //inner loop
//     for (let j = 1; j < 11; j++) {
//         console.log(`i has the value of ${i}, j has the value of ${j}`);
//     }
// }





// Iteration over a multidimensional array using nested counting loops
// const coordinates = [
//     [50.69, 8.94],
//     [54.29, 11.97],
//     [55.38, 12.88],
//     [60.78, 9.94],
//     [62.29, 7.69],
//     [70.34, 8.24],
//     [2.59, 11.29],
//     [80.69, 8.56]
// ];

// for (let i = 0; i < coordinates.length; i++) {
//     const coordinate = coordinates[i];

//     for (let j = 0; j < coordinate.length; j++) {
//         console.log(coordinate[j]);
//     }
// }





// An example of how loops can be aborted via the break keyword
// const numbers = [2, 4, 56, 22, 65, 2, 54, 88, 29];
// console.log("Before the loop");

// for(let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];

//     if(number % 2 === 1) {
//         console.log("Odd number found.");
//         break;
//     }

//     console.log(number);
// }
// console.log("After the loop");





// Head-Controlled Loops can also be aborted via the break keyword
// const numbers = [2, 4, 56, 22, 65, 2, 54, 88, 29];
// console.log("Before the loop");

// let i = 0;

// while (i < number.length) {
//     const number = numbers[i];

//     if(number % 2 === 1) {
//         console.log("Odd number found.");
//         break;
//     }

//     console.log(number);
//     i++;

// }

// console.log("After the loop");





// Loop iterations can be aborted via the continue keyword
// const numbers = [2, 4, 56, 22, 65, 2, 54, 88, 29];
// console.log('Before the loop.');
// for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];

//     if (number % 2 == 1) {
//         console.log('Odd number found.');
//         continue;
//     }
    
//     console.log(number);
// }
// console.log('After the loop');





// DO NOT RUN!! - This code would produce an infinite loop.
// const numbers = [2, 4, 56, 22, 65, 2, 54, 88, 29];
// console.log('Before the loop.');
// let i = 0;
// while (i < numbers.length) {
//     const number = numbers[i];

//     if (number % 2 === 1) {
//         console.log('Odd number found');
//         continue;
//     };

//     console.log(number);
//     i++;
// }





// This code does not produce an infinite loop
// const numbers = [2, 4, 56, 22, 65, 2, 54, 88, 29];
// console.log('Before the loop.');
// let i = 0;
// while (i < numbers.length) {
//     const number = numbers[i];
//     i++;
//     if (number % 2 === 1) {
//         console.log('Odd number found');
//         continue;
//     };
//     console.log(number);
// }





// This nested loop finds duplicate numbers in the array
// const numbers = [2, 4, 56, 22, 65, 2, 54, 88, 29];
// for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
    
//     for (let j = i + 1; j < numbers.length; j++) {
//         const number2 = numbers[j];
//         console.log(`Compare ${number} with ${number2}`);

//         if (number === number2) {
//             console.log('Same numbers found');
//             continue;
//         }
//     }
// } 





// Jump labels can be used to specify the target of a "continue" statement
// The "continue outerLoop" statement then ensures that if a duplicate number is found, the process specifically jumps from the inner loop to the outer loop and continues with the next loop iteration of this outer loop.
// const numbers = [2, 4, 56, 22, 65, 2, 54, 88, 29];

// outerLoop:
// for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];

//     innerLoop:
//     for (j = i + 1; j < numbers.length; j++) {
//         const number2 = numbers[j];
//         console.log(`Compare ${number} with ${number2}`);
//         if (number === number2) {
//             console.log('Same numbers found');
//             continue outerLoop;
//         }
//     }
// }





// The program terminates when the first pair of numbers has been found
// The statement "break outerLoop" ensures that if a duplicate number is found, the process jumps from the inner loop to the outer loop, but then the complete loop is aborted!
// const numbers = [2, 4, 56, 22, 65, 2, 54, 88, 29];
// outerLoop:
// for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];

//     innerLoop:
//     for (j = i + 1; j < numbers.length; j++) {
//         const number2 = numbers[j];
//         console.log(`Compare ${number} with ${number2}`);
//         if (number === number2) {
//             console.log('Same numbers found');
//             break outerLoop;
//         }
//     }
// }



