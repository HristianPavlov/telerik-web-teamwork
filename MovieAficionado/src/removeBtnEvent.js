$(document).on("click", ".rmv-btn",function(){
    // var db = favouritesDatabase.movies;
    // var id = this.className.split(" ")[2];
    // console.log(id);
    // var index = db.indexOf(id);
    // db.splice(index, 1);
    // $('#results').html("");
    // for (let i = 0; i < db.length; i++) {
    //     const movieId = db[i];
    //     const newUrl = `http://www.omdbapi.com/?i=${movieId}&apikey=50091ff1`;
    //     $.get(newUrl, function (movie) {
    //         $("#results").append(movieLayoutProviderFav(movie, movieId).html());
    //     });
    // }

    $(".rmv-btn").parent().parent().addClass("hidden");
})