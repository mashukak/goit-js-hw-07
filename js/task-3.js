const elementInput = document.querySelector('#input');
const elementOutput = document.querySelector('#output');

elementInput.addEventListener('input', update);


function update(event) {

  const inputValue = event.target.value.trim();

  elementOutput.textContent = inputValue;
}
