var carouselLayoutProvider = function (info) {
    if(info=== "movies"){
    var img1 = posterDataBase().movies[0].url;
    var img2 = posterDataBase().movies[1].url;
    var img3 = posterDataBase().movies[2].url;
    var img4 = posterDataBase().movies[3].url;
    }
    else if(info=== "games"){  
     img1 = posterDataBase().games[0].url;
     img2 = posterDataBase().games[1].url;
     img3 = posterDataBase().games[2].url;
     img4 = posterDataBase().games[3].url;
    }
    else if(info=== "series"){
     img1 = posterDataBase().series[0].url;
     img2 = posterDataBase().series[1].url;
     img3 = posterDataBase().series[2].url;
     img4 = posterDataBase().series[3].url;
    }
    return {
        html:   `<div class="row">
                <div class="col-md-10 offset-1">
                    <div id="demo" class="carousel slide" data-ride="carousel">

                        <!-- Indicators -->
                        <ul class="carousel-indicators">
                            <li data-target="#demo" data-slide-to="0" class="active"></li>
                            <li data-target="#demo" data-slide-to="1"></li>
                            <li data-target="#demo" data-slide-to="2"></li>
                        </ul>

                        <!-- The slideshow -->
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="${img1}" alt="Los Angeles" width="1100" height="500">
                            </div>
                            <div class="carousel-item">
                                <img src="${img4}" alt="Chicago" width="1100" height="500">
                            </div>
                            <div class="carousel-item">
                                <img src="${img3}" alt="New York" width="1100" height="500">
                            </div>
                        </div>

                        <!-- Left and right controls -->
                        <a class="carousel-control-prev" href="#demo" data-slide="prev">
                            <span class="carousel-control-prev-icon"></span>
                        </a>
                        <a class="carousel-control-next" href="#demo" data-slide="next">
                            <span class="carousel-control-next-icon"></span>
                        </a>
                    </div>
                </div>
            </div>`
    };
};