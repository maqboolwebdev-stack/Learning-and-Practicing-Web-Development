// Q1 Print all numbers divisible by 3 and 5 up to N

let num1 = 30;

for(let i = 1; i <= num1; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
};