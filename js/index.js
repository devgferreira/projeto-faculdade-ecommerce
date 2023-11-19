$('.slider-principal').slick({
    dots: true,
    infinity: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000

});

// Obtém o elemento HTML que contém a quantidade
const contador = document.querySelector('.contador');

const botaoMais = contador.querySelector('.bx-plus');
const botaoMenos = contador.querySelector('.bx-minus');

// Obtém o elemento HTML que contém o preço
const preco = document.querySelector('.preço p');

// Obtém o valor da quantidade como um número
let quantidadeNumero = parseInt(quantidade.textContent);

// Adiciona um ouvinte de eventos para o botão de adição
botaoMais.addEventListener('click', () => {
    quantidadeNumero++;
    quantidade.textContent = quantidadeNumero;
    preco.textContent = `R$${(precoNumero * quantidadeNumero).toFixed(2).replace('.', ',')}`;
});

// Adiciona um ouvinte de eventos para o botão de subtração
botaoMenos.addEventListener('click', () => {
    if (quantidadeNumero > 1) {
        quantidadeNumero--;
        quantidade.textContent = quantidadeNumero;
        preco.textContent = `R$${(precoNumero * quantidadeNumero).toFixed(2).replace('.', ',')}`;
    }
});