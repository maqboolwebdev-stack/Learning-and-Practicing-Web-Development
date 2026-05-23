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

