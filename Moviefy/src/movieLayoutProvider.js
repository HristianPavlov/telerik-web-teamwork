var movieLayoutProvider = function(movie) {
    var poster = movie.Poster;

    if (poster == "N/A") {
        poster = "http://www.daleng.ca/wp-content/themes/graduate-pro/assets/uploads/no-featured-image-400x600.jpg"
    }


    return {
        html: function() {
            return  `<div class="container movie-layout">       
                        <img style="width:33%" src="${poster}"></img>
                        <div style="display:inline-block;top:0;width:65%;vertical-align:top;margin:0 auto">
                            <h1 style="text-align:center">${movie.Title}</h1>
                            <p style="text-align:center"><b>Year:</b> ${movie.Year}<p>
                            <p style="text-align:center"><b>Type:</b> ${movie.Type}<p>\
                        </div>
                    </div>`;
        }
    }
};