(function () {
    let noJs = document.querySelector("body");
    let navigationButton = document.querySelector(".navigation__button");
    let navigationSection = document.querySelector(".navigation");
    noJs.classList.remove("no-js");
    navigationButton.addEventListener("click", (ev) => {
        ev.preventDefault();
        navigationSection.classList.toggle("opened");
    });
})();