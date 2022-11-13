$(document).ready(function(){

    /*$(".foto").click(function(){
        $(".elemento").slideToggle("slow")
    })*/

    $(function(){
        $(".elemento").click(function(){
            $("elemento").removeClass("resaltado");
            $(this).addClass("resaltado")
        })
    })

    //PARA FILTRAR
    $("#mA").click(function(){
        $("div").filter("#mA").addClass("resaltado");
    })

    //BUSQUEDA DE CONTENIDO

    $("#tbxbuscar").on("keyup", function(){
        let valor=$(this).val().toLowerCase();
        $(".elemento").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(valor) > -1)
        })
    })  
})