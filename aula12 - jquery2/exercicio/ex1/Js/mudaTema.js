const mudaTema = $("#mudaTema")
const paginaTotal = $("#pagina")
const header1 = $("#header")
const textoArea = $("#textoArea")




mudaTema.on("click", function(){
      
    if(mudaTema.hasClass("temaLight")){
            // window.alert("Oi");
            mudaTema.removeClass("temaLight");
            mudaTema.addClass("temaDark");
            paginaTotal.removeClass("temaLight")
            paginaTotal.addClass("temaDark")
            header1.removeClass("temaLight")
            header1.addClass("temaDark")
            textoArea.removeClass("temaLight")
            textoArea.addClass("temaDark")              
        
    }else{
        mudaTema.removeClass("temaDark");
        mudaTema.addClass("temaLight");
        paginaTotal.removeClass("temaDark")
        paginaTotal.addClass("temaLight")
        header1.removeClass("temaDark")
        header1.addClass("temaLight")
        textoArea.removeClass("temaDark")
        textoArea.addClass("temaLight")
    }
})

