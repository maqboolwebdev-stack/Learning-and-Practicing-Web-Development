// Q1 Find the maximum of three numbers

// let a = 50;
// let b = 410;
// let c = 115;  // can be also

function findMaximumOfThree(a, b, c) {
    let max;
    if(a >= b && a >= c) {
        max = a;
    } else if(b >= c) {
        max = b;
    } else {
        max = c;
    }
    console.log(max);
}

findMaximumOfThree(122, 123, 23)
findMaximumOfThree(442, 12, 23)

// Q2 Check if Number is Positive, Negative, or Zero

function checkNumberStatus(a) {
    let status;
    if(a < 0) {
        status = `${a} is a Negative`;
    } else if(a === 0) {
        status = `${a} is a Zero`;
    } else {
        status = `${a} is a Positive`;
    }
    console.log(status);
};

checkNumberStatus(3);
checkNumberStatus(-3.9);
checkNumberStatus(0.1);