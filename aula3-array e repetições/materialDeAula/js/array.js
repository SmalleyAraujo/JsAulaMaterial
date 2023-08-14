// var fruta1 = "morango"
// var fruta2 = "pessego"
// var fruta = "kiwi"

// ARRAY
// METODO 1 
var frutas = Array(); 
frutas[0] = "Morango";
frutas[1] = "Pêssego";
frutas[2] = "Kiwi";
frutas[3] = "Abacate";

console.log(frutas);

// Obs.: length: 4 (    ) 
// vamos em breve query selecto forma de implementar no DOM
 

// METODO 2
var legumes = ["Repolho", "Alface", "Cenoura", "Brócolis"];
console.log(legumes);
console.log(legumes[2]);

// COMANDOS DO ARRAY
//.push() para adicionar um novo elemento no fim do array
frutas.push("Uva");
console.log(frutas);

// ADICIONAR ELEMENTOS NO COMEÇO DO ARRAY
//.unshift esse elemento vai organizar todos os elementos 
frutas.unshift("Laranja");
console.log(frutas);

// REMOVER ELEMENTOS NO FIM DO ARRAY
frutas.pop();
console.log(frutas);

// REMOVER ELEMENTOS NO COMEÇO DO ARRAY
frutas.shift();


//ADICIONAR ELEMENTOS NO MEIO DO ARRAY
//splice ( indice, quantos indices ele vai sobrescrever o dados posteriores )
frutas.splice(2, 0 , "Abacaxi");
frutas.splice(3, 1 , "Goiaba");
frutas[0] = "Jabuticaba";
console.log(frutas);

//COPIAR ARRAY
var frutasBackp = frutas.slice();

// pequisar a variavel frutasBackp no console do navegar para visualizar 



