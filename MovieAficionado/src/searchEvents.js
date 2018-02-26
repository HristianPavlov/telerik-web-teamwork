$(document).on("click", "#go-btn", function () {
    searchFunction();
});

$(document).on("keyup", "#search-input", function (e) {
    $("#search-input").bind("enterKey", searchFunction);
    if (e.keyCode == 13 && $(this).val() !== "") // enter key code
    {
        $(this).trigger("enterKey");
    }
});

var searchFunction = function (data) {
    var inputString = $("#search-input").val();
    var searchString = encodeURIComponent(inputString.trim(' '));
    var url = `http://www.omdbapi.com/?s=${searchString}&apikey=50091ff1`;
    $('#results').html(""); //clear layout tag

    $.get(url, function (data) {
        if (data.Response == "True") {
            const movies = data.Search;

            for (let i = 0; i < movies.length; i++) {
                const movieId = movies[i].imdbID;
                const newUrl = `http://www.omdbapi.com/?i=${movieId}&apikey=50091ff1`;
                console.log(movieId);

                $.get(newUrl, function (movie) {
                    $("#results").append(movieLayoutProvider(movie).html());
                });
            }

        } else {
            alert(`No results found for: ${inputString}`)
        }
    });
}