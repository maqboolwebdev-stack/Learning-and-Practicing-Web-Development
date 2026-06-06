// WHILE LOOP

// while(condition) {
//      code that gets executed as long as the condition is true
// }

// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// };

// let someArray = ['Mike', 'Maria', 'John', 'Ali', 'Sonia'];
// let notFound = true;

// while (notFound && someArray.length > 0) {
//     if (someArray[0] === 'Ali') {
//         console.log('Found her');
//         notFound = false;
//     } else {
//         someArray.shift();
//     }
// }

// console.log(someArray); // that's left behind

// //  FibonacciArray

// let nr1 = 0;
// let nr2 = 1;
// let temp;

// const fibonacciArray = [];

// while (fibonacciArray.length < 25) {
//     fibonacciArray.push(nr1);
//     temp = nr1 + nr2;
//     nr1 = nr2;
//     nr2 = temp;
// }

// console.log(fibonacciArray);
// console.log(nr2);

// let result = 0;
// fibonacciArray.forEach( (add) => {
//     result += add;
// })
// console.log(result);

// Practice Exercise 5.1

// const maxVale = 5;
// const solution = Math.floor(Math.random() * maxVale) + 1;
// let isCorrect = false;

// if(!isCorrect) {
//     const userGuess = Number(prompt(`Guess a between 1 to ${maxVale}`))

//     if(userGuess === solution) {
//         isCorrect = true;
//         console.log('Correct you guessed the number');
//     } else if (userGuess > solution) {
//         console.log('To high! try again');
//     } else {
//         console.log('To low! try again');
//     }
// }

//  DO-WHILE LOOP

// do {
// code to be executed if condition is true 
// } while(condition)

// let number;

// do {
// number = prompt('Please enter a number between 0 to 100');
// } while(!(number >= 0 && number < 100));

// Practice Exercise 5.2

let counter = 0;
let step = 5;

do {
    counter += step;
    console.log(counter);
} while (counter <= 100);
