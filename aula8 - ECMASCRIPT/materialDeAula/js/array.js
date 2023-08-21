// Indexof (retorna indice)
var frutas = ['Kiwi', 'Melancia', 'Morango', 'Jaca'];

var frutasPesquisa = frutas.indexOf('Jaca');
// console.log(frutasPesquisa);
if(frutasPesquisa === -1){
    console.log("Fruta não encontrada!");
}else{
    console.log("Fruta encontrada!");
}

//Obs.: "===" verifica conteudo e tipagem

// Includes
var legumes = ["Alface", "Tomate", "Alecrim", "Cenoura"];
var legumesPesquisa = legumes.includes("Alface");
if(legumesPesquisa === false){
    console.log("Legume não encontrado");
}else{
    console.log("Legume encontrado!");
}

// indexof ( retorna um elemento por vez indicando sua posição no array)
// includes (retorna true ou false)