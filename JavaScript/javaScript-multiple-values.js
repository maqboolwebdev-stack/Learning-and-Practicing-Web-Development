// let's learn about Array's

let arr1 = new Array('purple', 'green', 'yellow');
let arr2 = ['black', 'white', 'pink'];

let arr3 = new Array(10);
let arr4 = [10];

console.log(arr3);
console.log(arr4);

const arr = ['Hi there!', 5, true];
arr[0] = 'New value';

console.log(typeof arr[0]);
console.log(typeof arr[1]);
console.log(typeof arr[2]);

console.log(arr[0]);
// arr = ['is it valid?']

arr2[3] = ['guava'];
arr2[-1] = ['caret'];

console.log(arr2[3]);
console.log(arr2[-1]);

let animals = ['dog', 'cat', 'cow', 'loin', 'dog'];
let cars = ['ferrari', 'mercedes'];
let emptyArray = [];

console.log('length of animals:', animals.length);
console.log('length of cars:', cars.length);
console.log('length of emptyArray:', emptyArray.length);

// Exercise 3.1

let shoppingList = ['Milk', 'Bread', 'Apples'];

console.log(shoppingList.length);

shoppingList[1] = 'Banana';

console.log(shoppingList);

// Array Methods

let favoriteFruits = ['melon', 'guava', 'orange'];
favoriteFruits.push('mango');

favoriteFruits.splice(2, 0, 'waterMelon', 'gapes');
favoriteFruits.splice(2, 10, 'waterMelon', 'gapes');
// favoriteFruits.splice(2, 2,'waterMelon', 'gapes');
console.log(favoriteFruits);

let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
let arr7 = arr5.concat(arr6);
let arr8 = arr7.concat(7, 8, 9)

console.log(arr7);
console.log(arr8);

// delete from last
arr8.pop();

console.log(arr8);

// delete from front
arr8.shift();

console.log(arr8);

// splice() is special this allow how much delete and where?

arr8.splice(1, 3);

console.log(arr8);

delete arr8[0];

console.log(arr8);

// Finding elements

let findValue = arr8.find(function (e) { return e === 6 });
let findValue2 = arr8.find(e => e === 10);

console.log(findValue, findValue2);

let findIndex = arr8.indexOf(6)
let findIndex2 = arr8.indexOf(10);

console.log(findIndex, findIndex2);

let findIndex3 = arr8.indexOf(6, 2);

console.log(findIndex3);

let lastDog = animals.lastIndexOf('dog');

console.log(lastDog);

// Sorting

let names = ['John', 'Albert', 'Musk', 'Maria', 'Imam'];
let ages = [34, 53, 43, 18, 21]

console.log(names.sort());
console.log(ages.sort());

// Reversing

console.log(names.reverse());
console.log(ages.reverse());

// Practice Exercise 3.2

let shoppingList2 = [];
shoppingList2 = ['Milk', 'Bread', 'Apples'];
shoppingList2.splice(1, 1, 'Banana', 'Eggs');
shoppingList2.pop();
shoppingList2.sort();
console.log(shoppingList2.indexOf('Milk'));
shoppingList2.splice(1, 0, 'Carrots', 'Lettuce');
console.log(shoppingList2);

let newShoppingList = ['Juice', 'Pop'];

let combineShoppingList = shoppingList2.concat(newShoppingList, newShoppingList);

console.log(combineShoppingList);
console.log(combineShoppingList.indexOf('Pop'));

// Multidimensional Arrays

let someValues1 = [1, 2, 3];
let someValues2 = [4, 5, 6];
let someValues3 = [7, 8, 9];

let arrOfArrays = [someValues1, someValues2, someValues3];
let arrOfArrays2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(arrOfArrays2[0][1]);
console.log(arrOfArrays2[1][1]);
console.log(arrOfArrays2[2][2]);
console.log(arrOfArrays);

// Practice Exercise 3.3

