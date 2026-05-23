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