// A nested counting loop that outputs all number combinations of the numbers from 1 to 10

// outer loop
// for (let i = 1; i < 11; i++) {

//     //inner loop
//     for (let j = 1; j < 11; j++) {
//         console.log(`i has the value of ${i}, j has the value of ${j}`);
//     }
// }




// Iteration over a multidimensional array using nested counting loops
const coordinates = [
    [50.69, 8.94],
    [54.29, 11.97],
    [55.38, 12.88],
    [60.78, 9.94],
    [62.29, 7.69],
    [70.34, 8.24],
    [2.59, 11.29],
    [80.69, 8.56]
];

for (let i = 0; i < coordinates.length; i++) {
    const coordinate = coordinates[i];

    for (let j = 0; j < coordinate.length; j++) {
        console.log(coordinate[j]);
    }
}