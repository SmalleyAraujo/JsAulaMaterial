const empregado = document.getElementById("empregado");
const filho = document.getElementById("filho");
const salario = document.querySelector("#salario");
const btnCarcular = document.querySelector("#calcular");
const resposta = document.getElementById("resultado");

btnCarcular.addEventListener('click', calcular );

function calcular(){
    if (empregado.value === ""){
        window.alert("Preencha o campo do nome corretamente!");
    }
    else{
        if(filho.value === ""){
            window.alert("Preencha o campo do filho corretamente!");
        } else{
            if(salario.value === ""){
                window.alert("Preencha o campo do salario corretamente!");
            }
            else{
                if(salario.value <= 806.80){
                    familia = filho.value * 41.37;
                }
                else{
                    if(salario.value >= 806.81 & salario.value <= 1212.64){
                        familia = filho.value * 29.16;
                    }
                    else{
                        familia = 0;
                    }
                }
                resposta.style.display ="flex";
                resposta.innerText =`${empregado.value}, o salario familia é de : ${familia}`;
                // window.alert(`${empregado.value}, o salario familia é de : ${familia}`);
            }

        }
        
    }
}