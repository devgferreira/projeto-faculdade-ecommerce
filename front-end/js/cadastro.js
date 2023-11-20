const formulario = document.querySelector("form");
const botao = document.querySelector("button");
const inome = document.querySelector(".nome");
const isenha = document.querySelector(".senha");
const isenhaConfirmada = document.querySelector(".senhaConfirmada");
const itelefone = document.querySelector(".telefone");
const iendereco = document.querySelector(".endereco");
const icpf = document.querySelector(".cpf");


if(isenha == isenhaConfirmada){

}

function cadastrar(){
    
    if(isenha.value == isenhaConfirmada.value){
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
    }else{
        alert("A senha não são compativeis")
    }
    
};

function limpar(){
    inome.value = "";
    isenha.value = "";
    isenhaConfirmada.value = "";
    itelefone.value = "";
    iendereco.value = "";
    icpf.value = "";
};

formulario.addEventListener('submit', function (event){
    event.preventDefault();
    cadastrar();
    if(isenha.value == isenhaConfirmada.value){
        limpar();
    }
});