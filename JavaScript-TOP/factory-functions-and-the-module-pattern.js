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

// Exercise 1

function createProduct(name, price){
    let stock = 10;

    return {
        name,
        price,

        checkStock() {
            console.log(`stock is ${stock}`);
        },

        buy(qty) {
            if(qty <= 10) {
                stock -= qty;
                console.log(`${qty} pieces booked:> ${stock} pieces left`);
            } else {
                console.error(`only ${stock} pieces available`);
            }
        },

        refill(qty) {
            stock += qty;
            console.log(`Now your stock is ${stock}`);
        },
    }
};

let laptop = createProduct('laptop', 1500000);
let books = createProduct('books', 1500);

laptop.checkStock();
laptop.buy(8);
laptop.refill(23);

books.checkStock();
books.buy(3);
books.refill(11);


function createUser(name) {
  const discordName = "@" + name;

  let reputation = 0;
  const getReputation = () => reputation;
  const giveReputation = () => { reputation++; };

  return { name, discordName, getReputation, giveReputation };
}

const josh = createUser("josh");
josh.giveReputation();
josh.giveReputation();

// logs { discordName: "@josh", reputation: 2 }
console.log({
  discordName: josh.discordName,
  reputation: josh.getReputation()
});


const calculator = (() => {
  let lastResult;

  const add = (a, b) => {
    lastResult = a + b;
    return lastResult;
  };
  const subtract = (a, b) => {
    lastResult = a - b;
    return lastResult;
  };
  const multiply = (a, b) => {
    lastResult = a * b;
    return lastResult;
  };
  const divide = (a, b) => {
    lastResult = a / b;
    return lastResult;
  };
  const getLastResult = () => lastResult;

  return { add, subtract, multiply, divide, getLastResult };
})();

console.log(calculator.add(3, 5));
console.log(calculator.subtract(6, 2));
console.log(calculator.getLastResult());
console.log(calculator.multiply(14, 5534));


function createUser(name) {
  const discordName = "@" + name;

  let reputation = 0;
  const getReputation = () => reputation;
  const giveReputation = () => { reputation++; };

  return { name, discordName, getReputation, giveReputation };
}

const josh = createUser("josh");
josh.giveReputation();
josh.giveReputation();

// logs { discordName: "@josh", reputation: 2 }
console.log({
  discordName: josh.discordName,
  reputation: josh.getReputation()
});

function createPlayer(name, level) {
  const { getReputation, giveReputation } = createUser(name);

  const getLevel = () => level;
  const increaseLevel = () => { level++; };
  return {
    name,
    getReputation,
    giveReputation,
    getLevel,
    increaseLevel,
  };
}


function createPlayer(name, level) {
  const user = createUser(name);

  const getLevel = () => level;
  const increaseLevel = () => { level++; };
  return Object.assign({}, user, { getLevel, increaseLevel });
}
