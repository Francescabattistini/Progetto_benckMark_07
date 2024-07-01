//const star = '<img class="disable-star" src="assets/img/star.svg"/>';
const starsContainer = document.getElementById("feedback-stars-container");

for (let i = 0; i < 10; i++) {
    starsContainer.innerHTML += `<img id="star-${i}" onmouseover="onStarHover(event)" onmouseleave="onStarLeave(event)" class="disable-star" src="assets/img/star.svg"/>`;
}
const onStarHover = (event) => {
    const img = document.getElementById(event.target.id);
    img.classList.add('enabled');
};

const onStarLeave = (event) => {
    const img = document.getElementById(event.target.id);
    img.classList.remove('enabled');
};
