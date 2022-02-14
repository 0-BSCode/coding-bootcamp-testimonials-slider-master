const testInfo = {
    "text": ["\“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. \”", 
        "\“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. \”"],
    "name": ["Tanya Sinclair", "John Tarkpor"],
    "occupation": ["UX Engineer", "Junior Front-end Developer"],
    "picture": ["url(\"../images/image-tanya.jpg\")", "url(\"../images/image-john.jpg\")"]
}

// const userPar = document.querySelector(".card__paragraph");
// const userName = document.querySelector(".card__user");
// const userCareer = document.querySelector(".card__user-career");
const leftBtn = document.querySelector(".card__btn-left");
const rightBtn = document.querySelector(".card__btn-right");
let slidePos = 0;

leftBtn.addEventListener("click", () => plusSlides(-1));
rightBtn.addEventListener("click", () => plusSlides(1));

function plusSlides(n) {
    slideShow(slidePos += n);
}

function slideShow(n) {
    console.log("Slide Pos: " + n);
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

