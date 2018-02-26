$(document).ready(function(){
    $("#main-container").html(homeLayoutProvider().html);
    
    $("#newest-a").click(function(){
        $('#results').html("");
        var html = carouselLayoutProvider().html;
        $("#main-container").html(html);
        $("#home-a").parent().removeClass("active");
        $("#favourite-a").parent().removeClass("active");
        $("#cinemas-a").parent().removeClass("active");
        
        $(this).parent().addClass("active");
        $('#results').html("");
    })



    $("#favourite-a").click(function(){
        $('#results').html("");
        $("#main-container").html("");
        $("#home-a").parent().removeClass("active");
        $("#newest-a").parent().removeClass("active");
        $("#cinemas-a").parent().removeClass("active");
        
        $(this).parent().addClass("active");
        $('#results').html("");
    })



    $("#cinemas-a").click(function(){
        $('#results').html("");
        $("#main-container").html("");
        $("#home-a").parent().removeClass("active");
        $("#favourite-a").parent().removeClass("active");
        $("#newest-a").parent().removeClass("active");
        
        $(this).parent().addClass("active");
        $('#results').html("");
    })



    $("#home-a").click(function(){
        $('#results').html("");
        var html = homeLayoutProvider().html;
        $("#main-container").html(html);
        $("#newest-a").parent().removeClass("active");
        $("#favourite-a").parent().removeClass("active");
        $("#cinemas-a").parent().removeClass("active");
        
        $(this).parent().addClass("active");
        $('#results').html("");
    })



    $("#search-btn").click(function(){
        $('#results').html("");
        var html = searchBarLayoutProvider().html;
        $("#main-container").html(html);
        $("#newest-a").parent().removeClass("active");
        $("#favourite-a").parent().removeClass("active");
        $("#cinemas-a").parent().removeClass("active");       
        $("#home-a").parent().removeClass("active");
        
        $('#results').html("");
    })
})