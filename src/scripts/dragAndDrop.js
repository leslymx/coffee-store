function AddHandlers () {
    
    var coffeeimages = document.getElementsByClassName("productarticlewide");
    var shoppingCartDropZone = document.getElementById("shoppingcart");
    var shoppingCart = document.querySelectorAll("#shoppingcart ul")[0];

    for (var i = 0; i < coffeeimages.length; i++) {
        coffeeimages[i].addEventListener("dragstart", function (ev) {
            ev.dataTransfer.effectAllowed = 'copy';
            ev.dataTransfer.setData("Text", this.getAttribute("id"));
        }, false);
    }
}