
const elementInput = document.querySelector('#name-input');
const elementOutput = document.querySelector('#name-output');


elementInput.addEventListener('input', update);


function update(event) {

  const inputValue = event.target.value.trim();


  elementOutput.textContent = inputValue.length > 0 ? inputValue : 'Anonymous';
}
