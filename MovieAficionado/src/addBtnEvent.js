$(document).on("click", ".add-btn", function(){
    var favourites = favouritesDatabase.favourites;;;;;;
    var id = $(this).attr('id').split("-")[0];
    if(favourites[id]){
        alert("Already in favourites!");
    }
    else{
        var title = $(`#${id}-title span`).text();
        var year = $(`#${id}-year span`).text();
        var genre = $(`#${id}-genre span`).text();
        favouritesDatabase.addMovie(
            {
                imdbID: id,
                Title: title,
                Year: year,
                Genre: genre
            }
        )
    }
})