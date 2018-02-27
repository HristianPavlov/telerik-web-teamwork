$(document).on("click", ".add-btn", function(){
    var favourites = favouritesDatabase.favourites;;;;;;
    var id = $(this).attr('id').split("-")[0];
    if(favourites[id]){
        alert("Already in favourites!");
    }
    else{
        var title = $(`#${id}-title`).html();
        var year = $(`#${id}-year span`).html();
        var genre = $(`#${id}-genre span`).html();

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