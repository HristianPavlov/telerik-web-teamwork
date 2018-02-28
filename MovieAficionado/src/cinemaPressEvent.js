$(document).on(`click`,`#mladost`,function(){
    $("#map").html("");
    var html = mapLayoutMladost().html;
    $("#map").html(html);  
})

$(document).on(`click`,`#zapad`,function(){
    $("#map").html("");
    var html = mapLayoutZapad().html;
    $("#map").html(html);  
})

$(document).on(`click`,`#imax`,function(){
    $("#map").html("");
    var html = mapLayoutIMAX().html;
    $("#map").html(html);  
})

