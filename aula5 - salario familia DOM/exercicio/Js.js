// "getElementById" Basicamente o document.getElementById, como o nome já diz, é uma função do JavaScript que serve para retornar um elemento do DOM que é identificado por um ID específico.

// querySelector a função document.querySelector() é usada para buscar um elemento do mundo HTML e trazê-lo para o mundo JavaScript para que possamos manipulá-lo123. A função recebe um parâmetro, um seletor CSS1. O querySelector() retorna o primeiro elemento dentro do documento que foi especificado pelo seletor23. O querySelectorAll() retorna uma lista de elementos presentes no documento45. A forma para adicionar eventos usando javascript puro é usando o addEventListener4. É igual ao CSS você deve informar que é um # atributo ou . classe

// addEventListener tratador de eventos é um método do JavaScript que permite registrar um tratador de eventos. A sintaxe é a seguinte: elemento.addEventListener (evento, nome_da_função, false ou true). O evento pode ser qualquer evento JavaScript válido, como "click" ou "mousedown". O segundo parâmetro é o listener, que pode ser um objeto do tipo EventListener ou uma função. Por exemplo, para criar um botão simples, pode-se usar o seguinte código HTML: Clique! . Em seguida, pode-se registrar um tratador de eventos para o botão usando addEventListener12345. Esse é o responsavel para adicionar eventos. 

// 1º Insira seu nome
// CAMPO EMPREGADO
const nome = document.getElementById("nomeEmpregado");
nome.addEventListener("focus", focoNome); 
nome.addEventListener("focusout", insiraNome);

// FOCUS
function focoNome(){
    nome.style.backgroundColor = "blue";  
    nome.style.color = "white";
    nome.style.fontSize = "30px"
}
 
// CALCULO CARACTERES
function insiraNome(){
     if(nome.value.length == 0){
         window.alert("Por favor insira seu nome");
     }    
}


// CAMPO QUANTIDADE


const filhos = document.getElementById("quantidade");
filhos.addEventListener("focus", focoQuant); 
filhos.addEventListener("focusout", insiraQuantidade);

// FOCUS
function focoQuant(){
    filhos.style.backgroundColor = "blue";  
    filhos.style.color = "white";
}
 


// CALCULO CARACTERES
function insiraQuantidade(){
    if(nome.value.length == 0){
        window.alert("Por favor insira a quantidade de filhos");
    }    
}

// FIM






//  typeof
