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

function validar(){
    var texto = document.querySelector('#texto').value;
    
    if (texto.length === 3 ){
       divTexto.style.backgroundColor = "red"
       
    }
    else{
        window.alert("Email ou senha incorretos! Insira as informações novamente")
    }

        
}