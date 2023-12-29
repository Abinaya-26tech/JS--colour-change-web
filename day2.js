// Assignment 1
function checkNumber(num) {
    if (num > 0) {
        console.log("Positive");
    } else if (num < 0) {
        console.log("Negative");
    } else {
        console.log("Zero");
    }
}

// Assignment 2
function calculateFactorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    console.log("Factorial:", result);
}

// Assignment 3
function findLargerNumber(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

// Assignment 4
function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversedStr = cleanStr.split("").reverse().join("");
    console.log("Is Palindrome:", cleanStr === reversedStr);
}

// Assignment 5
function printPrimesUpTo(num) {
    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

// Assignment 6
function simpleCalculator(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return "Invalid operator";
    }
}

// Assignment 7
function countVowels(str) {
    const vowels = str.match(/[aeiou]/gi);
    console.log("Number of vowels:", vowels ? vowels.length : 0);
}

// Assignment 8
function isPerfectNumber(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    console.log("Is Perfect Number:", sum === num);
}

// Assignment 9
function printFibonacciSeries(upTo) {
    let a = 0, b = 1;
    while (a <= upTo) {
        console.log(a);
        const temp = a;
        a = b;
        b = temp + b;
    }
}

// Assignment 10
function multiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} * ${i} = ${num * i}`);
    }
}

// Example usage
checkNumber(5);
calculateFactorial(5);
console.log("Larger Number:", findLargerNumber(8, 12));
isPalindrome("A man, a plan, a canal, Panama");
printPrimesUpTo(20);
console.log("Result:", simpleCalculator(5, 3, '*'));
countVowels("Hello World!");
isPerfectNumber(28);
printFibonacciSeries(50);
multiplicationTable(7);
