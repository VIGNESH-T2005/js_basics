// maps in arrays
// this method operates on each element of the array and returns a new array 
const arr1 = [1, 2, 3];
const mappedArr = arr1.map((num) => num + 2);
console.log(mappedArr);

const arr2= ["apple", "banana", "cherry"];
const mappedArr2 = arr2.map((fruit) => fruit.toUpperCase());
console.log(mappedArr2);

const arr3 = [1, 2, 3];
const mappedArr3 = arr3.map((num, index) => num + index);
console.log(mappedArr3);