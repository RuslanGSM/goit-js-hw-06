const validationInput = document.querySelector('#validation-input');
const dataLength = Number(validationInput.getAttribute('data-length'));

validationInput.addEventListener('blur', () => {
  const inputValue = validationInput.value;
  const inputLength = inputValue.length;
  if (inputLength === dataLength) {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  } else {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  }
});