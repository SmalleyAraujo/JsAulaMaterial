console.log("Olá mundo!");

// CAIXAS DE TEXTO
//window.alert("Meu primeiro alert!");
//window.confirm("O seu dia está legal?");
//window.prompt("Qual é o seu nome?"); // Abre um input

// VARIAVEIS 
//O js ele mesmo interpreta o tipo da variavel, typeof nome
var nome = "Smalley Araujo"; 
//"var" variavel do escopo global, que pode ser sobrescrita.
const corFavorita = "Vermelho";
//"const" depois de definido a variavel ela é imutavel, ou seja, o seu valor não pode ser sobrescrito.
let numero1 = 3;
// "let" variavel do escopo local, que sobrescreve
// o "let" só existe durante a execução do bloco do código, terminou o código ele é deletado da memoria do computador.

// CONCATENAÇÃO
// window.alert("Seja bem vindo(a), "+nome+" , sua cor favorita é:"+ corFavorita );
window.alert(`Seja bem vindo(a) ${nome} , sua cor favorita é: ${corFavorita}`); 
// A crase `` é outra maneira de concatenar na nova versão do Js.
