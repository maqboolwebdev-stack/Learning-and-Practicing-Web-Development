// No. 1

let userInput = Number(prompt('Enter a random number and check, even ot odd:'))

if(userInput % 2 == 0) {
    console.log(`Your number ${userInput} is "Even"`);
} else {
    console.log(`Your number ${userInput} is "Odd"`);
}


// No. 2

let userInput2 = Number(prompt('Enter a number and check: Status'));

function numberChecker(n) {
    if(n == 0) {
        console.log('Zero');
    } else if(n < 0) {
        console.log('Negative');
    } else {
        console.log('Positive');
    }
    return;
}

numberChecker(userInput2);


// No. 3

let firstNumber = Number(prompt('Enter first number:'));
let operator = prompt('Enter Operator (+,/,*,-) number:');
let secondNumber = Number(prompt('Enter second number:'));

function calculator(n1, n2, op) {
    if(operator == '+') {
        console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber};`);
    } else if(operator == '-') {
        console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber};`);
    } else if(operator == '*') {
        console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber};`);
    } else if(operator == '/') {
        console.log(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber};`);
    } else {
        console.log('Invalid operator');
    }
    return;
}

calculator(firstNumber, secondNumber, operator);

// No.4

let firstInputNumber = Number(prompt('Enter first number'));
let secondInputNumber = Number(prompt('Enter second number'));
let thirdInputNumber = Number(prompt('Enter third number'));

function checkLargestNumber(n1, n2, n3) {
    if(firstInputNumber > secondInputNumber && firstInputNumber > thirdInputNumber) {
        console.log(`${firstInputNumber} is Largest`);
    } else if(secondInputNumber > thirdInputNumber) {
        console.log(`${secondInputNumber} is Largest`);
} else {
        console.log(`${thirdInputNumber} is Largest`);
}
    return;
}

checkLargestNumber(firstInputNumber, secondInputNumber, thirdInputNumber);

// No.5

let studentMarks = Number(prompt('Enter your marks'));

function gradeCalculator(marks) {
    if(marks >= 90 && marks <= 100){
        console.log(`Your Grade is A based on your ${studentMarks } Marks`);
    } else if(marks >= 80 && marks <= 90){
        console.log(`Your Grade is B based on your ${studentMarks } Marks`);
    } else if(marks >= 70 && marks <= 80){
        console.log(`Your Grade is C based on your ${studentMarks } Marks`);
    } else if(marks >= 60 && marks <= 70){
        console.log(`Your Grade is D based on your ${studentMarks } Marks`);
    } else if(marks < 60){
        console.log(`Your Grade is F based on your ${studentMarks } Marks`);
    } else {
        console.log('This is not a Marks Please Enter valid Marks');
    }
    return;
}

gradeCalculator(studentMarks);

// No. 6

let string = prompt('Enter a in lowercase and get Capitalize');

function capitalize(e) {
    return e.charAt(0).toUpperCase() + e.slice(1).toLowerCase();
}

console.log(capitalize(string));

// No. 7

let password = prompt('Create your Password');

function passwordStrengthChecker() {
    if(password.length <= 6) {
        console.log('Weak');
    }else if(password.length <= 8){
        console.log('Good');
    } else {
        console.log('Strong');
    }
    return;
}

passwordStrengthChecker(password);

// No. 8

let personAge = Number(prompt('Enter your age:'));

if(personAge >= 18 && personAge <= 100) {
    console.log('Can Vote');
} else if(personAge > 101) {
    console.log('Please, put Real age');
} else {
    console.log('No, too young');
}