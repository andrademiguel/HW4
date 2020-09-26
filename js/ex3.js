const values = [3, 11, 7, 2, 9, 10];

let i = 0;

values.forEach(value => {
    i += value;
});


console.log(`The sum of the array is: ${i}`);
console.log(`The min number is: ${Math.min(...values)}`);
console.log(`The max number is: ${Math.max(...values)}`);