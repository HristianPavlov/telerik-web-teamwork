var cinemaLayoutProvider = function(){
    return {
        html:  `<div id ="cinemas">
                <div id="map">
                   <iframe
                       width="400"
                       height="400"
                       frameborder="0" style="border:1"
                       src="https://www.google.com/maps/embed/v1/search?key=AIzaSyAdGekSAiTcNIrNGwC282jGgajbs0dbSzw&q=cinemas+in+Sofia,+Bulgaria" allowfullscreen>
                   </iframe>
                </div>
                    <div id="locations">
                    <div id="zapad">
                       <img src="https://www.kinoarena.com/uploads/media/stenik_cinemas/0001/02/thumb_1087_stenik_cinemas_listing.jpeg">
                       <h3>Кино Арена Запад</h3>
                       <p>гр. София, Западен парк, бул. Тодор Александров 64</p>
                       <p>Телефон: 0893457175</p>
                   </div>
                   <div id="mladost">
                       <img src="https://cache2.24chasa.bg/Images/Cache/410/Image_178410_126.jpg">
                       <h3>Кино Арена Младост</h3>
                       <p>гр. София, ж.к. Младост 4,ул. Бизнес парк 3</p>
                       <p>Телефон: 0893457176</p>
                   </div>
                   <div id="imax">
                       <img src="https://cache2.24chasa.bg/Images/Cache/586/Image_1169586_126.jpg">
                       <h3>Cinemacity Imax</h3>
                       <p>гр. София, улица „Александър Стамболийски“ 101</p>
                       <p>Телефон: 029292929</p>
                   </div>
                   </div>
                </div>`
    }
}

var mapLayoutMladost = function(){
    return{
        html : '<iframe width="400" height="400" frameborder="0" style="border:1" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAdGekSAiTcNIrNGwC282jGgajbs0dbSzw&q=Kino+Arena+IMAX+Mladost" allowfullscreen></iframe>'
    }
}

var mapLayoutZapad = function(){
    return{
        html: '<iframe width="400" height="400" frameborder="0" style="border:1" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAdGekSAiTcNIrNGwC282jGgajbs0dbSzw&q=Arena+Sofia+West" allowfullscreen></iframe>'
    }
}

var mapLayoutIMAX = function(){
    return{
        html: '<iframe width="400" height="400" frameborder="0" style="border:1" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAdGekSAiTcNIrNGwC282jGgajbs0dbSzw&q=Cinema+City+IMAX" allowfullscreen></iframe>'
    }
}