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