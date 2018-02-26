var favouriteMoviesLayoutProvider = function () {
    var moviesTableLayoutProvider = function (movie) {
        return {
            html: `<tr>
                        <td>${movie.Title}</td>
                        <td>${movie.Genre}</td>
                        <td>${movie.Year}</td>
                        <td>
                            <button type="button" class="btn btn-outline-danger rmv-btn">Remove</button>
                        </td>
                    </tr>`
        };
    };

    var favourites = favouritesDatabase().favourites;
    var moviesTableLayout = favourites.map(movie => moviesTableLayoutProvider(movie).html);
    var resultHtml = moviesTableLayout.join("");

    return {
        html:   `<div class="container">
                    <table class="table table-striped table-light align-center">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Genre</th>
                                <th>Year</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody id="tbody-f">
                        ${resultHtml}
                        </tbody>
                    </table>
                </div>`
    };
};