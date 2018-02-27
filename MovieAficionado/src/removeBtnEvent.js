$(document).on("click", ".rmv-btn",function(){
    var favourites = favouritesDatabase.favourites;
    var id = $(this).attr('id').split("-")[0];
    favouritesDatabase.removeMovie(id);
    $(this).parent().parent().addClass("hidden");
})