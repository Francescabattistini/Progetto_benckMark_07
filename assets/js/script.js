const star = '<img class="disable-star" src="assets/img/star.svg"/>';
const starsContainer = document.getElementById("feedback-stars-container");

for (let i = 0; i < 10; i++) {
    starsContainer.innerHTML += star;
}