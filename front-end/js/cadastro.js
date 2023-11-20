const formulario = document.querySelector("form");
const botao = document.querySelector("button");
const inome = document.querySelector(".nome");
const isenha = document.querySelector(".senha");
const itelefone = document.querySelector(".telefone");
const iendereco = document.querySelector(".endereco");
const icpf = document.querySelector(".cpf");


function cadastrar(){
    fetch("http://localhost:8080/usuarios",
        {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                nome: inome.value,
                cpf: icpf.value,
                telefone: itelefone.value,
                endereco: iendereco.value,
                senha: isenha.value,
            })
        })
        .then(function (res) { console.log(res)})
        .catch(function (res) {console.log(res)})
};

function limpar(){
    inome.value = "";
    isenha.value = "";
    itelefone.value = "";
    iendereco.value = "";
    icpf.value = "";
};

formulario.addEventListener('submit', function (event){
    event.preventDefault();
    cadastrar();
    limpar();
});