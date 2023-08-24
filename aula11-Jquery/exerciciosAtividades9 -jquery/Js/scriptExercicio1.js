//1) Fazer um script de tabuada sendo que o usuario possa escolher de 1 a 10
//entrada de dados
const inputNumero = document.querySelector("#numero");
const btnSoma = document.querySelector("#btnSoma");
const btnSubtracao = document.querySelector("#btnSubtracao");
const btnMultiplicacao = document.querySelector("#btnMultiplicacao");
const btnDivisao = document.querySelector("#btnDivisao");

//Eventos = addEventLintener 
btnSoma.addEventListener('click', calcular); 
btnSubtracao.addEventListener('click', calcular);  
btnMultiplicacao.addEventListener('click', calcular);  
btnDivisao.addEventListener('click', calcular);  


// calculos das funções 

function calcular(){

   switch{
    case 1:
        
   }

    var contador = 0; 
    while (contador < 10){    
        contador++
        let resultado = btnSoma * contador;    
        console.log(`${contador} x  = ${resultado}`);
        
        
    }

    }
    

}




 
//  var cartaoEscondido = nCartao.padStart(12,"*");
// document.getElementById("concatenacaoExemplo").innerHTML = cartaoEscondido;

