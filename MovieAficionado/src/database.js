var posterDataBase = function () {
    return {

        movies: [                      
            
            {
                url: "https://wallpaperscraft.com/image/thor_the_dark_world_chris_hemsworth_thor_93055_1920x1080.jpg",
                title: 'Thor1'
              
            },
            {
                url: "https://www.quirkybyte.com/wp-content/uploads/2017/01/ironman.jpg",
                title: 'Thor2'
              
            },
            {
                url: "http://www.indiewire.com/wp-content/uploads/2018/01/black-panther.jpg",
                title: 'Thor3Fuckyouuuuuuu'
              
            },
            {
                url:  "https://espngrantland.files.wordpress.com/2012/08/white-men-cant-jump-features.jpeg?w=1920",
                title: 'Halloween'
              
            }

        ],

        games: [

        ],

        series: [

        ]
    }
}

var favouritesDatabase = function () {
    var favourites = [
        {
            Title: "Fucking",
            Year: "1999",
            Genre: "Action"
        },
        {
            Title: "Fucking v2",
            Year: "2001",
            Genre: "Drama"
        }
    ]

    var addMovie = function(movie) {
        favourites.push(movie);
    }

    return {
        favourites,
        addMovie
    }
};