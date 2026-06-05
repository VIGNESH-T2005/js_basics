//reduce in arrays
// this method reduces the array to a single value by applying a function to an accumulator and each element of the array

const arr1 = [1, 2, 3, 4];
const sum = arr1.reduce((total, num) => total + num, 0);
console.log(sum); 

const arr2 = [1, 2, 3, 4];
const product = arr2.reduce((total, num) => total * num, 1);
console.log(product); 

const arr3 = ["Hello", " ", "world", "!"];
const concatenated = arr3.reduce((total, str) => total + str, "");
console.log(concatenated); 