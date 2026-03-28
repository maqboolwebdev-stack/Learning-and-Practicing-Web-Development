function favoriteAnimal(animal) {
    return animal + " is my favorite animal!"
}

const message = favoriteAnimal('Goat')
console.log(message)


function cuteAnimal(cute) {
    return cute + " is a cute animal!"
}

console.log(cuteAnimal('Cat'));


let userName = 'John';

function showMessage() {
//   userName = "Bob"; 
  let userName = "Bob"; 

  let message = 'Hello, ' + userName;
  console.log(message);
}

console.log( userName ); 

showMessage();

console.log( userName );

function add(a, b) {
return    a + b;

}

console.log(add(4, 4));


function add7(number) {
    return number + 7;
}

console.log(add7(10)); 

function multiply(n1, n2) {
 return n1 * n2 ;
}

console.log(multiply(3, 2));

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

console.log(capitalize('i am Great'));
console.log(capitalize('i AM man'));
console.log(capitalize('ABCD'));


function lastLater(string) {
    return string.slice(-1);
}

console.log(lastLater('abcd'));

//       FizzBuzz

let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
