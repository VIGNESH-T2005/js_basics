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
let a = 10;
a += 5; // a = a + 5
console.log(a); // Output: 15
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
