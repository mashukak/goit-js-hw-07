const elementInput = document.querySelector('#name-input');
const elementOutput = document.querySelector('#name-output');


elementInput.addEventListener('input', update);

function update(event) {

  if (inputValue === '') {
    elementOutput.textContent = 'Anonymous';
  } else {
    elementOutput.textContent = inputValue;
  }
}