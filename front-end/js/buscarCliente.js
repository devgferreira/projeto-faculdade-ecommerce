const resultado = document.getElementById("resultado")
const formulario = document.querySelector("form")
var cpfNaURL = obterParametroDaURL('cpf');

const buscarCliente = (function() {


    function buscarClienteInternamente(cpf) {
        fetch('http://localhost:8080/usuarios/' + cpf)
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('cpf', data.cpf);
                document.getElementById('nome').value = data.nome;
                document.getElementById('cpf').value = data.cpf;
                document.getElementById('telefone').value = data.telefone;
                document.getElementById('endereco').value = data.endereco;
                document.getElementById('email').value = data.email;
                document.getElementById('aniversario').value = data.aniversario;
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