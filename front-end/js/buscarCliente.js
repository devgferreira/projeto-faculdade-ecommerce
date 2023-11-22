const resultado = document.getElementById("resultado")
const formulario = document.querySelector("form")
var cpfNaURL = obterParametroDaURL('cpf');

const buscarCliente = (function() {


    function buscarClienteInternamente(cpf) {
        fetch('http://localhost:8080/usuarios/' + cpf)
            .then(response => response.json())
            .then(data => {
                document.getElementById('nome').value = data.nome;
                document.getElementById('cpf').textContent = data.cpf;
                document.getElementById('telefone').value = data.telefone;
                document.getElementById('endereco').value = data.endereco;
                
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

formulario.addEventListener('submit', function (event){
    event.preventDefault();
});


function obterParametroDaURL(nomeParametro) {
    var urlSearchParams = new URLSearchParams(window.location.search);
    return urlSearchParams.get(nomeParametro);
}


export default buscarCliente;