
const formulario = document.querySelector("form");
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
        .then(res => res.json()) 
        .then(data => {
            let status = data.status

            if(!status){
                return alert("CPF ou Senha invalidos")
            }else{
                alert("Login feito com sucesso")
                window.location.href = "dados-clientes.html?cpf=" + encodeURIComponent(icpf.value);
                limpar();
            }
        })
        .catch(function (res) {console.log(res)})

};  

function limpar(){
    isenha.value = "";
    icpf.value = "";
};


formulario.addEventListener('submit', function (event){
    event.preventDefault();
    login();
});
