let str = "what's your name? I think \"mike\" ";
let str2 = "maybe you are \"boxer\"";

console.log(str);
console.log(str2);

let str3 = "New \nline"
let str6 = "New \nline"

console.log(str3);

let str4 = "I'm containing backslash: \\!"
console.log(str4);


let intNr = 34342;
let bigNr = 234976978463743334348434343n;

// let result = intNr + bigNr;
// integer and bigInt cannot mix each other
// console.log(result);

console.log("These strings are same:", str3 === str6);

let sym1 = Symbol('JavaScript is fun!');
let sym2 = Symbol('JavaScript is fun!');

console.log('is these are same:?', sym1 === sym2);

let unAssigned;
console.log(unAssigned);
console.log(unAssigned === undefined);
let empty = null;
console.log(null === undefined);
console.log(empty === null);

let testVariable = 1;
let testVariableType1 = typeof testVariable;
let testVariableType2 = typeof(testVariable);

console.log(testVariableType1);
console.log(testVariableType2);

let string = 'hey';
let number = 2;
let bigInteger = 535353535353535335353535;
let boolean = true;
let unknown = null;
let undefinedType = undefined;
let sym = Symbol('unique');

console.log('string:', typeof string);
console.log('number:', typeof number);
console.log('bigInteger:', typeof bigInteger);
console.log('boolean:', typeof boolean);
console.log('unknown:', typeof unknown);
console.log('undefined:', typeof undefinedType);
console.log('sym:', typeof sym);

let nr1 = 3;
let nr2 = '3';
console.log(nr1 * nr2);
console.log(nr1 + nr2);

let strToNum = '4';
strToNum = Number(strToNum);

let numToStr = '55'
numToStr = Number(numToStr)

let toBool = 1;
toBool = Boolean(toBool);

console.log(strToNum, typeof strToNum);
console.log(numToStr, typeof numToStr);
console.log(toBool, typeof toBool);

let emptySting = '';
emptySting = Number(emptySting);

let nullValue = null;
nullValue = Number(nullValue);

console.log(nullValue, typeof nullValue);
console.log(emptySting, typeof emptySting);

let stringToNumber = 'waq';
stringToNumber = Number(stringToNumber);

console.log(stringToNumber, typeof stringToNumber);

let val = undefined;
console.log(typeof val);

let name = 'waqas'
let age = 21;
let canCode = 'I can code JavaScript';
let result = `Hi, my name is ${name} and I a ${age} years old and ${canCode}`;

console.log(result);

let a = 3;
let b = 3;
let root = a * b;
console.log(root);

let a2 = 24;
let b2 = 30;
let c2 = 3;
let add = b2 + a2;
let dived = a2 / c2;
let modulo = c2 % b2;
console.log(add, dived, modulo);

// Miles to kiloMeters
let miles = 130;
let kiloMeters = miles * 1.60934;

console.log(`The distance ${miles} miles is equal to ${kiloMeters}kms`);

// BMI Calculator
let height = 70.8;
let weight = 141.095848
height = height * 2.54;
weight = weight / 2.2046
console.log(`height: ${height}cm and weight ${weight}kg`);
height = height * 0.01;
console.log(`Your BMI: ${Math.round(weight / ( height**2))}`)