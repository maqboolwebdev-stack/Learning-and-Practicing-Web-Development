// Q1 Check if a character is Uppercase, LowerCase, Digit or Special Character

function characterChecker(char) {
    let code = char.charCodeAt(0);
    let result;
    if(code >= 48 && code <= 57) {
        result = 'Digit';
    } else if(code >= 65 && code <= 90 ) {
        result = 'UpperCase';
    } else if(code >= 97 && code <= 122 ) {
        result = 'LowerCase';
    } else {
        result = 'Special Character';
    }
    console.log(result);
};

characterChecker('a');
characterChecker('A');
characterChecker('5');
characterChecker('%');

// Q2 Check triangle type using sides and angles

function checkTriangle(a, b, c){
    let triangleResult;
    if((a * a + b * b) === c * c) {
        triangleResult = 'Right-Angled Triangle';
    } else if((a === b) && (b === c && c === a)) {
        triangleResult = 'Equilateral Triangle';
    } else if(a === b || b === c) {
        triangleResult = 'Isosceles Triangle';
    } else {
        triangleResult = 'Scalene';
    }
    console.log(triangleResult);
};

checkTriangle(3, 4, 5);
checkTriangle(3, 3, 3);
checkTriangle(5, 5, 8);
checkTriangle(2, 11, 10);

// Q3 Calculate tax based on slabs

function calculateTax(income) {
    let tax = 0;

    if (income <= 250000) {
        tax = 0;
    } 
    else if (income <= 500000) {
        tax = (income - 250000) * 0.05;
    } 
    else if (income <= 1000000) {
        tax = (250000 * 0.05) + ((income - 500000) * 0.20);
    } 
    else {
        tax = 
            (250000 * 0.05) +
            (500000 * 0.20) +
            ((income - 1000000) * 0.30);
    }

    console.log(`Income: ${income}`);
    console.log(`Total Tax: ${tax}`);
}

calculateTax(750000);;