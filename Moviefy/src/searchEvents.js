$(document).ready(function(){
    $("#button1").click(searchFunction);
});

$(document).ready(function(){    
    $("#input1").bind("enterKey", searchFunction);

    $("#input1").keyup(function(e){
        if(e.keyCode == 13 && $(this).val() !== "") // enter key code
        {
            $(this).trigger("enterKey");
        }
    });
});

var searchFunction = function(data) {
    var inputString = $("#input1").val();
    var yearInput = $("#yearInput").val();     
    var searchString = encodeURIComponent(inputString.trim(' '));
    var url = `http://www.omdbapi.com/?s=${searchString}&y=${yearInput}&apikey=50091ff1`;
    $('#div1').html(""); //clear layout tag

    $.get(url, function(data){
        if (data.Response == "True"){
            const movies = data.Search;
            
            for (let i = 0; i < movies.length; i++) {
                const movieId = movies[i].imdbID;
                const newUrl = `http://www.omdbapi.com/?i=${movieId}&apikey=50091ff1`;
                console.log(movieId);

                $.get(newUrl, function(movie){
                    $("#div1").append(movieLayoutProvider(movie).html());
                });
            }

        } else {
            alert(`No results found for: ${inputString}`)
        }
    });
}