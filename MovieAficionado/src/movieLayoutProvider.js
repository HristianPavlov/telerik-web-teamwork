var movieLayoutProvider = function(movie, movieid) {
    var poster = movie.Poster;

    if (poster == "N/A") {
        poster = "http://www.daleng.ca/wp-content/themes/graduate-pro/assets/uploads/no-featured-image-400x600.jpg"
    }


    return {
        html: function() {
            return  `<div class="container movie-layout">       
                        <img id="${movieid}-img" style="width:33%" src="${poster}"></img>
                        <div style="display:inline-block;top:0;width:65%;vertical-align:top;margin:0 auto">
                            <h1 id="${movieid}-title" style="text-align:center"><span>${movie.Title}</span></h1>
                            <p id="${movieid}-year"style="text-align:center"><b>Year:</b><span>${movie.Year}</span><p>
                            <p id="${movieid}-genre"style="text-align:center"><b>Genre:</b><span>${movie.Genre}</span><p>
                            <p style="text-align:center"><b>Director:</b> ${movie.Director}<p>
                            <p style="text-align:center"><b>Plot:</b> ${movie.Plot}<p>
                            <p style="text-align:center"><b>Awards:</b> ${movie.Awards}<p>                            
                        </div>
                        <div id="add-to-fav">
                            <button id="${movieid}-add-btn" class="btn btn-danger add-btn">Add to Favorites</button>
                        </div> 
                    </div>`;
        }
    }
};


