// 2) Fazer um site de escrever textos onde possa implementar as funções de replace e replace all
//SELETORES
const textoDigitado = document.querySelector("#textoArea")
const localizarPalavra = document.querySelector("#localizarPalavra")
const substituirPalavra = document.querySelector("#substituirPalavra")
const trocarBtn = document.querySelector("#trocar")
const trocarTodosBtn = document.querySelector("#trocarTodos")

// eventos
// addEventListener(interação, função)
trocarBtn.addEventListener('click', trocarTexto)
trocarTodosBtn.addEventListener('click', trocarTodosTexto)

// functions

function trocarTexto(){
    let textoDigitadoValor = textoArea.value;
    let localizarPalavraValor = localizarPalavra.value;
    let substituirPalavraValor = substituirPalavra.value;

    var textoFormatado = textoDigitadoValor.replace(localizarPalavraValor,substituirPalavraValor)
    // console.log(textoFormatado)
    textoDigitado.value = textoFormatado;
    // Outra forma de trocar o texto sem usar o innerHTML para substituir o texto
}

function trocarTodosTexto(){
    let textoDigitadoValor = textoDigitado.value;
    let localizarPalavraValor = localizarPalavra.value;
    let substituirPalavraValor = substituirPalavra.value;

    var textoFormatado = textoDigitadoValor.replaceAll(localizarPalavraValor,substituirPalavraValor)
    // console.log(textoFormatado)
    textoDigitado.value = textoFormatado;
    // Outra forma de trocar o texto sem usar o innerHTML para substituir o texto
}

