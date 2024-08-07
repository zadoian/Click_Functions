let array = [1, 2, 3, 4, 5, 10, 20, 30, 40, 50];

function isSumGreaterThan100(params) {
    let sum = 0;
    for (let i = 0; i < params.length; i++) {
        sum += params[i];
    }
    const result = sum > 100;
    document.getElementById("result").innerText = result;
    console.log(result);
}

function findMaxNumber(params) {
    let max = params[0];
    for (let i = 1; i < params.length; i++) {
        if (params[i] > max) {
            max = params[i];
        }
    }
    const result = "Maximum number in array: " + max;
    document.getElementById("result").innerText = result;
    console.log(result);
}

function findMinNumber(params) {
    let min = params[0];
    for (let i = 1; i < params.length; i++) {
        if (params[i] < min) {
            min = params[i];
        }
    }
    const result = "Minimum number in array: " + min;
    document.getElementById("result").innerText = result;
    console.log(result);
}

function printArrayReverse(params) {
    let reversedArray = [];
    for (let i = params.length - 1; i >= 0; i--) {
        reversedArray.push(params[i]);
    }
    const result = "Array in reverse order: " + reversedArray.join(", ");
    document.getElementById("result").innerText = result;
    console.log(result);
}

function printEvenNumbers(params) {
    let evenNumbers = [];
    for (let i = 0; i < params.length; i++) {
        if (params[i] % 2 === 0) {
            evenNumbers.push(params[i]);
        }
    }
    const result = "Even numbers in array: " + evenNumbers.join(", ");
    document.getElementById("result").innerText = result;
    console.log(result);
}

function printSumOfArray(params) {
    let sum = 0;
    for (let i = 0; i < params.length; i++) {
        sum += params[i];
    }
    const result = "Sum of the array: " + sum;
    document.getElementById("result").innerText = result;
    console.log(result);
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
    const resultString = result.join(", ");
    document.getElementById("result").innerText = resultString;
    console.log(resultString);
}

function showFunctionCode(funcName, func) {
    const funcCode = func.toString();
    const result = `${funcName}:\n${funcCode}`;
    document.getElementById("functionCode").innerText = result;
    console.log(result);
}
