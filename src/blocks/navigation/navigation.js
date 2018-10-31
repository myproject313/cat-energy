(function () {
    let navigationButton = document.querySelector(".navigation__button");
    let navigationBlockMenu = document.querySelector(".navigation__list");
    navigationButton.classList.remove("navigation__button_hidden");
    navigationBlockMenu.classList.add("navigation__list_hidden");
    navigationButton.addEventListener("click", (ev) => {
        ev.preventDefault();
        navigationButton.classList.toggle("opened");
        navigationBlockMenu.classList.toggle("navigation__list_hidden");
    });
})();