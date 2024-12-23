
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}


const body = document.querySelector('body');

const changeColor = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

changeColor.addEventListener('click', () => {
  const randomColor = getRandomHexColor(); 
  body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor; 
});
