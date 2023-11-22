const resultado = document.getElementById("resultado")
var cpfNaURL = obterParametroDaURL('cpf');

const buscarCliente = (function() {


    function buscarClienteInternamente(cpf) {
        fetch('http://localhost:8080/usuarios/' + cpf)
            .then(response => response.json())
            .then(data => {
                resultado.innerHTML = `
                    <div class="textfield">
                    <label><strong>Nome:</strong> ${data.nome}</label>
                    <label><strong>CPF:</strong> ${data.cpf}</label>
                    <label><strong>Email:</strong> ${data.email}</label>
                    <label><strong>Número de telefone::</strong> ${data.telefone}</label>
                    <label><strong>Endereço:</strong> ${data.endereco}</label>
                    </div>
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