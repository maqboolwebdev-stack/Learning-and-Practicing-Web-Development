// const container = document.querySelector('#container');
// const controls = document.querySelector('.controls');

// display = container.firstElementChild;
// display2 = controls.previousElementSibling;  // Same

// console.log(display);
// console.log(display2);   // Same 

const content = document.querySelector('.content');
const contentContainer = document.querySelector('.content');

const p = document.createElement('p');
p.textContent = "Hey I'm red!";
p.style.color = 'red';

const heading = document.createElement('h1');
heading.textContent = "I'm a blue heading!";
heading.style.color = 'blue';

const div = document.createElement('div');
div.style.cssText = `background-color: pink; border: 2px solid black;`;

const h1 = document.createElement('h1');
h1.textContent = `Hey I'm in a div!`;

const p2 =document.createElement('p');
p2.textContent = 'ME TOO!';

div.append(h1, p2);
contentContainer.append(p, heading, div);


const btn2 = document.getElementById('secondBtn');
btn2.onclick = () => alert('Hello World!')

const btn3 = document.querySelector('#thirdBtn');
btn3.addEventListener('click', () => {
    alert('Hello World!');
});


const btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'blue';
    console.log(e.target);
});

const ulElements = document.querySelectorAll('li');

ulElements.forEach(item => {
    item.addEventListener('click', function() {
    item.classList.toggle('toggle')
      
    })
})