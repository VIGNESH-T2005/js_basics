// filters in array
//this method creates a new array with all elements that pass condition provided in the function

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); 

const words = ["apple", "banana", "cherry", "date"];
const longWords = words.filter((word) => word.length > 5);
console.log(longWords); 

const people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 20 },
    { name: "Charlie", age: 25 }
];
const adults = people.filter((person) => person.age >= 21);
console.log(adults); 