let rain = true;
if(rain) {
    console.log('** Taking my Umbrella when I need to go outside**');
} else {
    console.log('** I can leave my Umbrella at home **');
}

let age = 10;

if(age < 18) {
    console.log(`we're very sorry, but you can't get in under 18`);
} else {
    console.log('Welcome');
}

let hobby = 'dancing';

if(hobby == 'coding') {
    console.log('** I love coding too! **');
} else {
    console.log('** can you teach me that? **');
}

// Practice Exercise 4.1

let myVariable = true;

if(myVariable) {
    console.log('Nice condition is True');
}else {
    console.log('what happening?');
}

// if else, else if

let Age = 30;
let cost = 0;
let message;

if(Age < 3) {
    cost = 0;
    message = 'Access is free under three.';
} else if(Age >= 3 && Age < 12) {
    cost = 5;
    message = 'With the child discount, the fee is 5 dollars.';
} else if(Age >= 12 && Age < 65) {
    cost = 10;
    message = 'A regular ticket is 10 dollars.';
} else {
    cost = 7;
    message = 'A ticket is 7 dollars.';
}

console.log(message);
console.log('yours total cost:' + cost);

// Practice exercise 4.2

// let userAge = Number(prompt('Enter your age'));
// let userMessage;

// if(userAge >= 21) {
//     userMessage = 'Confirm entry to venue and ability to purchase alcohol.';
// } else if(userAge >= 19) {
//     userMessage = 'Confirm entry to venue and denied for alcohol.';
// } else {
//     userMessage = 'Not allowed.';
// }

// console.log(userMessage);


// Ternary Operator
let amount = 30;
amount >= 18 ? console.log('Allowed') : console.log('denied');

// Practice exercise 4.3

let id = true;

let checkMessage = id === true ? 'Allow' : 'Not allow';

console.log(checkMessage);

// Switch Statements

// let activity = 'Lunch';
let activity = 'Exercise';

switch(activity) {
    case 'Get up':
        console.log('It is 6:30AM');
    break;
    case 'Breakfast':
        console.log('It is a 7:00AM');
    break;
    case 'Drive to work':
        console.log('It is a 8:00AM');
    break;
    case 'Lunch':
        console.log('It is 12:00PM');
    break;
    case 'Drive home':
        console.log('It is a 5:00PM');
    break;
    case 'Diner':
        console.log('It is a 6:00PM');
    break;
    default:
    case console.log('I can not determine that time'):
    break;
}

// Practice exercise 4.4
