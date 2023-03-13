// 1. Declare a variable called myName and assign your name to it. Then, use console.log() to print your name to the console.
let myName = 'Marc';
console.log(myName);
// 2. Declare two variables called num1 and num2, and assign them each a number. Then, use console.log() to print the sum of those two numbers.
let num1 = 5;
let num2 = 3;
console.log(num1 + num2);
// 3. Declare a variable called myArray and assign it an array of at least three items (e.g. strings or numbers). Then, use console.log() to print the first item in the array.
let myArray = ['seven', 8, 'string'];
console.log(myArray[0])
// 4. Declare a function called multiply that takes two parameters (a and b) and returns the product of those two numbers.
const multiply = (a, b) => {
    return a * b;
}
//or
const multiply2 = (a, b) => a * b;

function multiply3 (a, b) {
    return a * b;
}
// 5. Declare a function called reverseString that takes a string as a parameter and returns the reverse of that string.
const reverseString = (str) => {
    return str.split("").reverse().join("");
}

const reverseString2 = (str) => str.split("").reverse().join("");

function reverseString3(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString3('I would like to see a racecar'));
// 6. Declare a variable called myObject and assign it an object with at least two properties (e.g. name and age). Then, use console.log() to print the value of one of the properties.
let myObject = {
    name: 'Marc',
    age: 26
};

console.log(myObject.name);

// 7. Declare a function called findMax that takes an array of numbers as a parameter and returns the largest number in the array.
arrayOfNumbers = [1,2,3,4,5,6,7,8,9,10];

function findMax(array){
    return Math.max(...array);
}

console.log(findMax(arrayOfNumbers));
// 8. Declare a function called isEven that takes a number as a parameter and returns true if the number is even and false if the number is odd.
const isEven = (num) => num % 2 === 0;


const isEven2 = (num) => {
    return num % 2 === 0;
}

const isEven3 = (num) => {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}



// 9. Declare a function called sumArray that takes an array of numbers as a parameter and returns the sum of all the numbers in the array.
function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

console.log(sumArray(arrayOfNumbers))

function sumArray2(array){
    let total = 0;
    array.forEach(num => {
        total += num;
    });
    return total;
}

console.log(sumArray2(arrayOfNumbers));

// 10. Declare a function called filterArray that takes an array of numbers as a parameter and returns a new array containing only the even numbers from the original array.

const filterArray = (array) => {
    return array.filter(num => {
        return num % 2 === 0;
    });
};

console.log(filterArray(arrayOfNumbers));

const filterArray2 = (array) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0){
            result.push(array[i]);
        }
    }
    return result;
};
console.log(filterArray2(arrayOfNumbers))

const filterArray3 = (array) => {
    let result = []
    array.forEach(num => {
        if (num % 2 === 0) {
            result.push(num);
        }
    })
    return result
}

console.log(filterArray3(arrayOfNumbers))

