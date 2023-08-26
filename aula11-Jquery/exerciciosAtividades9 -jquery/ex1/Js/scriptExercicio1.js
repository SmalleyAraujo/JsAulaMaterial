
const resultadoDiv = document.querySelector("#resultadoDiv");
const numeroValue = document.querySelector("#numero");
var operadorSelecionado = document.querySelector("#operador");
//Eventos = addEventLintener 

$("#calcular").on("click", function(){

     var numeroValueInf = numeroValue.value;
     var operadorSelecionadoVal = operadorSelecionado.value;
      

     switch (operadorSelecionadoVal) {
          case "soma":
               for(let contador = 1; contador <= 10; contador++){
                    resultadoDiv.innerHTML += `${numeroValueInf} + ${contador} = ${parseInt(contador) + parseInt(numeroValueInf)}<br>`
                }
               break;

          case "subtracao":
               for(let contador = 1; contador <= 10; contador++){
                    resultadoDiv.innerHTML += `${numeroValueInf} - ${contador} = ${numeroValueInf - contador}<br>`
                }
               break;

          case "multiplicacao":
               for(let contador = 1; contador <= 10; contador++){
                    resultadoDiv.innerHTML += `${numeroValueInf} * ${contador} = ${numeroValueInf * contador}<br>`
                }
               break;

          case "divisao":
               for(let contador = 1; contador <= 10; contador++){
                    resultadoDiv.innerHTML += `${numeroValueInf} / ${contador} = ${numeroValueInf / contador}<br>`
                }
               break;          

          default:
               
               break;
     }
     
 })
 
  
