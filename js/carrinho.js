
let carrinhoGlobal = [];

// se não existir o carrinhoGlobal na storage
// cria
if (window.localStorage.getItem("carrinhoGlobal") == undefined) {
    window.localStorage.setItem("carrinhoGlobal", "");
}
// se não
// carrega os valores do carrinho para a tela
else {
    // values
    // tudo que tá na localStorage é string
    // usar classe JSON com seus methods statics
    carrinhoGlobal = JSON.parse(window.localStorage.getItem("carrinhoGlobal") || "[]");
    // carrinhoGlobal é um array
}

let productsPescados = [
    {
        id: 1,
        name: "Tilápia",
        images: "tilapia.png",
        price: 37.98,
        quantity: 0

    },
    {
        id: 2,
        name: "Bacalhau",
        images: "bacalhau.jpg",
        price: 35.00,
        quantity: 0

    },
    {
        id: 3,
        name: "Cação",
        images: "cacao.png",
        price: 17.00,
        quantity: 0

    },
    {
        id: 4,
        name: "Atum",
        images: "atum.png",
        price: 85.00,
        quantity: 0

    },
    {
        id: 5,
        name: "Sardinha",
        images: "sardinha.png",
        price: 22.50,
        quantity: 0

    }]
let productsFrutosDoMar = [{
    id: 6,
    name: "Caranguejo",
    images: "caranguejo.jpg",
    price: 60.00,
    quantity: 0

},
{
    id: 7,
    name: "Mexilhões",
    images: "mexilhao.jpg",
    price: 30.00,
    quantity: 0

},
{
    id: 8,
    name: "Polvo",
    images: "polvo.jpg",
    price: 75.00,
    quantity: 0

},
{
    id: 9,
    name: "Lagosta",
    images: "lagosta.jpg",
    price: 85.00,
    quantity: 0

},
{
    id: 10,
    name: "Lula",
    images: "lula.jpg",
    price: 50.00,
    quantity: 0

}]

let productsSalmoes = [{
    id: 11,
    name: "Salmão Temperado",
    images: "salmao-temperado.jpg",
    price: 120.00,
    quantity: 0

},
{
    id: 12,
    name: "Lombo de Salmão",
    images: "lombo-de-salmao.jpg",
    price: 180.00,
    quantity: 0

},
{
    id: 13,
    name: "Salmão Premium Chileno",
    images: "salmao-premium.jpg",
    price: 250.00,
    quantity: 0

}]

let productsCamaroes = [{
    id: 14,
    name: "Camarão Rosa",
    images: "camarao-rosa.jpg",
    price: 65.00,
    quantity: 0

},
{
    id: 15,
    name: "Camarão Branco",
    images: "camarao-branco.jpg",
    price: 58.00,
    quantity: 0

},
{
    id: 16,
    name: "Camarão Empanado",
    images: "camarao-empanado.jpg",
    price: 75.00,
    quantity: 0

},
{
    id: 17,
    name: "Camarão 7 Barbas",
    images: "camarao-sete-barbas.jpg",
    price: 95.00,
    quantity: 0

}]

let productsFrescos = [{
    id: 18,
    name: "Tilápia Fresco",
    images: "tilapia-fresca.jpg",
    price: 55.00,
    quantity: 0

},
{
    id: 19,
    name: "Bacalhau Fresco",
    images: "bacalhau-fresco.jpg",
    price: 110.00,
    quantity: 0

},
{
    id: 20,
    name: "Cação Fresco",
    images: "cação-fresco.jpg",
    price: 48.00,
    quantity: 0

},
{
    id: 21,
    name: "Atum Fresco",
    images: "atum-fresco.jpg",
    price: 115.00,
    quantity: 0

},
{
    id: 22,
    name: "Sardinha",
    images: "sardinha-fresca",
    price: 17.00,
    quantity: 0

}]

let productsCongelados = [{
    id: 23,
    name: "Tilápia Congelada",
    images: "tilapia-congelada.png",
    price: 42.00,
    quantity: 0

},
{
    id: 24,
    name: "Bacalhau Congelado",
    images: "bacalhau-congelado.png",
    price: 75.00,
    quantity: 0

},
{
    id: 25,
    name: "Cação Congelado",
    images: "cação-congelado.jpg",
    price: 35.00,
    quantity: 0

},
{
    id: 26,
    name: "File de Atum Congelado",
    images: "file-atum-congelado.jpg",
    price: 85.00,
    quantity: 0

},

{
    id: 27,
    name: "Sardinha Congelada",
    images: "sardinha-congelada.jpg",
    price: 14.00,
    quantity: 0
}
]

const value = document.getElementsByClassName('value');
const plusButton = document.getElementsByClassName('plusButton');
const minusButton = document.getElementsByClassName('modelsInfo-button');

let count0 = 0;
let intervalId = 0;

for (let i = 0; i < plusButton.length; i++) {
    plusButton[i].addEventListener('mousedown', () => {
        value[i].innerHTML++;
    });

    minusButton[i].addEventListener('mousedown', () => {
        if (value[i].innerHTML > 0) {
            value[i].innerHTML--;
        }
    });
}

document.addEventListener('mouseup', () => clearInterval(intervalId))

//////////////////////////////////////////////////////////////////////////////

let carrinhoPescados = document.getElementsByClassName('adicionar1');

for (let i = 0; i < carrinhoPescados.length; i++) {
    carrinhoPescados[i].addEventListener('click', () => {
        for (let j = 0; j < value.length; j++) {
            productsPescados[j].quantity = parseInt(value[j].innerHTML);

            if (productsPescados[j].quantity > 0) {
                carrinhoGlobal.push(productsPescados[j])
                window.localStorage.setItem("carrinhoGlobal",
                    JSON.stringify(carrinhoGlobal)
                    // JSON.stringify(productsPescados[j])
                )
            }
        }
    });
}

