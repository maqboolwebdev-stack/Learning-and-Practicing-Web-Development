let rain = true;
if (rain) {
    console.log('** Taking my Umbrella when I need to go outside**');
} else {
    console.log('** I can leave my Umbrella at home **');
}

let age = 10;

if (age < 18) {
    console.log(`we're very sorry, but you can't get in under 18`);
} else {
    console.log('Welcome');
}

let hobby = 'dancing';

if (hobby == 'coding') {
    console.log('** I love coding too! **');
} else {
    console.log('** can you teach me that? **');
}

// Practice Exercise 4.1

let myVariable = true;

if (myVariable) {
    console.log('Nice condition is True');
} else {
    console.log('what happening?');
}

// if else, else if

let Age = 30;
let cost = 0;
let message;

if (Age < 3) {
    cost = 0;
    message = 'Access is free under three.';
} else if (Age >= 3 && Age < 12) {
    cost = 5;
    message = 'With the child discount, the fee is 5 dollars.';
} else if (Age >= 12 && Age < 65) {
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

switch (activity) {
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

let randomNumber = Math.random() * 5;
randomNumber = Math.floor(randomNumber)

let userInput = prompt('Enter a value between 0 to 5');

if(userInput < 0 || userInput > 5) {
    alert('value must be less then 5 and greater then or equal to 0')
};

let result;

switch (randomNumber) {
    case 0:
        result = `you enter ${userInput} and random value is ${randomNumber}`;
        break;
    case 1:
        result = `you enter ${userInput} and random value is ${randomNumber}`;
        break;
    case 2:
        result = `you enter ${userInput} and random value is ${randomNumber}`;
        break;
    case 3:
        result = `you enter ${userInput} and random value is ${randomNumber}`;
        break;
    case 4:
        result = `you enter ${userInput} and random value is ${randomNumber}`;
        break;
    case 5:
        result = `you enter ${userInput} and random value is ${randomNumber}`;
        break;
    default:
        result = 'No match found';
}


console.log(randomNumber);
console.log(result);

// Practice exercise 4.4

let price = Number(prompt('Enter a number between 0 and 10'));

let mySelection;

switch(price) {
    case 0:
    case 1:
        mySelection = `for ${price} price is cycle`;
    case 2:
    case 3:
        mySelection = `for ${price} price is motorcycle`;
    case 4:
        mySelection = `for ${price} price is bike`;
    case 5:
    case 6:
        mySelection = `for ${price} price is car`;
    case 7:
    case 8:
        mySelection = `for ${price} price is car with $1000`;
    case 9:
    case 10:
        mySelection = `for ${price} price is 2 cars with $5000`;
}

console.log(mySelection);

let putNumber = prompt('Enter a number and check either greater then or equal');
let checkResult;

if(putNumber <= 0) {
    checkResult = `your number ${putNumber} is less then 0 or 0`;
} else if(putNumber < 10) {
    checkResult = `your number ${putNumber} is greater then 0 and less then 10`;
} else if(putNumber < 20) {
    checkResult = `your number ${putNumber} is greater then 10 and less then 20`;
} else {
    checkResult = `your number ${putNumber} is to big please try small`;
}

console.log(checkResult);

let friend = prompt('Enter your friend name');

let checkedFriend;

switch(friend) {
    case 'Asad':
        checkedFriend = `yes confirm ${friend} is your friend`;
        break;
    case 'Maria':
        checkedFriend = `yes confirm ${friend} is your friend`;
        break;
    case 'Aslam':
        checkedFriend = `yes confirm ${friend} is your friend`;
        break;
    case 'Jaan':
        checkedFriend = `yes confirm ${friend} is your friend`;
        break;
    default:
        checkedFriend = `This ${friend} is not your friend`;
}

console.log(checkedFriend);