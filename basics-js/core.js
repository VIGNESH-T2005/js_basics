//array 
const fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]);
const vegetable = [ 'tomato','potato','carrot'];
console.log(vegetable[0]);
//object
const person = {
    name: "Alice",
    age: 30,        
    city: "New York"
};
console.log(person);
console.log(person.age);
console.log(person.city);




// array operators
let arrr1 = [1, 2, 3];
let arrr2 = [4, 5, 6];
console.log(arrr1.concat(arrr2)); // Output: [1, 2, 3, 4, 5, 6]
console.log(arrr1.length); // Output: 3  
console.log(arrr1.push(4)); // Output: 4 (new length of the array)
console.log(arrr1); // Output: [1, 2, 3, 4]
console.log(arrr1.pop()); // Output: 4 (removed element)
console.log(arrr1); // Output: [1, 2, 3]
console.log(arrr1.includes(2)); // Output: true
console.log(arrr1.indexOf(3)); // Output: 2


//  object operators
let obj1 = { name: "Alice", age: 25 };
let obj2 = { city: "New York", country: "USA" };
let mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // Output: { name: "Alice", age: 25, city: "New York", country: "USA" }
console.log(obj1.name); // Output: Alice
console.log(obj1["age"]); // Output: 25
obj1.name = "Bob";
console.log(obj1.name); // Output: Bob
delete obj1.age;
console.log(obj1); // Output: { name: "Bob" }  


//  string operators
let str1 = "Hello, ";
let str2 = "world!";
console.log(str1 + str2); // Output: Hello, world!
console.log(str1.length); // Output: 7
console.log(str1.toUpperCase()); // Output: HELLO, 
console.log(str1.toLowerCase()); // Output: hello, 
console.log(str1.includes("lo")); // Output: true
console.log(str1.indexOf("o")); // Output: 4    


//  template literals
let name1 = "Alice";
let age1 = 25;
console.log(`My name is ${name1} and I am ${age1} years old.`); // Output: My name is Alice and I am 25 years old.

//  destructuring assignment
let [x1, y1] = [10, 20];
console.log(x1); // Output: 10
console.log(y1); // Output: 20
let { name: personName, age: personAge } = { name: "Bob", age: 30 };
console.log(personName); // Output: Bob
console.log(personAge); // Output: 30   

//  spread operator
let arr3 = [1, 2, 3];
let arr4 = [...arr3, 4, 5];
console.log(arr4); // Output: [1, 2, 3, 4, 5]
let obj3 = { name: "Alice", age: 25 };
let obj4 = { ...obj3, city: "New York" };
console.log(obj4); // Output: { name: "Alice", age: 25, city: "New York" }  


// merging arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArr = [...arr1, ...arr2];
console.log(mergedArr); 


// merging objects
const obje1 = { name: "Alice", age: 30 };
const obje2 = { city: "New York", country: "USA" };
const mergedObjq = { ...obje1, ...obje2 };
console.log(mergedObjq);


//  rest operator
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // Output: 15

//  arrow functions
const add = (a, b) => a + b;
console.log(add(5, 3)); // Output: 8    
