const ul = document.querySelectorAll('li');

ul.forEach(item => {
    item.addEventListener('click', function() {
        item.classList.toggle('line-through')
    })
})


const toggleBtn = document.querySelector('button');
const body = document.querySelector('body');

toggleBtn.addEventListener('click', function() {
    toggleBtn.classList.toggle('toggle');
    body.classList.toggle('body-toggle');
})
