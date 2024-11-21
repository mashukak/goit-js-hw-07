function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}
const input = document.querySelector('#controls input');
const createButton = document.querySelector('[data-create]');
const dataCreate = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');
function createBoxes(amount) {
  const elements = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = '5px';
    elements.push(box);
    size += 10;
  }

  boxes.innerHTML = '';
  boxes.append(...elements);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}
createButton.addEventListener('click', () => {
  const amount = input.value * 1;

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = ''; 
  }
});

dataCreate.addEventListener('click', destroyBoxes);
