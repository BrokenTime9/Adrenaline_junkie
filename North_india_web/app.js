import { cards } from "./objects.js";

const heroSection = document.getElementById("hero-section");
const stateBtn = document.getElementsByClassName("state-btn");
const cardElems = document.getElementsByClassName("card");
const logoElem = document.getElementById("logo");
console.log(stateBtn);

const heroSectionDesc = document.getElementById("heroSectionDesc");

logoElem.onclick = goHome;

function goHome() {
  window.location.href = "/Adrenaline_junkie/index.html";
}

function changeState(state) {
  const parsedState = state.replace(" ", "");
  const innerHTML = `
    <h1>${cards[parsedState].heading}</h1>
    <p>${cards[parsedState].para}</p>
    `;
  heroSectionDesc.innerHTML = innerHTML;

  heroSection.style.backgroundImage = cards[parsedState].back_image;
}

changeState("Himachal Pradesh");

console.log(stateBtn, typeof stateBtn);
for (let i = 0; i < stateBtn.length; i++) {
  stateBtn[i].onclick = (e) => {
    changeState(e.target.innerText);

    changeState(Object.keys(cards)[i]);

    let currentId = 2;
    cardElems[i].setAttribute("id", "card1");
    for (let j = i + 1; j < cardElems.length; j++) {
      cardElems[j].setAttribute("id", "card" + currentId);
      currentId++;
    }
    for (let j = 0; j < i; j++) {
      cardElems[j].setAttribute("id", "card" + currentId);
      currentId++;
    }
  };
}

for (let i = 0; i < cardElems.length; i++) {
  cardElems[i].setAttribute("id", "card" + (i + 1).toString());
  cardElems[i].style.backgroundImage = Object.values(cards)[i].card_image;

  cardElems[i].onclick = (e) => {
    changeState(Object.keys(cards)[i]);

    let currentId = 2;
    cardElems[i].setAttribute("id", "card1");
    for (let j = i + 1; j < cardElems.length; j++) {
      cardElems[j].setAttribute("id", "card" + currentId);
      currentId++;
    }
    for (let j = 0; j < i; j++) {
      cardElems[j].setAttribute("id", "card" + currentId);
      currentId++;
    }
  };
}
