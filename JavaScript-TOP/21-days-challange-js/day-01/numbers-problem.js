// Q1. print number to n

let number = 15;
for(let i = 1; i <= number; i++) {
    console.log(i);
};


// Q2 print n to 1 without changing the loop condition of above

for(let i = 1; i <= number; i++) {
    console.log(number - i + 1);
};


// Q3 print all Even number from 1 to n;

let number2 = 20;

for(let i = 0; i <= number2; i++) {
    if(i % 2 == 0) {
        console.log(i);
    }
}