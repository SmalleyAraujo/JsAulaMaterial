// Atividade 4 - DOM
// Victor Santos Rohod
// •
// 16:55
// 1) Crie um campo <input type="text"> e aplique os seguintes controles com base nos eventos abaixo:
// • No evento de foco modifique o background do input para amarelo.
// • Quando o campo perder o foco, recupere o seu respectivo valor e:
// o Caso o conteúdo contido no campo tenha menos de 3 caracteres o mesmo deve ter seu background alterado para vermelho.
// o Caso o conteúdo contido no campo tenha 3 caracteres ou mais o background deve ser alterado para verde.

// link das interações possiveis: https://www.w3schools.com/jsref/dom_obj_event.asp


const input = document.getElementById("inputDaPagina");


input.addEventListener("focus", ganhaFoco);
input.addEventListener("focusout", perdeFoco);

function ganhaFoco(){
   input.style.backgroundColor = "yellow";  
}

function perdeFoco(){
    if (input.value.length < 3){
        input.style.backgroundColor = "red";
        let resposta = document.getElementById("resposta");
        resposta.style.color = "red";
        resposta.innerText = "O número de caracteres não é suficiente!";
    }
    else{
        input.style.backgroundColor = "green"
        let resposta = document.getElementById("resposta");
        let conteudoInput = input.value;
        let contarInput = input.value.length;
        resposta.style.color = "green";
        resposta.innerHTML = `O número de caracteres ${contarInput} <br> O que está escrito ${conteudoInput}`;
    }
} 







