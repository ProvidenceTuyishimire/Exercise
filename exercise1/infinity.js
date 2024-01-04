// Exercise 1: Write your own div function that will take two call arguments and return the result of dividing the first argument by the 
// second. In JavaScript, the result of dividing by zero is the value Infinity (or -Infinity, if we try to divide a negative number). 
// Change this. If you pass 0 as the second argument, your function should throw a RangeError exception with the appropriate message. 
// Prepare a test call of the function for both valid division and division by zero.
function customDivide(dividend, divisor) {
    if (divisor === 0) {
        throw new RangeError("Division by zero is not allowed.");
    }

    return dividend / divisor;
}

try {
    const resultValid = customDivide(10, 2);
    console.log("Result of valid division:", resultValid);
} catch (error) {
    console.error("Error in valid division:", error.message);
}

try {
    const resultInvalid = customDivide(5, 0);
    console.log("Result of invalid division:", resultInvalid);
} catch (error) {
    console.error("Error in invalid division:", error.message);
}
