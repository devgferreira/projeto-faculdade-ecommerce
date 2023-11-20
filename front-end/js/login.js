const formulario = document.querySelector("form");
const botao = document.querySelector("button");
const icpf = document.querySelector(".cpf");
const isenha = document.querySelector(".senha");

function login(){
    fetch("http://localhost:8080/usuarios/login",
        {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                cpf: icpf.value,
                senha: isenha.value,
            })
        })
        .then(function (res) { console.log(res)})
        .catch(function (res) {console.log(res)})
        alert("Login feito com sucesso")
};

function limpar(){
    isenha.value = "";
    icpf.value = "";
};

formulario.addEventListener('submit', function (event){
    event.preventDefault();
    login();
    limpar();
});