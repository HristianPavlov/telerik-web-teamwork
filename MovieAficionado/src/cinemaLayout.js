var cinemaLayoutProvider = function(){
    return {
        html:  `<div id="map">
                   <iframe
                       width="400"
                       height="400"
                       frameborder="0" style="border:1"
                       src="https://www.google.com/maps/embed/v1/search?key=AIzaSyAdGekSAiTcNIrNGwC282jGgajbs0dbSzw&q=cinemas+in+Sofia,+Bulgaria" allowfullscreen>
                   </iframe></div>

<div>
                       <img src="https://www.kinoarena.com/uploads/media/stenik_cinemas/0001/02/thumb_1087_stenik_cinemas_listing.jpeg">
                       <h3>Кино Арена Запад</h3>
                       <p>гр. София, Западен парк, бул. Тодор Александров 64</p>
                       <p>Телефон: 0893457175</p>
                   </div>`
    }
}