let newArray = [1, 2, 3];
let nestArray = [newArray, newArray, newArray];

console.log(nestArray[0][1]);

// Objects in JavaScript

console.log(typeof arr);

let dog = {
    dogName: 'JavaScript',
    color: 'brown',
    weight: 2.4,
    breed: 'chihuahua',
    age: 3,
    burglarBitter: true,
}

let dogColor1 = dog['color'];
let dogColor2 = dog.color;
dog['color'] = 'blue';
dog.weight = 2.3;

console.log(dogColor1);
console.log(dogColor2);

console.log(dog);

// Practice Exercise 3.4

let myCar = {
    make: 'Toyota',
    model: 'Land cruiser',
    color: 'white',
    release: 2033,
    isZeroMeter: true,
}

let variable = 'color';

console.log(myCar[variable]);

myCar[variable] = 'black';

console.log(myCar[variable]);

variable = 'forSale';

myCar[variable] = false;

console.log(myCar.make, myCar.model);

console.log(myCar['forSale']);

let company = {
    companyName: "Healthy Candy",
    activity: "food manufacturing",
    address: {
        street: "2nd street",
        number: "123",
        zipcode: "33116",
        city: "Miami",
        state: "Florida",
    },
    yearOfEstablishment: 2021,
};

console.log(company.address.zipcode);
console.log(company["address"]["city"]);

company = {
    companyName: "Healthy Candy",
    activities: [
        "food manufacturing",
        "improving kids' health",
        "manufacturing toys",
    ],
    address: {
        street: "2nd street",
        number: "123",
        zipcode: "33116",
        city: "Miami",
        state: "Florida",
    },
    yearOfEstablishment: 2021,
};

console.log(company.activities[1]);

let addresses = [
    {
        street: "2nd street",
        number: "123",
        zipcode: "33116",
        city: "Miami",
        state: "Florida",
    },
    {
        street: "1st West avenue",
        number: "5",
        zipcode: "75001",
        city: "Addison",
        state: "Texas",
    },
];

console.log(addresses[1].city);

company = {
    companyName: "Healthy Candy",
    activities: [
        "food manufacturing",
        "improving kids' health",
        "manufacturing toys",
    ],
    address: [
        {
            street: "2nd street",
            number: "123",
            zipcode: "33116",
            city: "Miami",
            state: "Florida",
        },
        {
            street: "1st West avenue",
            number: "5",
            zipcode: "75001",
            city: "Addison",
            state: "Texas",
        },
    ],
    yearOfEstablishment: 2021,
};

console.log(company.address[0].street);

// Practice Exercise 3.5

let people = {
    friends: []
};

let friend1 = {
    firstName: 'Maria',
    lastName: 'Albert',
    id: 1,
}

let friend2 = {
    firstName: 'Zoa',
    lastName: 'de',
    id: 2,
}

let friend3 = {
    firstName: 'mani',
    lastName: 'foo',
    id: 3,
}

people.friends = [friend1, friend2, friend3];

console.log(people.friends[0].firstName);

// Chapter Projects

const theList = ['Laurence', 'Svekis', true, 35, null, undefined];

theList.pop();
theList.pop();
theList.push('LAST');
theList.shift();
theList.unshift('FIRST');
theList[2] = 'MIDDLE';
theList[3] = 'Hello World!';

console.log(theList);



const inventory = [];

let item1 = {
    itemName: 'Olive Oil',
    model: 'Extra virgin',
    cost: 4000,
    quantity: 10,
}
let item2 = {
    itemName: 'Green Tea',
    model: 'Tal',
    cost: 250,
    quantity: 30,
}
let item3 = {
    itemName: 'Rice',
    model: 'Double Steam',
    cost: 550,
    quantity: 4,
}

inventory.push(item1, item2, item3);

console.log(inventory[2].quantity);

inventory[0].I = 'Love this'
inventory[1].mine = 'yes'
inventory[2].my = 'favorite'

console.log(inventory);