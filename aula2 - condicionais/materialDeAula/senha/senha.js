const senhaDoUsuario = "ADM";
const emailDoUsuario = "fulano@gmail.com";

window.alert("Bem vindo(a) a sua conta");
var email = window.prompt("Insira seu email!");
var senha = window.prompt("Insira sua senha!");

if( email != emailDoUsuario || senha != senhaDoUsuario){
    window.alert("O email ou a senha estão incorretos!");
    location.reload();
} else {
    window.alert("Seja bem vindo!");
}