//////////////////////////////////////////////////////////////////////////////

let carrinhoFrutosDoMar = document.getElementsByClassName('adicionar2');

for (let i = 0; i < carrinhoFrutosDoMar.length; i++) {
    carrinhoFrutosDoMar[i].addEventListener('click', () => {
        for (let j = 0; j < value.length; j++) {
            productsFrutosDoMar[j].quantity = parseInt(value[j].innerHTML);

            if (productsFrutosDoMar[j].quantity > 0) {
                carrinhoGlobal.push(productsFrutosDoMar[j])
                window.localStorage.setItem("carrinhoGlobal",
                    JSON.stringify(carrinhoGlobal)
                    // JSON.stringify(productsFrutosDoMar[j])
                )
            }
        }
    });
}

//////////////////////////////////////////////////////////////////////////////

let carrinhoSalmoes = document.getElementsByClassName('adicionar3');

for (let i = 0; i < carrinhoSalmoes.length; i++) {
    carrinhoSalmoes[i].addEventListener('click', () => {
        for (let j = 0; j < value.length; j++) {
            productsSalmoes[j].quantity = parseInt(value[j].innerHTML);

            if (productsSalmoes[j].quantity > 0) {
                carrinhoGlobal.push(productsSalmoes[j])
                window.localStorage.setItem("carrinhoGlobal",
                    JSON.stringify(carrinhoGlobal)
                    // JSON.stringify(productsSalmoes[j])
                )
            }
        }
    });
}

//////////////////////////////////////////////////////////////////////////////

let carrinhoCamarao = document.getElementsByClassName('adicionar4');

for (let i = 0; i < carrinhoCamarao.length; i++) {
    carrinhoCamarao[i].addEventListener('click', () => {
        for (let j = 0; j < value.length; j++) {
            productsCamaroes[j].quantity = parseInt(value[j].innerHTML);

            if (productsCamaroes[j].quantity > 0) {
                carrinhoGlobal.push(productsCamaroes[j])
                window.localStorage.setItem("carrinhoGlobal",
                    JSON.stringify(carrinhoGlobal)
                    // JSON.stringify(productsCamaroes[j])
                )
            }
        }
    });
}

//////////////////////////////////////////////////////////////////////////////

let carrinhoFrescos = document.getElementsByClassName('adicionar5');

for (let i = 0; i < carrinhoFrescos.length; i++) {
    carrinhoFrescos[i].addEventListener('click', () => {
        for (let j = 0; j < value.length; j++) {
            productsFrescos[j].quantity = parseInt(value[j].innerHTML);

            if (productsFrescos[j].quantity > 0) {
                carrinhoGlobal.push(productsFrescos[j])
                window.localStorage.setItem("carrinhoGlobal",
                    JSON.stringify(carrinhoGlobal)
                    // JSON.stringify(productsFrescos[j])
                )
            }
        }
    });
}

//////////////////////////////////////////////////////////////////////////////

let carrinhoCongelados = document.getElementsByClassName('adicionar6');

for (let i = 0; i < carrinhoCongelados.length; i++) {
    carrinhoCongelados[i].addEventListener('click', () => {
        for (let j = 0; j < value.length; j++) {
            productsCongelados[j].quantity = parseInt(value[j].innerHTML);

            if (productsCongelados[j].quantity > 0) {
                carrinhoGlobal.push(productsCongelados[j])
                window.localStorage.setItem("carrinhoGlobal",
                    JSON.stringify(carrinhoGlobal)
                    // JSON.stringify(productsCongelados[j])
                )
            }
        }
    });
}

///////////////////////////////////////////////////////////////////////////////

let valorTotal = 0;
let quantidadeTotal = 0; // Adicionado
let carrinho = {};

for (let itemCarrinho of carrinhoGlobal) {

    if (carrinho[itemCarrinho.id]) {
        carrinho[itemCarrinho.id].quantity += itemCarrinho.quantity;
    } else {
        // Senão, adiciona o item ao carrinho
        carrinho[itemCarrinho.id] = itemCarrinho;
    }


    valorTotal += carrinho[itemCarrinho.id].price * carrinho[itemCarrinho.id].quantity;


    quantidadeTotal += carrinho[itemCarrinho.id].quantity;
}


console.log(`Quantidade total de itens: ${quantidadeTotal}`);

// Obtenha o elemento com a classe "quantity"
let quantityElement = document.querySelector('.quantity');


if (quantityElement) {
    quantityElement.textContent = quantidadeTotal;
}

if (window.location.pathname == '/index-pedidos.html') {
    let lista = document.createElement("ul");

    // Agora, iteramos sobre os itens do carrinho para criar a lista
    for (let id in carrinho) {
        let item = document.createElement("li");
        item.textContent =
            `
                ${carrinho[id].name},
                R$: ${carrinho[id].price.toFixed(2)},
                Qt: ${carrinho[id].quantity}`;
        lista.appendChild(item);
    }

    let carrinhoElement = document.querySelector('.carrinho');

    carrinhoElement.appendChild(lista);

    let botao = document.createElement("button");
    botao.textContent = `Finalizar Pedido - Valor Total: ${valorTotal.toFixed(2).replace('.', ',')}`;
    botao.className = "pedido";

    // Add an event listener to the button
    botao.addEventListener('click', function () {
        alert('Pedido finalizado!');
        window.location.href = 'index.html';
    });

    carrinhoElement.appendChild(botao);
}