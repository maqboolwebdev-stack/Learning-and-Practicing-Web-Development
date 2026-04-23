let globalAge = 22;

function printAge(age) {
    var varAge = 34;

    if(age > 0) {
        const constAge = age * 2;
        console.log(constAge);
    }
        // this is not accessable
    // console.log(constAge);
}
// and also this because scope
// console.log(varAge);

printAge(globalAge);

// Closers

function makeAddingFunction(firstNumber) {

    return function returnedFunction(secondNumber) {
        return firstNumber + secondNumber;
    }
}

const add9 = makeAddingFunction(9);
console.log(add9(9));

const add1 = makeAddingFunction(1);
console.log(add1(9));

const add11999456789 = makeAddingFunction(11999456789);
console.log(add11999456789(1111111));

function createUser(name) {
  const discordName = "@" + name;
  return { name, discordName };
}

console.log(createUser('waqas'));