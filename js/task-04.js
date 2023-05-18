
const counterEl = document.querySelector("#value");
const incBtn = document.querySelector('button[data-action="increment"]');
const decBtn = document.querySelector('button[data-action="decrement"]');

let counterValue = 0;

function increment() {
    counterValue += 1;
    updateCounter();
}

function decrement() {
    counterValue -= 1;
    updateCounter();
}

function updateCounter() {
    counterEl.textContent = counterValue;
}

incBtn.addEventListener("click", increment);
decBtn.addEventListener("click", decrement);