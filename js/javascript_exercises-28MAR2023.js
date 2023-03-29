// Create an object literal that represents a person, with properties such as name, age, and address. Print out the person's name and age.
let person = {
    name: "Jimmy",
    age: "30",
    address: "1800 sunnside Dr, Sunnyside, OK"
}
// document.write(`${person.name} is ${person.age}, and lives at ${person.address} </br>`)

// Write a function that takes an object as an argument and returns an array of all the property names in the object.
const objectToArray = (object) => Object.keys(object);

// document.write(`${objectToArray(person)} <br>`)
console.log(objectToArray(person))
// Write a function that takes an object and a string as arguments, and returns true if the object has a property with the specified string as its name, and false otherwise.
const hasProperty = (object, string) => string in object;

console.log(hasProperty(person, "name"))
// Write a function that takes an object and returns an array of all the values in the object.
const objectArrayValues = (object) => Object.values(object);
// Create an object constructor for a book, with properties such as title, author, and publication date.
// constructor
const newBook = (title, author, publication) => ({title, author, publication});
let addBook = newBook("The Great Gatsby", "Gabriel Iglesias", 2024)
console.log(addBook)
// Create several instances of the object and store them in an array.
const peopleObjArray = [
    {name: "JohnnyBoy", age: 25, address: "123 Main St" },
    { name: "Bob", age: 30, address: "456 Maple Ave" },
    { name: "Charlie", age: 35, address: "789 Oak St" }
]
// Write a function that takes an array of objects and a string as arguments, and returns an array of all the objects that have a property with the specified string as its name.
const matchingProperty = (arrayOfObjects, string) => {
    return arrayOfObjects.filter(obj => obj.hasOwnProperty(string));
}
// Write a function that takes an array of objects and a property name as arguments, and returns an array of all the unique values for that property across all the objects.
const uniqueValuesOfObjects = (arrayOfObjects, propertyName) => {
    let values = arrayOfObjects.filter(obj => obj.hasOwnProperty(propertyName)).map(obj => obj[propertyName]);
    return [...new Set(values)];
}
console.log(uniqueValuesOfObjects(peopleObjArray, "age"))
// Write a function that takes an object as an argument and returns a new object with all the property names and values reversed.
const reverseProperties = (object) => {
    let reversed = {};
    for (let key in object){
        reversed[object[key]]=key;
    }
    return reversed
}
console.log(reverseProperties(person))
// Write a function that takes two objects as arguments and returns a new object that combines the properties of both objects.
const combineObjects = (objectOne, objectTwo) => {
    return [objectOne, objectTwo].reduce((acc, cur) => {
        return {...acc, ...cur}
    }, {});
}
// Write a function that takes an object as an argument and returns a new object with all the properties that have a string value converted to uppercase.
const uppercasePropertiesWithStrings = (object) => {
    const newObj = {};
    for (let key in object) {
        if (typeof object[key] === "string") {
            newObj[key] = object[key].toUpperCase();
        } else {
            newObj[key] = object[key];
        }
    }
    return newObj;
};