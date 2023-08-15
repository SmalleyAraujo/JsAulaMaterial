// getElementById("teste") faz busca pelo elemnto com ID teste
// addEventListener é o unico que já espera uma função então não precisa colocar a função entre parenteses.

const divTexto = document.getElementById("texto");


divTexto.addEventListener('mouseenter', entraDiv);
divTexto.addEventListener('mouseout', function(){
    divTexto.style.backgroundColor = "white";
});

function entraDiv(){
    divTexto.style.backgroundColor = "yellow";    
}

function contadorCaracteres(){
    var contador = document.getElementById("texto").value.length;
    
    if (contador <= 3 ){
        divTexto.style.backgroundColor = "green";
       
    }
    else{
        divTexto.style.backgroundColor = "red";
    }

        
}