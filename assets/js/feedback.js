//const star = '<img class="disable-star" src="assets/img/star.svg"/>';
const starsContainer = document.getElementById("feedback-stars-container");
let currentId = 0;

for (let i = 0; i < 10; i++) {
  starsContainer.innerHTML += `<img id="${i}" onclick="clickStar(${i})" onmouseover="onStarHover(${i})" onmouseleave="onStarLeave(${i})" class="disable-star" src="assets/img/star.svg"/>`;
}
const onStarHover = (starId) => {
  console.log("id evento", starId);
  const img = document.getElementById(starId);
  img.classList.add("enabled");
  checkStar(starId);
};

const clickStar = (starId) => {
  console.log("evento-click", starId);
  const img = document.getElementById(starId);
  img.classList.add("enabled");
  currentId = starId;
  checkStar(currentId);
};

const onStarLeave = (starId) => {
  const img = document.getElementById(starId);
  img.classList.remove("enabled");
  checkStar(currentId);
};

const checkStar = (starId) => {
  for (let i = 0; i < 10; i++) {
    const img = document.getElementById(i);
    if (i <= starId) {
      img.classList.add("enabled");
    } else {
      img.classList.remove("enabled");
    }
  }
};

function cambiaPagina() {
  // Cambia l'URL della pagina
  window.location.href = "https://epicode.com/it/candidati/";
}
function setFocusTocommentHere() {
  let commentHere = document.getElementById("commentHere");
  commentHere.focus();
}
setTimeout(setFocusToInput2, 2000);
