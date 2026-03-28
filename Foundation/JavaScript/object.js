let user = {
    name: 'waq',
    age: 21,
}

console.log(user.name);
console.log(user.age);

user.isAdmin = true;
delete user.age;

console.log(user.isAdmin);

user['likes cars'] = false;

console.log(user['likes cars']);

// let key = prompt('what do you want to know about the user?');

let key = 'name';
// they did't work

console.log(user.key);
// in this way will work
console.log(user[key]);

let person = {
     name: ['bob', 'smith'],
     age: 21,
     bio: function() {
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old`);
     },
     introduction() {
        console.log(`Hey! my name is ${this.name[0]}`);
     }
};

person.bio();
person.introduction();

function increaseCounterObject(objectCounter) {
  objectCounter.counter += 1;
}

function increaseCounterPrimitive(primitiveCounter) {
  primitiveCounter += 1;
}

const object = { counter: 0 };
let primitive = 0;

increaseCounterObject(object);
increaseCounterPrimitive(primitive);
console.log(object);
console.log(primitive);

// Map to names

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

// let names = users.map(item => item.name)
// console.log(names);
let names = function() {
  for(let name of users) {
    console.log(name.name);
  }
}

names();

// Map to Objects

let adam = { name: "Adam", surname: "Smith", id: 1 };
let william = { name: "William", surname: "Hunt", id: 2 };
let agent = { name: "Agent", surname: "Key", id: 3 };

let users2 = [ adam, william, agent ];

let userMapped = users2.map(user => ({
  fullName: `${user.name} ${user.surname}`, id: `${user.id}`
}))


console.log(userMapped[0].id);
console.log(userMapped[0].fullName);

// Sort by age

let Mark = { name: "Mark", age: 25 };
let peter = { name: "Peter", age: 30 };
let maria = { name: "Maria", age: 28 };

let arr = [ peter, Mark, maria ];

function sortByAge(arr) {
  arr.sort((a, b) => b.age - a.age);
}

sortByAge(arr);

console.log(arr[0].name);
console.log(arr[1].name);
console.log(arr[2].name);

// Get average age

let jeff = { name: "Jeff", age: 25 };
let zai = { name: "Zia", age: 30 };
let nor = { name: "Nor", age: 29 };

let arr2 = [ jeff, zai, nor ];

function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

console.log(getAverageAge(arr2));

// Create keyed object from array

let users3 = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {})
}

// let usersById = groupById(users3);
console.log(groupById(users3));
