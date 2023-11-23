const formulario = document.querySelector("form");
const botao = document.querySelector("button");
const inome = document.getElementById("nome");
const iemail = document.getElementById("email");
const isenha = document.getElementById("senha");
const ianiversario =  document.getElementById("nascimento");
const isenhaConfirmada = document.getElementById("senhaConfirmada");
const itelefone = document.getElementById("telefone");
const iendereco = document.getElementById("endereco");
const icpf = document.getElementById("cpf");


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
                email: iemail.value,
                cpf: icpf.value,
                aniversario: ianiversario.value,
                telefone: itelefone.value,
                endereco: iendereco.value,
                senha: isenha.value,
            })


        })
        .then(function (res) { console.log(res)})
        .catch(function (res) {console.log(res)})
}
function limpar(){
    inome.value = "";
    isenha.value = "";
    ianiversario.value = "",
    iemail.value = "",
    isenhaConfirmada.value = "";
    itelefone.value = "";
    iendereco.value = "";
    icpf.value = "";
};

formulario.addEventListener('submit', function (event){
    event.preventDefault();
    if(isenha.value == isenhaConfirmada.value){
    window.location.href = "dados-clientes.html?cpf=" + encodeURIComponent(icpf.value);
    cadastrar();
    limpar()
    } else{
        alert("A senha não são compativeis")
    }
    
});

