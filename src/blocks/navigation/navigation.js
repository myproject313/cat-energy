(function () {
    var noJs = document.querySelector("body");
    var navigationButton = document.querySelector(".navigation__button");
    var navigationSection = document.querySelector(".navigation");
    noJs.classList.remove("no-js");
    navigationButton.addEventListener("click",  function(ev) {
        ev.preventDefault();
        navigationSection.classList.toggle("opened");
    });
    window.onkeydown = function( event ) {
        if(navigationSection.classList.contains("opened")) {
            if ( event.keyCode == 27 ) {
                event.preventDefault();
                navigationSection.classList.toggle("opened");
            }
        }
    };
})();