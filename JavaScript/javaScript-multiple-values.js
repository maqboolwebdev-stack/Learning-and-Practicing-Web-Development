// let's learn about Array's

let arr1 = new Array('purple', 'green', 'yellow');
let arr2 = ['black', 'white', 'pink'];

let arr3 = new Array(10);
let arr4 = [10];

console.log(arr3);
console.log(arr4);

const arr = ['Hi there!', 5, true];
arr[0] = 'New value';

console.log(typeof arr[0]);
console.log(typeof arr[1]);
console.log(typeof arr[2]);

console.log(arr[0]);
// arr = ['is it valid?']

arr2[3] = ['guava'];
arr2[-1] = ['caret'];

console.log(arr2[3]);
console.log(arr2[-1]);

let animals = ['dog', 'cat', 'cow', 'loin'];
let cars = ['ferrari', 'mercedes'];
let emptyArray = [];

console.log('length of animals:',animals.length);
console.log('length of cars:',cars.length);
console.log('length of emptyArray:',emptyArray.length);

// Exercise 3.1

let shoppingList = ['Milk', 'Bread', 'Apples'];

console.log(shoppingList.length);

shoppingList[1] = 'Banana';

console.log(shoppingList);