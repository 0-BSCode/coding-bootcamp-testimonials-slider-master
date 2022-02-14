const testInfo = {
    "text": ["\“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. \”", 
        "\“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. \”"],
    "name": ["Tanya Sinclair", "John Tarkpor"],
    "occupation": ["UX Engineer", "Junior Front-end Developer"],
    "picture": ["url(\"../images/image-tanya.jpg\")", "url(\"../images/image-john.jpg\")"]
}

const userPar = document.querySelector(".card__paragraph");
const userName = document.querySelector(".card__user");
const userCareer = document.querySelector(".card__user-career");
const userImg = document.querySelector(".card__img");
const leftBtn = document.querySelector(".card__btn-left");
const rightBtn = document.querySelector(".card__btn-right");
let userCtr = 0;

leftBtn.addEventListener("click", switchTestimonial);
rightBtn.addEventListener("click", switchTestimonial);

function switchTestimonial() {
    console.log(this.getAttribute("id"));
    if (this.getAttribute("id") == "left") userCtr--;
    else userCtr++;

    userCtr = Math.abs(userCtr) % 2;

    userPar.textContent = testInfo["text"][userCtr];
    userName.textContent = testInfo["name"][userCtr];
    userCareer.textContent = testInfo["occupation"][userCtr];
    userImg.style.backgroundImage = testInfo["picture"][userCtr];

}