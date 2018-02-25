$(document).ready(function(){
    $("#button1").click(function(){
        var inputString = $("#input1").val();
        var searchString = encodeURIComponent(inputString.trim(' '));
        var url = `http://www.omdbapi.com/?s=${searchString}&apikey=50091ff1`;

        $.get(url, function(data){
            if (data.Response == "True"){ 
                const layoutProvider = movieLayoutProvider(data.Search[0]);
                const html = layoutProvider.html();
                $("#div1").html(html);
            } else {
                alert(`No reuslts found for: ${inputString}`)
            }
        });
    });
});


$(document).ready(function(){    
    $("#input1").bind("enterKey",function(e){
        var inputString = $(this).val();         
        var searchString = encodeURIComponent(inputString.trim(' '));
        var url = `http://www.omdbapi.com/?s=${searchString}&apikey=50091ff1`;

        $.get(url, function(data){
            if (data.Response == "True"){ 
                var html = data.Search.map(x => movieLayoutProvider(x).html());                
                $("#div1").html(html);
            } else {
                alert(`No reuslts found for: ${inputString}`)
            }
        });
    });
    $("#input1").keyup(function(e){
        if(e.keyCode == 13 && $(this).val() !== "") // enter key code
        {
            $(this).trigger("enterKey");
        }
    });
});

