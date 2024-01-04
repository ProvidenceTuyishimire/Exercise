let numbers = [10, 40, 0, 20, 50];

function customDivide(dividend, divisor) {
    if (divisor === 0) {
        throw new RangeError("Division by zero is not allowed.");
    }

    return dividend / divisor;
}

for (let i = 0; i < numbers.length; i++) {
    try {
        const result = customDivide(1000, numbers[i]);
        console.log(`1000 / ${numbers[i]} = ${result}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}
// Exercise 2: The following array of numbers has been declared,let numbers = [10, 40, 0, 20, 50]; Write a program that, in a loop, divides
// the number 1000 by successive elements of the numbers array, displaying the result of each division. To divide the numbers, use the func
// tion from the previous task. Use the try...catch construction to handle an exception thrown in the case of division by zero. If such an 
// exception is caught, the program should print an appropriate message (taken from the exception) and continue its operation (division by 
// successive elements of the array).