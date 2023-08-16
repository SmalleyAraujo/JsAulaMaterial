const emailDoUsuario = "fulano@gmail.com";
const senhaDoUsuario = "1234";


var botaoLogar = document.querySelector('#logar');

botaoLogar.addEventListener('click', validar );

function validar(){
    var email = document.querySelector('#email').value;
    var senha = document.querySelector('#senha').value;
    if (email === emailDoUsuario & senha === senhaDoUsuario){
        window.alert("Seja bem vindo ao nosso site!");
        window.location.href = "https://www.google.com";
    }
    else{
        window.alert("Email ou senha incorretos! Insira as informações novamente")
    }

        
}

// === verificar todas as tipagem mais exigente
// == um string e um number ele aceita 