
let prodcuts = [
    {
        id: 1,
        name: "PRODUCT 1",
        images: "1.png",
        price: 2000

    },
    {
        id: 2,
        name: "PRODUCT 2",
        images: "1.png",
        price: 2000

    },
    {
        id: 3,
        name: "PRODUCT 3",
        images: "1.png",
        price: 2000

    },
    {
        id: 4,
        name: "PRODUCT 4",
        images: "1.png",
        price: 2000

    },
    {
        id: 5,
        name: "PRODUCT 5",
        images: "1.png",
        price: 2000

    }
]


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
        if (count > 0) {
            count -= 1;
        }
        updateValue();
    }, 100);
});


document.addEventListener('mouseup', () => clearInterval(intervalId))