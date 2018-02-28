var posterDataBase = function () {
    return {

        movies: [                      
            
            {
                url: "https://wallpaperscraft.com/image/thor_the_dark_world_chris_hemsworth_thor_93055_1920x1080.jpg",
                title: 'Thor1'
              
            },
            {
                url: "https://www.quirkybyte.com/wp-content/uploads/2017/01/ironman.jpg",
                title: 'Iron Man'
              
            },
            {
                url: "http://www.indiewire.com/wp-content/uploads/2018/01/black-panther.jpg",
                title: 'Black Panther'
              
            },
            {
                url:  "https://espngrantland.files.wordpress.com/2012/08/white-men-cant-jump-features.jpeg?w=1920",
                title: 'White men can not jump'
              
            }

        ],

        games: [
            
            {
                url: "http://todaytop10.com/wp-content/uploads/2016/08/40263320-game-wallpapers-1920x1000.jpg",
                title: 'God of war'
              
            },
            {
                url: "https://damassets.autodesk.net/content/dam/autodesk/www/industries/media-entertainment/game-development/images/game-design-development-uncharted-1920x1000-credits.jpg",
                title: 'Uncharted 4'
              
            },
            {
                url: "https://i.ytimg.com/vi/D5pS9aMN3dQ/maxresdefault.jpg",
                title: 'Minecraft '
              
            },
            {
                url:  "https://s3-eu-central-1.amazonaws.com/vodafone-featured-live/wp-content/uploads/2017/07/17143512/knights_of_the_frozen_throne_tcg_trading-card-games_smartphone_android_ios_featured_vodafone-9.png",
                title: 'Knights of the frozen throne'
              
            }

        ],

        series: [
            
            {
                url: "http://s1.dmcdn.net/XCFfR.jpg",
                title: 'Wentworth'
              
            },
            {
                url: "https://static.comicvine.com/uploads/scale_super/12/123796/3063312-breaking-bad-season-5.jpg",
                title: 'Breaking Bad'
              
            },
            {
                url: "https://orig00.deviantart.net/8a22/f/2017/060/e/6/ncis_los_angeles___temporada_8___aye_latinoamerica_by_ncislosangeleslatino-db0tu3a.jpg",
                title: 'NCIS'
              
            },
            {
                url:  "https://www.technobuffalo.com/wp-content/uploads/2016/01/Street-Fighter-V-Story-10.jpg",
                title: 'Street Fighter'
              
            }

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
        favourites[movie.imdbID] = {Title: movie.Title,Year: movie.Year, Genre: movie.Genre};
    }

    var removeMovie = function(id) {
        delete favourites[id];
    }
    return {
        favourites,
        addMovie,
        removeMovie
    }
}());