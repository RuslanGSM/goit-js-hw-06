const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', function(event) {
    const name = event.target.value;
    nameOutput.textContent = name ? name : 'Anonymous';

});