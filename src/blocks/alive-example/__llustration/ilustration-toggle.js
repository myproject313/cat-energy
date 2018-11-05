(function () {
    var sectionIlustration = document.querySelector(".alive-example__llustration");
    var beforeButton = document.querySelector("#button-before");
    var afterButton = document.querySelector("#button-after");
    beforeButton.addEventListener("click",  function(ev) {
        ev.preventDefault();
        sectionIlustration.classList.remove("toggle-switch");
    });
    afterButton.addEventListener("click",  function(ev) {
        ev.preventDefault();
        sectionIlustration.classList.add("toggle-switch");
    });
})();