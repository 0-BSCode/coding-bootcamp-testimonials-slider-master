const leftBtn = document.querySelector(".card__btn-left");
const rightBtn = document.querySelector(".card__btn-right");
let slidePos = 0;

leftBtn.addEventListener("click", () => plusSlides(-1));
rightBtn.addEventListener("click", () => plusSlides(1));
window.addEventListener("keydown", event => {
    if (event.key == 'a' || event.key == 'A') plusSlides(-1);
    else if (event.key == 'd' || event.key == 'D') plusSlides(1);
})

function plusSlides(n) {
    slideShow(slidePos += n);
}

function slideShow(n) {
    const userTests = document.querySelectorAll(".card__testimonial");
    const userImgs = document.querySelectorAll(".card__img");
    console.log(userImgs);
    if (n == userTests.length) slidePos = 0;
    if (n < 0) slidePos = userTests.length - 1;
    for (let i = 0; i < userTests.length; i++) {
        userTests[i].style.display = 'none';
        userImgs[i].style.display = 'none';
    }

    userTests[slidePos].style.display = 'block';
    userTests[slidePos].classList.add("fade-animation");

    userImgs[slidePos].style.display = 'block';
    userImgs[slidePos].classList.add("fade-animation");
}

slideShow(slidePos);

/*
TO-DO:
1. Documentation
    - Comment JS script
    - Write README.md file
2. Try to find way to anchor background images of body to card
    - Prevents tweaking of size and position every time view width changes
3. Figure out how to account for changes in vertical height
*/