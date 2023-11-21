const resultado = document.getElementById("resultado")
var cpfNaURL = obterParametroDaURL('cpf');

const buscarCliente = (function() {


    function buscarClienteInternamente(cpf) {
        fetch('http://localhost:8080/usuarios/' + cpf)
            .then(response => response.json())
            .then(data => {
                resultado.innerHTML = `
                    <p><strong>Nome:</strong> ${data.nome}</p>
                    <p><strong>CPF:</strong> ${data.cpf}</p>
                `;
            })
            .catch(error => console.error('Erro ao buscar cliente:', error));
    }

    return function(cpf) {
        cpfNaURL = cpf;

        buscarClienteInternamente(cpf);
    };
})();

document.addEventListener('DOMContentLoaded', function() {
    buscarCliente(cpfNaURL);
});

function obterParametroDaURL(nomeParametro) {
    var urlSearchParams = new URLSearchParams(window.location.search);
    return urlSearchParams.get(nomeParametro);
}


export default buscarCliente;