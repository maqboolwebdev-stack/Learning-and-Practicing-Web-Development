// No. 1

// let userInput = Number(prompt('Enter a random number and check, even ot odd:'))

// if(userInput % 2 == 0) {
//     console.log(`Your number ${userInput} is "Even"`);
// } else {
//     console.log(`Your number ${userInput} is "Odd"`);
// }


// No. 2

// let userInput2 = Number(prompt('Enter a number and check: Status'));

// function numberChecker(n) {
//     if(n == 0) {
//         console.log('Zero');
//     } else if(n < 0) {
//         console.log('Negative');
//     } else {
//         console.log('Positive');
//     }
//     return;
// }

// numberChecker(userInput2);


// No. 3

// let firstNumber = Number(prompt('Enter first number:'));
// let operator = prompt('Enter Operator (+,/,*,-) number:');
// let secondNumber = Number(prompt('Enter second number:'));

// function calculator(n1, n2, op) {
//     if(operator == '+') {
//         console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber};`);
//     } else if(operator == '-') {
//         console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber};`);
//     } else if(operator == '*') {
//         console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber};`);
//     } else if(operator == '/') {
//         console.log(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber};`);
//     } else {
//         console.log('Invalid operator');
//     }
//     return;
// }

// calculator(firstNumber, secondNumber, operator);

// No.4

// let firstInputNumber = Number(prompt('Enter first number'));
// let secondInputNumber = Number(prompt('Enter second number'));
// let thirdInputNumber = Number(prompt('Enter third number'));

// function checkLargestNumber(n1, n2, n3) {
//     if(firstInputNumber > secondInputNumber && firstInputNumber > thirdInputNumber) {
//         console.log(`${firstInputNumber} is Largest`);
//     } else if(secondInputNumber > thirdInputNumber) {
//         console.log(`${secondInputNumber} is Largest`);
// } else {
//         console.log(`${thirdInputNumber} is Largest`);
// }
//     return;
// }

// checkLargestNumber(firstInputNumber, secondInputNumber, thirdInputNumber);

// No.5

// let studentMarks = Number(prompt('Enter your marks'));

// function gradeCalculator(marks) {
//     if(marks >= 90 && marks <= 100){
//         console.log(`Your Grade is A based on your ${studentMarks } Marks`);
//     } else if(marks >= 80 && marks <= 90){
//         console.log(`Your Grade is B based on your ${studentMarks } Marks`);
//     } else if(marks >= 70 && marks <= 80){
//         console.log(`Your Grade is C based on your ${studentMarks } Marks`);
//     } else if(marks >= 60 && marks <= 70){
//         console.log(`Your Grade is D based on your ${studentMarks } Marks`);
//     } else if(marks < 60){
//         console.log(`Your Grade is F based on your ${studentMarks } Marks`);
//     } else {
//         console.log('This is not a Marks Please Enter valid Marks');
//     }
//     return;
// }

// gradeCalculator(studentMarks);

// No. 6

// let string = prompt('Enter a in lowercase and get Capitalize');

// function capitalize(e) {
//     return e.charAt(0).toUpperCase() + e.slice(1).toLowerCase();
// }

// console.log(capitalize(string));

// No. 7

// let password = prompt('Create your Password');

// function passwordStrengthChecker() {
//     if(password.length <= 6) {
//         console.log('Weak');
//     }else if(password.length <= 8){
//         console.log('Good');
//     } else {
//         console.log('Strong');
//     }
//     return;
// }

// passwordStrengthChecker(password);

// No. 8

// let personAge = Number(prompt('Enter your age:'));

// if(personAge >= 18 && personAge <= 100) {
//     console.log('Can Vote');
// } else if(personAge > 101) {
//     console.log('Please, put Real age');
// } else {
//     console.log('No, too young');
// }


// No. 9

let numbers = [1, 3, 44, 23, 65, 54, 9, 90];

function largeNumber(arr) {
  let largest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}

console.log(largeNumber(numbers));

// No 10

let array = [3, 63, 3, 88, 33, 1, 9, 36, 4];
function sumOfTripledEvens(array) {
  return array
  .filter((num) => num % 2 === 0)
  .map((num) => num * 3)
  .reduce((acc, curr) => acc + curr);

}

console.log(sumOfTripledEvens(array));

// No. 11

function camelize(str) {
  return str
  .split('-')
  .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
  .join('')
}

console.log(camelize('the-man-of-sand'));

// No. 12

function filterRange(arr, a, b) {
  return arr.filter(item => (a <= item && item <= b));
}

let arr = [5, 3, 8, 13, 9, 20, 1];

let filtered = filterRange(arr, 1, 10);
console.log(filtered);
console.log(arr);

// No. 13

function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }

}

let arr2= [5, 3, 8, 1];

filterRangeInPlace(arr2, 1, 4); 

console.log(arr2);

// No .14

let num = [5, 2, 1, -10, 8];

num.sort((a, b) => b - a);

console.log(num);

// No. 15

function copySorted(arr) {
  return arr.slice().sort();
}

let lang = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(lang);

console.log(sorted);
console.log(lang);

// No. 16
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }
}

let shuffleArray = [1, 2, 3];

shuffle(shuffleArray);

console.log(shuffleArray);
