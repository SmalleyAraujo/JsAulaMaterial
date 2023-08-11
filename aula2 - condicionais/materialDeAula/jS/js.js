// OPERADORES LOGICOS 
// & (E-and)
// || (OU - or)
// ! (NÃO)

// OPERADORES RELACIONAIS
// > MAIOR QUE
// < MENOR QUE
// >= MAIOR OU IGUAL QUE
// <= MENOR OU IGUAL QUE
// == IGUAL A
// != DIFERENTE

// ESTRUTURA DO IF
// IF - SE
// ELSE - SENAO
//if (condição){
//    bloco de codigo
//} else {
//    bloco de codigo
//}


if(true){
    console.log("Você está no if");
} else {
    console.log("Você está no else");
}
// (true / false )

// MAIOR DE IDADE IF SCRIPT
window.alert("Boa tarde");
const idade = Number(window.prompt("Qual é a sua idade"));

if (idade < 0 || isNaN(idade)){
    window.alert("Idade Inválida");
    location.reload();
    //location - na localização atual/ reload - recarregue a página;
} else {
    if(idade >= 0  & idade <= 17){
        window.alert("Você é menor de idade! Acesso não permitido");
        location.reload();
    } else{
        window.alert("Você é maior de idade, seja bem vindo!");
    }
}

