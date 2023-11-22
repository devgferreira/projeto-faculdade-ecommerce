var cpfNaURL = sessionStorage.getItem('cpf');
const formulario = document.querySelector("form");
const inome = document.querySelector(".nome");
const itelefone = document.querySelector(".telefone");
const iendereco = document.querySelector(".endereco");
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
            })
        })
        .catch(function (res) {console.log(res)})
};  
formulario.addEventListener('submit', function (event){
    event.preventDefault();
    ataualizarDadosCliente();
    alert("Atualização feita com sucesso")
});

export default ataualizarDadosCliente
