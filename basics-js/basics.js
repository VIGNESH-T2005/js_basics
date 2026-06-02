// basics of java script

// 1. variables
// VAR (function-scoped) var can be redeclared and updated    
var name = "vicky";
var name = "hari";
console.log(name); // Output hari
// let (block-scoped) let can be updated but not redeclared   
let age = 20;
//let age = 22; cannot redeclare
age=23;
console.log(age); // Output 23
// const (block-scoped) const cannot be updated or redeclared
const pi = 3.14;
// pi=43; not updateable
// const pi = 4; not redeclare
console.log(pi); // output 3.14



// 2. data types
let num=5;                                 //number
let isStudent = true;                      //boolean 
let score = null;                          //null   
let hobbies = ["reading", "sports"];       //array
let person = { name: "Alice", age: 25 };   //object  
console.log(typeof num , typeof isStudent,typeof score,typeof hobbies , typeof person);


//3. operators

// Arithmetic operators +, -, *, /, %,**
let x = 10;
let y = 5;
console.log(x + y); // Output: 15
console.log(x - y); // Output: 5
console.log(x * y); // Output: 50
console.log(x / y); // Output: 2
console.log(x % y); // Output: 0
console.log(x ** y); // Output: 100000

//assignment operators =, +=, -=, *=, /=, %=
let ae= 10;
ae+= 5; // a = a + 5
console.log(ae); // Output: 15

// comparison operators ==, ===, !=, !==, >, <, >=, <=
console.log(x == y); // Output: false
console.log(y === y);   // Output: true
console.log(x != y); // Output: true
console.log(x !== y);   // Output: true

// logical operators &&, ||, !
let isAdult = age >0;
let hasID = true;
console.log(isAdult && hasID); // Output: true
console.log(isAdult || hasID);  // Output: true
console.log(!isAdult); // Output: false

// ternary operator condition ? exprIfTrue : exprIfFalse
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // Output: Yes

// bitwise operators &, |, ^, ~, <<, >>, >>>
let p = 5; // 0101 in binary
let q = 3; // 0011 in binary
console.log(p & q); // Output: 1 (0001 in binary)
console.log(p | q); // Output: 7 (0111 in binary)       
console.log(p ^ q); // Output: 6 (0110 in binary)
console.log(~p); // Output: -6 (inverts bits of 5, which is 0101 in binary, resulting in 1010 in binary, which is -6 in two's complement)
console.log(p << 1); // Output: 10 (shifts bits of 5 to the left by 1, resulting in 1010 in binary, which is 10 in decimal)
console.log(p >> 1); // Output: 2 (shifts bits of 5 to the right by 1, resulting in 0010 in binary, which is 2 in decimal)
console.log(p >>> 1); // Output: 2 (shifts bits of 5 to the right by 1, filling with zeros, resulting in 0010 in binary, which is 2 in decimal) 



 

// 4. type coercion
console.log(5 + "5");   // Output: "55" (number 5 is coerced to a string)
console.log("5" - 2); // Output: 3 (string "5" is coerced to a number)
console.log("5" * 2);   // Output: 10 (string "5" is coerced to a number)
console.log("5" / 2); // Output: 2.5 (string "5" is coerced to a number)
console.log(true + 1); // Output: 2 (true is coerced to 1)
console.log(false + 1); // Output: 1 (false is coerced to 0)

// 5. type conversion
let numStr = "123";
let numValue = Number(numStr);
console.log(numValue); // Output: 123
let boolValue = Boolean(numValue);
console.log(boolValue); // Output: true
let strValue = String(numValue);
console.log(strValue); // Output: "123" 


// 11.control structures
if (age > 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

//loops

// for loop
for (let i = 0; i < hobbies.length; i++) {
    console.log(hobbies[i]);
}   
// for...of loop
for (let hobby of hobbies) {
    console.log(hobby);
}
// while loop
let count = 0;
while (count < hobbies.length) {
    console.log(hobbies[count]);
    count++;
}
// do...while loop
let count2 = 0; 
do {
    console.log(hobbies[count2]);
    count2++;
} while (count2 < hobbies.length);
// for...in loop (for objects)
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
// break and continue
for (let i = 0; i < 10; i++) {
    if (i === 5) {  
        break; // Exit the loop when i is 5
    }
    if (i === 3) {
        continue; // Skip the rest of the loop body when i is 3
    }
    console.log(i);
}


//switch statement
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("It's Monday.");
        break;
    case "Tuesday":
        console.log("It's Tuesday.");
        break;
    default:
        console.log("It's another day.");
}
