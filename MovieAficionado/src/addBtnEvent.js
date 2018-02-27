$(document).on("click", ".add-btn", function () {
    var favourites = favouritesDatabase.favourites;;;;;;
    var id = $(this).attr('id').split("-")[0];

    var buttonColorToRemove = "btn-outline-success";
    var buttonColorToAdd = "btn-outline-danger";
    var buttonMessage = "Added";

    $(this).removeClass(buttonColorToRemove);
    $(this).addClass(buttonColorToAdd);
    $(this).text(buttonMessage);
    $(this).attr("disabled", true);

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
    );
})