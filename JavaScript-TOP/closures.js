// function outer() {
//     const outerVar = 'Hey! I am outer var';

//     function inner() {
//         const innerVar = 'Hey! I am inner var';
//         console.log(outerVar);
//         console.log(innerVar);
//     };
//     inner();
// };

// outer();

// function outer() {
//     const outerVar = 'Hey! I am outer var';

//     function inner() {
//         const innerVar = 'Hey! I am inner var';
//         console.log(outerVar);
//         console.log(innerVar);
//     };

//     return inner;
// };


// const innerFn = outer(); 
// innerFn();

function createGreeting(greeting = '') {
    const myGreet = greeting.toUpperCase();

    return function(name) {
        return `${myGreet} ${name}`;
    };
};

const sayHello = createGreeting('hello');
const sayHey = createGreeting('hey');

console.log(sayHello('waqas'));
console.log(sayHey('maqbool'));


function createGame(gameName) {
    let score = 0;

    return function win() {
        score++;
        return `your game is ${gameName} score is ${score}`
    };
};

const hockeyGame = createGame('hockey');
const soccerGame = createGame('soccer');
