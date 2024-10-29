import { loadHome } from "./home.js";
import { loadMenu } from "./menu";
import { loadContact } from "./contact";
import backgroundImage from "./asset/background.png";

import "./styles.css";

document.body.style.backgroundImage = `url(${backgroundImage})`;

const content = document.querySelector("#content");
let activePage = "home";
console.log(activePage);
loadHome();

const buttons = document.querySelectorAll("nav button");

function setActiveButton(page) {
  buttons.forEach(button => {
    if (button.id === page) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}

// Homepage loading logic
const homeButton = document.querySelector("#home");
homeButton.addEventListener("click", () => {
  if (activePage === "home") {
    return;
  }
  content.innerHTML = "";
  activePage = "home";
  loadHome();
  setActiveButton("home");
});

// Menu loading logic
const menuButton = document.querySelector("#menu");
menuButton.addEventListener("click", () => {
  if (activePage === "menu") {
    return;
  }
  content.innerHTML = "";
  activePage = "menu";
  loadMenu();
  setActiveButton("menu");
});

// Contact loading logic
const contactButton = document.querySelector("#contact");
contactButton.addEventListener("click", () => {
  if (activePage === "contact") {
    return;
  }
  content.innerHTML = "";
  activePage = "contact";
  loadContact();
  setActiveButton("contact");
});

// Set initial active button
setActiveButton("home");