
let prodcuts = [
    {
        id: 1,
        name: "Tilápia",
        images: "tilapia.png",
        price: 37.98

    },
    {
        id: 2,
        name: "Bacalhau",
        images: "bacalhau.jpg",
        price: 35.00

    },
    {
        id: 3,
        name: "Cação",
        images: "cacao.png",
        price: 17.00

    },
    {
        id: 4,
        name: "Atum",
        images: "atum.png",
        price: 85.00

    },
    {
        id: 5,
        name: "Sardinha",
        images: "sardinha.png",
        price: 22.50

    },
    {
        id: 6,
        name: "Caranguejo",
        images: "caranguejo.jpg",
        price: 60.00

    },
    {
        id: 7,
        name: "Mexilhões",
        images: "mexilhao.jpg",
        price: 30.00

    },
    {
        id: 8,
        name: "Polvo",
        images: "polvo.jpg",
        price: 75.00

    },
    {
        id: 9,
        name: "Lagosta",
        images: "lagosta.jpg",
        price: 85.00

    },
    {
        id: 10,
        name: "Lula",
        images: "lula.jpg",
        price: 50.00

    },
    {
        id: 11,
        name: "Salmão Temperado",
        images: "salmao-temperado.jpg",
        price: 120.00

    },
    {
        id: 12,
        name: "Lombo de Salmão",
        images: "lombo-de-salmao.jpg",
        price: 180.00

    },
    {
        id: 13,
        name: "Salmão Premium Chileno",
        images: "salmao-premium.jpg",
        price: 250.00

    },
    {
        id: 14,
        name: "Camarão Rosa",
        images: "camarao-rosa.jpg",
        price: 65.00

    },
    {
        id: 15,
        name: "Camarão Branco",
        images: "camarao-branco.jpg",
        price: 58.00

    },
    {
        id: 16,
        name: "Camarão Empanado",
        images: "camarao-empanado.jpg",
        price: 75.00

    },
    {
        id: 17,
        name: "Camarão 7 Barbas",
        images: "camarao-sete-barbas.jpg",
        price: 95.00

    },
    {
        id: 18,
        name: "Tilápia Fresco",
        images: "tilapia-fresca.jpg",
        price: 55.00

    },
    {
        id: 19,
        name: "Bacalhau Fresco",
        images: "bacalhau-fresco.jpg",
        price: 110.00

    },
    {
        id: 20,
        name: "Cação Fresco",
        images: "cação-fresco.jpg",
        price: 48.00

    },
    {
        id: 21,
        name: "Atum Fresco",
        images: "atum-fresco.jpg",
        price: 115.00

    },
    {
        id: 22,
        name: "Sardinha",
        images: "sardinha-fresca",
        price: 17.00

    },
    {
        id: 23,
        name: "Tilápia",
        images: "tilapia-congelada.png",
        price: 42.00

    },
    {
        id: 24,
        name: "Bacalhau",
        images: "bacalhau-congelado.png",
        price: 75.00

    },
    {
        id: 25,
        name: "Cação",
        images: "cação-congelado.jpg",
        price: 35.00

    },
    {
        id: 26,
        name: "File de Atum",
        images: "file-atum-congelado.jpg",
        price: 85.00

    },

    {
        id: 27,
        name: "Sardinha",
        images: "sardinha-congelada.jpg",
        price: 14.00

    }

]

const value = document.getElementsByClassName('value');
const plusButton = document.getElementsByClassName('plusButton');
const minusButton = document.getElementsByClassName('modelsInfo-button');
console.log(value);

let count0 = 0;
let count1 = 0;
let count2 = 0;
let intervalId = 0;

plusButton[0].addEventListener('mousedown', () => {
    value[0].innerHTML++;
});

minusButton[0].addEventListener('mousedown', () => {
    if (value[0].innerHTML > 0) {
        value[0].innerHTML--;
    }
});

////////////////////////////////////////////////////////////

plusButton[1].addEventListener('mousedown', () => {
    value[1].innerHTML++;
});

minusButton[1].addEventListener('mousedown', () => {
    if (value[1].innerHTML > 0) {
        value[1].innerHTML--;
    }

});

////////////////////////////////////////////////////////////

plusButton[2].addEventListener('mousedown', () => {
    value[2].innerHTML++;
});

minusButton[2].addEventListener('mousedown', () => {
    if (value[2].innerHTML > 0) {
        value[2].innerHTML--;
    }

});

////////////////////////////////////////////////////////////

plusButton[3].addEventListener('mousedown', () => {
    value[3].innerHTML++;
});

minusButton[3].addEventListener('mousedown', () => {
    if (value[3].innerHTML > 0) {
        value[3].innerHTML--;
    }

});

////////////////////////////////////////////////////////////

plusButton[4].addEventListener('mousedown', () => {
    value[4].innerHTML++;
});

minusButton[4].addEventListener('mousedown', () => {
    if (value[4].innerHTML > 0) {
        value[4].innerHTML--;
    }

});

////////////////////////////////////////////////////////////

plusButton[5].addEventListener('mousedown', () => {
    value[5].innerHTML++;
});

minusButton[5].addEventListener('mousedown', () => {
    if (value[5].innerHTML > 0) {
        value[5].innerHTML--;
    }

});

document.addEventListener('mouseup', () => clearInterval(intervalId))