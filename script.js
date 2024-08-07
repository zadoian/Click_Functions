let array = [1, 2, 3, 4, 5, 10, 20, 30, 40, 50];

function isSumGreaterThan100(params) {
    let sum = 0;
    for (let i = 0; i < params.length; i++) {
        sum += params[i];
    }
    document.getElementById("result").innerText = sum > 100;
}

function findMaxNumber(params) {
    let max = params[0];
    for (let i = 1; i < params.length; i++) {
        if (params[i] > max) {
            max = params[i];
        }
    }
    document.getElementById("result").innerText = "Maximum number in array: " + max;
}

function findMinNumber(params) {
    let min = params[0];
    for (let i = 1; i < params.length; i++) {
        if (params[i] < min) {
            min = params[i];
        }
    }
    document.getElementById("result").innerText = "Minimum number in array: " + min;
}

function printArrayReverse(params) {
    let reversedArray = [];
    for (let i = params.length - 1; i >= 0; i--) {
        reversedArray.push(params[i]);
    }
    document.getElementById("result").innerText = "Array in reverse order: " + reversedArray.join(", ");
}

function printEvenNumbers(params) {
    let evenNumbers = [];
    for (let i = 0; i < params.length; i++) {
        if (params[i] % 2 === 0) {
            evenNumbers.push(params[i]);
        }
    }
    document.getElementById("result").innerText = "Even numbers in array: " + evenNumbers.join(", ");
}

function printSumOfArray(params) {
    let sum = 0;
    for (let i = 0; i < params.length; i++) {
        sum += params[i];
    }
    document.getElementById("result").innerText = "Sum of the array: " + sum;
}

function fizzBuzz() {
    let result = [];
    for (let i = 0; i <= 100; i++) {
        if (i % 15 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i);
        }
    }
    document.getElementById("result").innerText = result.join(", ");
}
