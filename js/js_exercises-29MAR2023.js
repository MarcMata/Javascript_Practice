const numbers = [1, 2, 3, 4, 5];
const words = ["apple", "banana", "cherry", "date", "eggplant"];
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "Dave", age: 40 },
    { name: "Emily", age: 45 }
];

const myObject = {name: 'John', age: 30, city: 'New York'};

// map exercises:
// Write a function that takes an array of numbers and returns a new array with each number multiplied by 2.
const multiplyByTwo = (arrayOfNumbers) => arrayOfNumbers.map(number => number * 2);
console.log(multiplyByTwo(numbers))
// Write a function that takes an array of strings and returns a new array with each string capitalized.
const uppercaseArray = (arrayOfStrings) => arrayOfStrings.map(string => string.toUpperCase());
console.log(uppercaseArray(words))
// Write a function that takes an array of objects and returns a new array with only the values of a specific property of each object.
const valueOfProperty = (arrayOfObjects, property) => arrayOfObjects.map(obj => obj[property]);
// filter exercises:
// Write a function that takes an array of numbers and returns a new array with only the even numbers.
const evenNumbers = (arrayOfNumbers) => arrayOfNumbers.filter(number => number % 2 === 0)
// console.log(evenNumbers(numbers))
// Write a function that takes an array of strings and returns a new array with only the strings that have more than 5 characters.
const moreThanFive = (arrayOfStrings) => arrayOfStrings.filter(string => string.length >= 5)
// console.log(moreThanFive(words))
// Write a function that takes an array of objects and returns a new array with only the objects that have a specific property.
const specificProperty = (arrayOfObjects, property) => arrayOfObjects.filter(objects => objects[property])
// console.log(specificProperty(people, "name"))
//
// reduce exercises:
// Write a function that takes an array of numbers and returns the sum of all the numbers.
const sumOfAllNumbers = (arrayOfNumbers) => arrayOfNumbers.reduce((acc, number) => acc + number)
// console.log(sumOfAllNumbers(numbers))
// Write a function that takes an array of strings and returns a new string with all the strings concatenated together.
const concatStrings = (arrayOfStrings) => arrayOfStrings.reduce((acc, string) => `${acc}, ${string}`)
// console.log(concatStrings(words))
// Write a function that takes an array of objects and returns an object that has the total count of each property across all objects.
const totalCountOfProperties = (arrayOfObjects) => {
    return arrayOfObjects.reduce((acc, obj) => {
        for (let prop in obj) {
            if (acc[prop]) {
                acc[prop]++;
            } else {
                acc[prop] = 1;
            }
        }
        return acc;
    }, {});
}
// console.log(totalCountOfProperties(people))


// Using object keys
// Create an object with several key-value pairs. Print out the keys only using a loop.
const keyValuePairs = {
    name: "Jeremy",
    address: "188 sycamore tree rd",
    houseColor: "Brown",
    fence: "has a fence"
}

for (let key in keyValuePairs) {
    // console.log(key);
}
// Create an array of objects, where each object has several key-value pairs. Use .map() to create an array that contains only the keys of each object.
const keysOfEachObjects = (arrayOfObjects) => arrayOfObjects.map(obj => Object.keys(obj))
// console.log(keysOfEachObjects(people));
// Create a function that takes an object as input and returns an array of all the keys in the object. Try to implement this function using a loop and using the built-in Object.keys() method.
const arrayOfkeys = (object) => Object.keys(object)
// console.log(arrayOfkeys(myObject))
// Create an object with several key-value pairs. Use the delete keyword to remove one of the key-value pairs from the object. Print out the updated object to confirm that the key-value pair has been removed.
delete keyValuePairs.name
// console.log(keyValuePairs)
// Create an object with several key-value pairs. Use the in keyword to check if a specific key exists in the object. Return a boolean value indicating whether or not the key exists.
const specifcKeyExists = (object, key) => key in object;
// console.log(specifcKeyExists(myObject, "house"))

// Ternary Operations
// Write a function that takes a number as an argument and returns either "even" or "odd" based on whether the number is even or odd.
// Write a function that takes two numbers as arguments and returns the larger number. Use a ternary operator to determine which number is larger.
// Write a function that takes an array of numbers and returns a new array with only the even numbers from the original array.
// Write a function that takes a string as an argument and returns "long" if the string has more than 10 characters, "medium" if the string has between 5 and 10 characters, and "short" if the string has fewer than 5 characters. Use a ternary operator to determine the length of the string.
// Write a function that takes a number as an argument and returns "positive" if the number is positive, "negative" if the number is negative, and "zero" if the number is zero. Use a ternary operator to determine the sign of the number.