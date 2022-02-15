const leftBtn = document.querySelector(".card__btn-left");
const rightBtn = document.querySelector(".card__btn-right");
let slidePos = 0;

leftBtn.addEventListener("click", () => plusSlides(-1));
rightBtn.addEventListener("click", () => plusSlides(1));
window.addEventListener("keydown", event => {
    if (event.key == 'a' || event.key == 'A') plusSlides(-1);
    else if (event.key == 'd' || event.key == 'D') plusSlides(1);
})

// Modify slidePos and feed it to slideShow function
function plusSlides(n) {
    slideShow(slidePos += n);
}

// Changes images and text as buttons are clicked
function slideShow(n) {

    // Get the elements containing the text and images
    const userTests = document.querySelectorAll(".card__testimonial");
    const userImgs = document.querySelectorAll(".card__img");

    // If slidePos exceeds number of images/text to slide through,
    // reset it (loop back to first one)
    if (n == userTests.length) slidePos = 0;

    // If slidePos goes below 0, wrap it around, showing the 
    // last image/text of the slideshow instead
    if (n < 0) slidePos = userTests.length - 1;

    // Remove all images/text from being displayed
    for (let i = 0; i < userTests.length; i++) {
        userTests[i].style.display = 'none';
        userImgs[i].style.display = 'none';
    }

    // Put on display again the text/image whose index is slidePos
    // and add the class that enables the fade animation to reset it
    userTests[slidePos].style.display = 'block';
    userTests[slidePos].classList.add("fade-animation");

    userImgs[slidePos].style.display = 'block';
    userImgs[slidePos].classList.add("fade-animation");
}

slideShow(slidePos);

/*
TO-DO:
1. Documentation
    - Write README.md file
2. Try to find way to anchor background images of body to card
    - Prevents tweaking of size and position every time view width changes
3. Figure out how to account for changes in vertical height
*/