$(document).on("click", "#favourite-a", function(){
    var db = favoritesDataBase.ids;
    for (let i = 0; i < db.length; i++) {
        const movieId = db[i];
        const newUrl = `http://www.omdbapi.com/?i=${movieId}&apikey=50091ff1`;
        $.get(newUrl, function (movie) {
            $("#results").append(movieLayoutProviderFav(movie, movieId).html());
        });
    }
})