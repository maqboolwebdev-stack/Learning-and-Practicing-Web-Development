function addOne(num) {
  return num + 1;
}
const arr = [1, 2, 3, 4, 5];
const mappedArr = arr.map(addOne);
console.log(mappedArr); 

// printing counting 1 to 10
for(let i = 1; i <= 10; i++) {
  console.log(i);
}

// print even numbers 1 to 20

for(let i = 1; i <= 20; i++) {
  if(i % 2 == 0){
    console.log(i);
  }
}

// print sum of 1 to 10
let sum = 0;
for(let i = 1; i <= 10; i++) {
  sum = sum + i;
}
console.log(sum);

// printing 10 to 1
for(let i = 10; i >= 1; i--) {
  console.log(i);
}

// multiplication table
let table = 5;
for(let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${table * i}`);
}

// stars pattern
for(let i = 1; i <= 5; i++) {

  let stars = "";

  for(let j = 1; j <= i; j++) {
    stars = stars + "*";
  }

  console.log(stars);
}

// reverse star pattern
for(let i = 5; i <= 1; i++) {

  let stars = "";

  for(let j = 5; j >= i; j--) {
    stars = stars + "*";
  }

  console.log(stars);
}