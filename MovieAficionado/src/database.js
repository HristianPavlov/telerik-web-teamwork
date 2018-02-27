var posterDataBase = function () {
    return {

        movies: [
            "https://wallpaperscraft.com/image/thor_the_dark_world_chris_hemsworth_thor_93055_1920x1080.jpg",
            "https://www.quirkybyte.com/wp-content/uploads/2017/01/ironman.jpg",
            "http://www.indiewire.com/wp-content/uploads/2018/01/black-panther.jpg",
            "https://espngrantland.files.wordpress.com/2012/08/white-men-cant-jump-features.jpeg?w=1920",

        ],

        games: [

        ],

        series: [

        ]
    }
}

var favouritesDatabase = (function (){
    var favourites = {
        "sdasda" :{
            Title: "Fucking",
            Year: "1999",
            Genre: "Action"
        },
        "dsadas" :{
            Title: "Fucking v2",
            Year: "2001",
            Genre: "Drama"
        }
    };

    var addMovie = function(movie) {
        favourites.set(movie.imdbID, {Title: movie.Title,Year: movie.Year, Genre: movie.Genre})
    }

    var removeMovie = function(id) {
        favourites.delete(id);
    }
    return {
        favourites,
        addMovie
    }
}());