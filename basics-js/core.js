//array 
const fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]);
const vegetable = [ 'tomato',]

//object
const person = {
    name: "Alice",
    age: 30,        
    city: "New York"
};
console.log(person.name);
console.log(person.age);
console.log(person.city);


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