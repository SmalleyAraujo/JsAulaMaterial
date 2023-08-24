// jQuery("." ou "#") - seletor do jquery
// jQuery = $ (versão resumida)

// var paragrafoLorem = jQuery("#paragrafoLorem").text("Olha que bacana");
// console.log(paragrafoLorem)

var paragrafoLorem = $("#paragrafoLorem").text();

// text() - lista o valor
// texto ("ELEMENTO") - sobrenome o valor
// const usuario = "Victor";
const usuario = undefined;
var usuarioHtml = $("#username").text(usuario);

console.log(usuarioHtml)

// var quantidadeDePalavras = paragrafoLorem.split(" ").length;
// split() ele vai pegar o texto e picotar ele como um array, porém, por letra para definir com palavra precisa colocar spaço ente as aspas split(" ").


//quantidade dinamica
var areaTexto = $("#areaTexto");
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

$("#btn").on('mouseenter',function(){
    areaTexto.addClass("temaEscuro")
})

$("#btn").on('mouseout',function(){
    areaTexto.removeClass("temaEscuro")
    areaTexto.addClass("temaClaro")
})