
document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

/*var nome = document.getElementById("nome").value;
var email = document.getElementById("email").value;
var tel = document.getElementById("tel").value;

function validaFormulario(){
    if(nome != "" && email != "" && tel != ""){
        alert("Prontinho! Você receberá as novidades por email")
    }else{
        alert("Por favor, preencha os campos nome, email e telefone!")
    }
}*/
function validaFormulario(){
    if (document.getElementById("nome").value != "" && document.getElementById("email").value != "" && document.getElementById("tel").value != "") {
        alert("Prontinho! Você receberá as novidades por email")
    }else {
        alert("Por favor, preencha os campos nome, email e telefone!")
    }
}


