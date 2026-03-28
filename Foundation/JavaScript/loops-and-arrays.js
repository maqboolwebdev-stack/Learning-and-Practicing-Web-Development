function addOne(num) {
  return num + 1;
}
const arr = [1, 2, 3, 4, 5];
const mappedArr = arr.map(addOne);
console.log(mappedArr); 

// printing counting 1 to 10
for(let i = 1; i <= 10; i++) {
  console.log(i);
}

// print even numbers 1 to 20

for(let i = 1; i <= 20; i++) {
  if(i % 2 == 0){
    console.log(i);
  }
}

// print sum of 1 to 10
let sum = 0;
for(let i = 1; i <= 10; i++) {
  sum = sum + i;
}
console.log(sum);

// printing 10 to 1
for(let i = 10; i >= 1; i--) {
  console.log(i);
}

// multiplication table
let table = 5;
for(let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${table * i}`);
}

// stars pattern
for(let i = 1; i <= 5; i++) {

  let stars = "";

  for(let j = 1; j <= i; j++) {
    stars = stars + "*";
  }

  console.log(stars);
}


let numbers = [1,2,3];

numbers.forEach(function(num){
  console.log(num);
});

let number2 = [1,2,3,4];

let sum2 = number2.reduce(function(total, num){
  return total + num;
}, 0);

console.log(sum2);


const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}


function toUpper(string) {
  return string.toUpperCase();
}

const upperCats = cats.map(toUpper);

console.log(upperCats);


function largeCat(cat) {
  return cat.startsWith('L');
}

const filtered = cats.filter(largeCat);
console.log(filtered);


for(const cat of cats) {
  console.log(cat);
}

for(let i = 0; i < cats.length; i++) {
  console.log(cats[i]);
}


      //  Arrays

let array = ['Olive', 'Banana', 'Mango', 'Orange'];

console.log(array);

array[1] = 'Caret';
console.log(array);

array.push('Lemon')
console.log(array);
array.pop();
console.log(array);
array.shift();
console.log(array);
array.unshift('Coke');
console.log(array);
console.log(array.length);
console.log(array.at(-1));
array.length = 1;
console.log(array);

let myArray = ['I', 'love', 'JavaScript'];

myArray.splice(1, 1)
console.log(myArray);
myArray.splice(0, 2, "let's", 'dance');
console.log(myArray);
myArray.concat([1, 2], [2 ,3]);
console.log(myArray);
