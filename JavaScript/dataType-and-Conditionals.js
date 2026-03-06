console.log(1 / 0);
console.log(Infinity);

console.log('not a number' * 2);
console.log(NaN + 3);
console.log(NaN / 7);
console.log(NaN / (3 + 4));

    //  Exception
console.log(NaN ** 0);



    //  BigInt

console.log(9487206137805643 + 1);
console.log(4987243186053535 + 1);

//    A BigInt value created by appending n to the end of an integer

const BigInt = 239494758573242842823535353532523523528765463n;



//        String

let greet = "Hello";
let name = 'maria';
let syHello = `${greet } ${name}`;

console.log(syHello);


//   Boolean values

const isLogIn = true; // mean, yes 
const isUserNew = false; // mean, no 

//  Boolean values comes as a result of comparisons
const isGreater = 4 < 1;
console.log(isGreater); // no, 

//  null value

let age = null;  // null represents, 'nothing', 'empty', or 'unknown'
console.log(age); 

// The meaning of undefined is , value is not assign,

let score;
console.log(score);

let runScore = 100;
console.log(runScore);
runScore = undefined;
console.log(runScore);


// String
const string = "The revolution will not be televised.";
console.log(string);
const badString = string;
console.log(badString);

const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;

console.log(single);
console.log(double);
console.log(backtick);

const player = "Chris";
const greeting = `Hello, ${player}`;
console.log(greeting); // "Hello, Chris"

const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined); // "Hello, how are you?"

const newline = `One day you finally knew
what you had to do, and began,`;
console.log(newline);

const newline2 = "One day you finally knew\nwhat you had to do, and began,";
console.log(newline2);

// const badQuotes = "She said "I think so!"";  // this will not work

const goodQuotes1 = 'She said "I think so!"';
const goodQuotes2 = `She said "I'm not going in there!"`;
console.log(goodQuotes1);
console.log(goodQuotes2);

const coolBandName = "Front ";
const number = 242;
console.log(coolBandName + number); // "Front 242"

const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum);
// number

const myNum2 = 123;
const myString2 = String(myNum2);
console.log(typeof myString2);
// string


//String Methods

let upperCase = 'i am a great guy and doing some great 100';

console.log(upperCase.length);
console.log(upperCase.toUpperCase());
console.log(upperCase.includes('100'));
console.log(upperCase.endsWith('100'));


let stringWillReplace = 'I am coding in Java';

replaceString = stringWillReplace.replace('Java', 'JavaScript');

console.log(replaceString);

const string4 = new String("A String object");
console.log(string4);


//       Logical Operator

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && true);

console.log(true != true);
console.log(true != false);
console.log(false != true);
console.log(false != false);