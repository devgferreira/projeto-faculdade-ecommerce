var cpfNaURL = obterParametroDaURL('cpf');
const formulario = document.querySelector("form");
const inome = document.getElementById("nome");
const itelefone = document.getElementById("telefone");
const iendereco = document.getElementById("endereco");
const iemail = document.getElementById("email");
function ataualizarDadosCliente(){
   
    fetch("http://localhost:8080/usuarios/" + cpfNaURL,
        {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            method: "PUT",
            body: JSON.stringify({
                nome: inome.value,
                telefone: itelefone.value,
                endereco: iendereco.value,
                email: iemail.value,
            })
        })
        .catch(function (res) {console.log(res)})
};  
formulario.addEventListener('submit', function (event){
    event.preventDefault();
    ataualizarDadosCliente();
    alert("Atualização feita com sucesso")
});

function obterParametroDaURL(nomeParametro) {
    var urlSearchParams = new URLSearchParams(window.location.search);
    return urlSearchParams.get(nomeParametro);
}

export default ataualizarDadosCliente
