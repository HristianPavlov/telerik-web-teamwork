$(document).on("click", "#add-btn", function(){
    var database = favoritesDataBase.ids;
    var id = this.className.split(" ")[2];
    if(database.indexOf(id) > -1){
        alert("Already in favourites!");
    }
    else{
        database.push(id);
    }
})