
const resultadoDiv = document.querySelector("#resultadoDiv");
const numeroValue = document.querySelector("#numero");
var operadorSelecionado = document.querySelector("#operador");
//Eventos = addEventLintener 

$("#calcular").on("click", function(){
     let numeroValue = $("#numero").value;
     var operadorSelecionadoVal = operadorSelecionado.value;
      

     switch (operadorSelecionadoVal) {
          case "soma":
               for(let contador = 1; contador <= 10; contador++){
                    resultadoDiv.innerHTML += `${contador} + ${numeroValue} = ${contador + numeroValue}<br>`
                }
               break;
          case "subtracao":
               for(let contador = 1; contador <= 10; contador++){
                    resultadoDiv.innerHTML += `${contador} - ${numeroValue} = ${contador - numeroValue}<br>`
                }
               break;

          default:
               break;
     }
     
 })
 
  
