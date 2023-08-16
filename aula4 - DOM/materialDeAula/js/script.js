// getElementById("teste") faz busca pelo elemnto com ID teste
// addEventListener é o unico que já espera uma função então não precisa colocar a função entre parenteses.

const divTeste = document.getElementById("teste");

divTeste.addEventListener('click', alerta);
divTeste.addEventListener('mouseenter', entraDiv);
divTeste.addEventListener('mouseout', function(){
    divTeste.style.backgroundColor = "red";
    divTeste.style.color = "white";    
    divTeste.innerHTML = "<h4>Você saiu da div!</h4>";

});
// exemplo de function anônima acima mouseout  

function alerta(){
    window.alert("Você clicou na div!");
}

function entraDiv(){
    divTeste.style.backgroundColor = "green";
    divTeste.style.color = "black";
    // divTeste.style.width = "300px";
    // divTeste.style.margin = "300px";
    // divTeste.innerText = "Você entrou na div!";
    divTeste.innerHTML = "<h4>Você entrou na div!</h4>"

}