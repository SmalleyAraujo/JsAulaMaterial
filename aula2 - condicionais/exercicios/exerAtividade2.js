// IDADE IF SCRIPT
window.alert("Boa tarde, classificação por faixa etária de idade");
const idade = Number(window.prompt("Informe a sua idade: "));

if (idade < 0 || isNaN(idade)){
    window.alert("Idade Inválida");
    location.reload();
    //location - na localização atual/ reload - recarregue a página;
} else {
    if(idade >= 0  & idade < 15){
        window.alert("Criança");
        location.reload();  
    } else{
        if(idade >= 15 & idade < 30){
            window.alert("Jovem");
            location.reload(); 
        } else{
            if(idade >= 30 & idade < 60){
                window.alert("Adulto");
                location.reload();
            } else{
                window.alert("Idoso");
                location.reload();
            }
        }
        
    }
}

//OUTRA FORMA DE RESOLUÇÃO DA QUESTÃO
// window.alert("Boa tarde, classificação por faixa etária de idade");
// const idade = Number(window.prompt("Informe a sua idade: "));
 
// if( idade < 0){
//     window.alert("Idade Inválida, insira novamente a sua idade");
//     location.reload();
// }

// if( idade >= 0 & idade < 15){
//     window.alert("Usuário da faixa etária criança");
//     location.reload();
// }

// if( idade >= 15 & idade < 30){
//     window.alert("Usuário da faixa etária  jovem");
//     location.reload();
// }

// if( idade >= 30 & idade < 60){
//     window.alert("Usuário da faixa etária  adulto");
//     location.reload();
// }

// if( idade >= 60){
//     window.alert("Usuário da faixa etária  idoso");
//     location.reload();
// }


