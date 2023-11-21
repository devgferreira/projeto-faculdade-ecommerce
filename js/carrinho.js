const value = document.getElementById('value');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');


const updateValue = () => {
    value.innerHTML = count;
};

let count = 0;
let intervalId = 0;

plusButton.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
        count += 1;
        updateValue();
    }, 100);
});

minusButton.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
        if (count > 1) {
            count -= 1;
        }
        updateValue();
    }, 100);
});


document.addEventListener('mouseup', () => clearInterval(intervalId))