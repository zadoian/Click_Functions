let array = [1, 2, 3, 4, 5, 10, 20, 30, 40, 50];

function isSumGreaterThan100(params) {
    let sum = 0;
    for (let i = 0; i < params.length; i++) {
        sum += params[i];
    }
    console.log(sum > 100);
}

function findMaxNumber(params) {
    let max = params[0];
    for (let i = 1; i < params.length; i++) {
        if (params[i] > max) {
            max = params[i];
        }
    }
    console.log("Maximum number in array:", max);
}

function findMinNumber(params) {
    let min = params[0];
    for (let i = 1; i < params.length; i++) {
        if (params[i] < min) {
            min = params[i];
        }
    }
    console.log("Minimum number in array:", min);
}

function printArrayReverse(params) {
    let reversedArray = [];
    for (let i = params.length - 1; i >= 0; i--) {
        reversedArray.push(params[i]);
    }
    console.log("Array in reverse order:", reversedArray);
}

function printEvenNumbers(params) {
    let evenNumbers = [];
    for (let i = 0; i < params.length; i++) {
        if (params[i] % 2 === 0) {
            evenNumbers.push(params[i]);
        }
    }
    console.log("Even numbers in array:", evenNumbers);
}

function printSumOfArray(params) {
    let sum = 0;
    for (let i = 0; i < params.length; i++) {
        sum += params[i];
    }
    console.log("Sum of the array:", sum);
}

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 15 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
