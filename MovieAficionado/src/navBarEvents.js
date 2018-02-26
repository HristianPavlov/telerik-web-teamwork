$(document).ready(function(){
    $("#newest-a").click(function(){
        $('#results').html("");
        var html = carouselLayoutProvider().html;
        $("#main-container").html(html);
        $("#home-a").parent().removeClass("active");
        $("#favourite-a").parent().removeClass("active");
        $("#cinemas-a").parent().removeClass("active");
        
        $(this).parent().addClass("active");
    })
})

$(document).ready(function(){
    $("#favourite-a").click(function(){
        $('#results').html("");
        $("#main-container").html("");
        $("#home-a").parent().removeClass("active");
        $("#newest-a").parent().removeClass("active");
        $("#cinemas-a").parent().removeClass("active");
        
        $(this).parent().addClass("active");
    })
})

$(document).ready(function(){
    $("#cinemas-a").click(function(){
        $('#results').html("");
        $("#main-container").html("");
        $("#home-a").parent().removeClass("active");
        $("#favourite-a").parent().removeClass("active");
        $("#newest-a").parent().removeClass("active");
        
        $(this).parent().addClass("active");
    })
})

$(document).ready(function(){
    $("#home-a").click(function(){
        $('#results').html("");
        var html = homeLayoutProvider().html;
        $("#main-container").html(html);
        $("#newest-a").parent().removeClass("active");
        $("#favourite-a").parent().removeClass("active");
        $("#cinemas-a").parent().removeClass("active");
        
        $(this).parent().addClass("active");
    })
})

$(document).ready(function(){
    $("#search-btn").click(function(){
        $('#results').html("");
        var html = searchBarLayoutProvider().html;
        $("#main-container").html(html);
        $("#newest-a").parent().removeClass("active");
        $("#favourite-a").parent().removeClass("active");
        $("#cinemas-a").parent().removeClass("active");       
        $("#home-a").parent().removeClass("active");
        
    })
})