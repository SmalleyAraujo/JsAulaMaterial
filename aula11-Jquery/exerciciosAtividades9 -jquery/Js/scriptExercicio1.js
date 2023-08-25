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

function calcular(x){
     let inputNumero = document.querySelector("#numero").value;

     if(x == btnSoma ){
          opcao = btnSoma;
     }else{
          if(x == btnSubtracao){
               opcao = btnSubtracao;  
          }else{
               return `Nada`;
          }
     }
     
     switch (opcao) {
          case btnSoma:
               var contador = 0; 
               let total = 0;
               while (contador < 10){                       
                   contador++
                   total = parseInt(inputNumero) + parseInt(contador);
                   console.log(`${inputNumero} + ${contador} = ${total}`) 
                   resultado.style.display ="flex";              
                   resultado.innerHTML = `${inputNumero} + ${contador} = ${total}`;          
                            
               }
               
               break;
     
          default:
               break;
     }
    
     



         
         
     

}




   
    
   

    

    
    





 
//  var cartaoEscondido = nCartao.padStart(12,"*");
// document.getElementById("concatenacaoExemplo").innerHTML = cartaoEscondido;

