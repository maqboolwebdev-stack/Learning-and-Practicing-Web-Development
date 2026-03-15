const incrementBtn = document.querySelector(".increment");
const decrementBtn = document.querySelector(".decrement");
const p = document.querySelector("p");
const putBtn = document.querySelector('.putNumber');

putBtn.addEventListener('click', function() {
    var userInput = Number(prompt('Enter a number and check'));
    p.textContent = userInput;
    if(isPrime(userInput)){
    p.style.backgroundColor = 'red';
  } else {
    p.style.backgroundColor = 'transparent';
  }
});

let counter = 0;
function increment() {
  counter++;
  return counter;
}

function decrement() {
  counter--;
  return counter;
}

incrementBtn.addEventListener("click", function () {
  p.textContent = increment();
   if(isPrime(counter)){
    p.style.backgroundColor = 'red';
  } else {
    p.style.backgroundColor = 'transparent';
  }
});

decrementBtn.addEventListener("click", function () {
  if (p.textContent >= 1) {
    p.textContent = decrement();
  }
  if (p.textContent == 0) {
    alert("Should be Greater then 0");
  }
  if(isPrime(counter)){
    p.style.backgroundColor = 'red';
  } else {
    p.style.backgroundColor = 'transparent';
  }
});



function isPrime(n) {

    if(n <= 1) return false;
    if(n == 2) return true;
    if(n % 2 == 0) return false;
    for(let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
        if(n % i == 0) return false;
    }
    return true;
}
