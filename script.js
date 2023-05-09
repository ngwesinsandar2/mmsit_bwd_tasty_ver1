const hamburgerContanierTag = document.querySelector(".hamburgerContanier");
const overLayMenuTag = document.querySelector(".overLayMenu")
const line1Tag = document.querySelector(".line1");
const line2Tag = document.querySelector(".line2");
const line3Tag = document.querySelector(".line3");
const liTags = document.getElementsByTagName("li");

hamburgerContanierTag.addEventListener("click", () => {
    if (hamburgerContanierTag.classList.contains("isOpened")) {
        line2Tag.classList.remove("hide");
        line1Tag.classList.remove("rotatePlus45");
        line3Tag.classList.remove("rotateMinus45");
        hamburgerContanierTag.classList.remove("isOpened");
        overLayMenuTag.classList.remove("showol");
        for (let i = 0; i < liTags.length; i++) {
            liTags[i].classList.remove("moveUp");
        };
    } else {
        line2Tag.classList.add("hide");
        line1Tag.classList.add("rotatePlus45");
        line3Tag.classList.add("rotateMinus45");
        hamburgerContanierTag.classList.add("isOpened");
        overLayMenuTag.classList.add("showol");
        for (let i = 0; i < liTags.length; i++) {
            liTags[i].classList.add("moveUp");
        };
    };
});