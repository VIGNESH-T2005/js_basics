// basics of java script
// 1. variables
var name = "John";
let age = 30;
const pi = 3.14;
// 2. data types
let isStudent = true;
let score = null;
let hobbies = ["reading", "sports"];
let person = { name: "Alice", age: 25 };    
// 3. functions
function greet(name) {
    return "Hello, " + name + "!";
}       
// 4. control structures
if (age > 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}
for (let i = 0; i < hobbies.length; i++) {
    console.log(hobbies[i]);
}   
// 5. objects and arrays
let car = {
    make: "Toyota",     
    model: "Camry",
    year: 2020
};
let numbers = [1, 2, 3, 4, 5];
// 6. DOM manipulation
document.getElementById("myButton").addEventListener("click", function() {
    alert("Button clicked!");
});
// 7. events
window.addEventListener("load", function() {
    console.log("Page loaded!");
});
// 8. error handling 
try {    let result = 10 / 0;
    console.log(result);
}catch (error) {
    console.error("An error occurred: " + error.message);
}
