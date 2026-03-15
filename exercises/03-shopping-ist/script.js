const input = document.querySelector('input');
const addButton = document.querySelector('.addBtn');
const ul = document.querySelector('ul');

addButton.addEventListener('click', function(event) {
     event.preventDefault()
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    delBtn.classList.add('delBtn');
    let inputValue = input.value;
    delBtn.textContent = 'Delete'
    li.textContent = inputValue;
    li.appendChild(delBtn);
    ul.appendChild(li);
    input.value = '';


    delBtn.addEventListener('click', function() {
        li.remove();
    })
});

addButton.addEventListener('keydown', function() {
    if(key == 'Enter') {
        
    }
});