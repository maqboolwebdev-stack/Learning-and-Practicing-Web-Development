function Person(firstName, lastName, age, salary, role) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.salary = salary;
    this.role = role;
    this.fullName = function () {
        console.log(this.firstName + ' ' + this.lastName);
    }
}

const person1 = new Person('waqas', 'maqbool', 21, 5000, 'web developer');
const person2 = new Person('ali', 'zai', 23, 4000, 'web developer');
const person3 = new Person('zain', 'mehmood', 25, 3000, 'web developer');

console.log(person1.firstName);
console.log(person2.age);
console.log(person3.salary);
person3.fullName();


function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayHi = function () {
        console.log(`Hi ${this.name}`);
    }
}

const player = new Player('waq', 'x');
const player2 = new Player('maq', 'o');

console.log(player.name);
player2.sayHi();

function Maroon(quantity, like) {
    if (!new.target) {
        throw Error(`you must be use 'new' keyword to call constructor`);
    }
    this.quantity = quantity;
    this.like = like;
    this.info = function() {
        console.log(`quantity is = ${quantity}; is like? = ${like}`);
    }

}

const yes = new Maroon(4, true);

yes.info();

// Exercise

function Book(title, author, page, read) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = read;
    this.info = function() {
        console.log(`${title} by ${author}, ${page} pages, ${read}`);
    }
};

const book1 = new Book('Rich Dad Poor Dad', 'Robert T keyosaki', 255, 'not read yet');
const book2 = new Book('Ego is the Enemy', 'Ryan holiday', 246, 'read');

book1.info();
book2.info();

// Prototypal


console.log(Object.getPrototypeOf(player) === Player.prototype);
console.log(Object.getPrototypeOf(player2) === Player.prototype);

// reference from line no. 22
Player.prototype.sayHello = function() {
  console.log("Hello, I'm a player!");
};

// player.sayHello();
// player2.sayHello();

// console.log(player.prototype);

// Object.getPrototypeOf(Player.prototype) === Object.prototype; // true

// player.valueOf(); 


// function Person(name) {
//   this.name = name;
// }

// Person.prototype.sayName = function() {
//   console.log(`Hello, I'm ${this.name}!`);
// };

// function Player(name, marker) {
//   this.name = name;
//   this.marker = marker;
// }

// Player.prototype.getMarker = function() {
//   console.log(`My marker is "${this.marker}"`);
// };

// Object.getPrototypeOf(Player.prototype);

// Object.setPrototypeOf(Player.prototype, Person.prototype);
// Object.getPrototypeOf(Player.prototype); 

// const player1 = new Player("steve", "X");
// const player2 = new Player("also steve", "O");

// player1.sayName(); 
// player2.sayName(); 

// player1.getMarker(); 
// player2.getMarker(); 



function Team(captain, sport) {
    this.captain = captain;
    this.sport = sport;
}


Team.prototype.info = function() {
    console.log(`The captain is ${this.captain} of sport ${this.sport}`);
}

const firstTeam = new Team('Ali', 'Cricket');


firstTeam.info();

function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

function Car(brand, model, year) {
    if (!brand || !model || !year) {
        throw new Error("All fields required");
    }

    this.brand = brand;
    this.model = model;
    this.year = year;
}

Car.prototype.getInfo = function() {
    return `This car is ${this.brand} ${this.model} from ${this.year}`;
};


// Child constructor
function ElectricCar(brand, model, year, battery) {
    Car.call(this, brand, model, year); // inherit properties
    this.battery = battery;
}

// Inherit prototype
ElectricCar.prototype = Object.create(Car.prototype);

// Fix constructor
ElectricCar.prototype.constructor = ElectricCar;

// Add method
ElectricCar.prototype.getBatteryInfo = function() {
    return `Battery capacity is ${this.battery}`;
};


// Test
const ev1 = new ElectricCar('Tesla', 'Model S', 2022, 5555);

console.log(ev1.getInfo());         // inherited
console.log(ev1.getBatteryInfo());  // own

