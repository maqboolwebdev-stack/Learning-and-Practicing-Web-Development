const changeColorBtn = document.querySelector('.color-changer');
const card = document.querySelector('.card');
const body = document.body;

const MAX_HISTORY = 5;
const colorHistory = [];

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function generateHexColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
}

function updateHistory(color) {
  colorHistory.push(color);

  if (colorHistory.length > MAX_HISTORY) {
    colorHistory.shift();
    card.firstElementChild.remove();
  }
}

function renderColor(color) {
  const li = document.createElement('li');
  li.textContent = color;
  li.style.color = color;
  card.appendChild(li);
}

changeColorBtn.addEventListener('click', () => {
  const color = generateHexColor();

  updateHistory(color);
  renderColor(color);

  body.style.backgroundColor = color;

});