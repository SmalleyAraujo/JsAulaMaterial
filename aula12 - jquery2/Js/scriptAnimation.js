$("#aumentar").on("click", function(){
    $("#caixa").animate({width: "500px",height: "500px",  borderRadius: "0%"})
})

$("#diminuir").on("click", function(){
    $("#caixa").animate({width: "300px"}).animate({height: "300px", borderRadius: "100%"})
})

//obs border cases border-raius / borderRadius

$("#direita").on("click", function(){
    $("#caixa").animate({marginLeft: "500px", rotate: "360deg"},{duration:2000,complete : ()=>{alert("Me contrata :)")}})
})

$("#esquerda").on("click", function(){
    $("#caixa").animate({marginLeft: "0px", rotate: "-360deg", marginTop: "500px"},{duration:2000})
})

$("#sumir").on("click", function(){
    // $("#caixa").fadeOut(600)
    // $("#caixa").slideUp(500)
    $("#caixa").hide(2000)
})

$("#aparecer").on("click", function(){
    // $("#caixa").fadeIn(600)
    // $("#caixa").slideDown(500)
    $("#caixa").show(2000)
})

$("#trocar").on("click", function(){    
    // $("#caixa").fadeToggle(500)
     $("#caixa").slideToggle(500)
})

$("#desativar").on("click", function(){    
    
     $("#caixaDeTexto").attr("disabled","true")
     $("#caixaDeTexto").attr("placeholder","Esse sujeito está desativado!")
     $("#caixaDeTexto").attr("value","Esse sujeito está desativado!")     
     //insere um atributo no HTML
     $("#caixaDeTexto").css("backgroundColor","gray")
     $("#caixaDeTexto").css("color","white")
     $("#caixaDeTexto").css("border","none")
     $("#caixaDeTexto").css("borderRadius","10px")
     $("#caixaDeTexto").css("height", "30px")
     //insere um style no css
})

