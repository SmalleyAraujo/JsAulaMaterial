//quantidade dinamica
var areaTexto = $("#textoArea");
var numeroPalavras = $("#numeroPalavras");
var numeroCaracteres = $("#numeroCaracteres");

//on = addEventLintener 
areaTexto.on('input', function(){
    let areaTextoValor = areaTexto.val()
    var quantidadeDePalavras = areaTextoValor.split(" ").length;
    numeroPalavras.text(quantidadeDePalavras);

    var quantidadeDeCaracteres = areaTextoValor.length;
    numeroCaracteres.text(quantidadeDeCaracteres);

})

