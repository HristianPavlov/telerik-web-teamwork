$("#fav").on("click", function(){

    var db = favorites();
    var movieIDs = db.movies;

    for (let i = 0; i < movieIDs.length; i++) {
        const movieId = movieIDs[i];
        const newUrl = `http://www.omdbapi.com/?i=${movieId}&apikey=50091ff1`;
        console.log(movieId);
        $('#div1').html("");
        $.get(newUrl, function(movie){
            $("#div1").append(movieLayoutProviderFav(movie).html());
        });
    }
});