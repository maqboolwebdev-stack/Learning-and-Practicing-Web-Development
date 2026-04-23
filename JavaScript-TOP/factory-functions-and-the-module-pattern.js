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