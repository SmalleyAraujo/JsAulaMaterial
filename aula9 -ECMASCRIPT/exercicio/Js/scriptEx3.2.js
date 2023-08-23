const nome = "ADM";
const senha = "ADM";


var botaoLogar = document.querySelector('#logar');

botaoLogar.addEventListener('click', validar );





function validar(){

    const primeiraPromise = new Promise((resolve,reject) =>{
        let user = document.querySelector('#user').value;
        let senhaUser = document.querySelector('#senhaUser').value;
       
       
        if(user === nome & senhaUser === senha){
            resolve("User correto");
            window.alert("Seja bem vindo ao nosso site!");
            window.location.href = "https://www.google.com";
        }else{
            reject("User incorreto! tente novamente!");
            window.alert("Email ou senha incorretos! Insira as informações novamente")
        }
    })
        
};
