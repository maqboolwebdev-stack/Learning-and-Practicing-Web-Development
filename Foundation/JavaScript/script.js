
console.log('Hello, World!');
console.log('My name is Waqas Maqbool');

let firstName = 'Waqas';
let lastName = 'Maqbool';

console.log(firstName);
console.log(lastName);

let age = 21;
console.log(age);

age = 42;
console.log(age);

const pi = 3.14;
// pi = 10;

console.log(pi);

console.log((3 + 2) - 76 * (1 + 1));

console.log(23 + 97)

console.log((4 + 6 + 9) / 77);

let a = 10;
console.log(a);

a = 11;
console.log(a);

let b = 7 * a;
console.log(b);

const max = 57;
const actual = max - 13;
const percentage = actual / max;

console.log(percentage)

const myInteger = 6;
const myFloat = 5.525;

console.log(typeof myFloat);
console.log(typeof myInteger);

const lotsOfDecimal = 23.325346;

const twoDecimalPlaces = lotsOfDecimal.toFixed(2)
console.log(lotsOfDecimal)
console.log(twoDecimalPlaces)

let myNumber = '73';
// myNumber += 3;   // 733, because myNumber is string and string+3 = 733;
// Number() function convert string to number
myNumber = Number(myNumber) + 3;
console.log(myNumber);

console.log(Number(myNumber));

let num1 = 4;
num1++;
console.log(num1);
let num2 = 5;
num2--;
console.log(num2);

console.log(5 === 3 + 3);
console.log(5 !== 43);
console.log(5 == '5');
console.log(35 < 9);
console.log(5 > 3 + 3);
console.log(32 >= 33);
console.log(44 <= 45);

let x = 59;
x = -x;
console.log(x);

console.log(33 % 4);
console.log(343 % 4);
console.log(13 % 2);

console.log(3 ** 3);
console.log(4 ** 4);
console.log(5 ** 5);
console.log(6 ** 6);

let o = 1, l = 1;

let e = ++o; 
let p = l++; 

console.log(e);
console.log(p);

let user = Number(prompt('enter first number', 1));
let user2 = Number(prompt('enter first number', 14));

console.log(user + user2);