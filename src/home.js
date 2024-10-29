import CoffeeImage from "./asset/coffee.png";

export function loadHome() {
  const home = document.querySelector("#content");
  const elements = [];

  const section = document.createElement("section");

  const textContainer = document.createElement("div");

  const h1 = document.createElement("h1");
  h1.innerHTML =
    'Enjoy your <span class="highlight">Coffee</span> before your activities!';
  textContainer.appendChild(h1);

  const p1 = document.createElement("p");
  p1.textContent =
    "Boost your productivity and build your mood with a glass of coffee in the morning ";
  textContainer.appendChild(p1);

  const button = document.createElement("button");
  button.textContent = "Show Menu";
  button.className = "coffee-button";
  button.addEventListener("click", () => {
    const menuButton = document.querySelector("#menu");
    menuButton.click();
  });
  textContainer.appendChild(button);

  const imageContainer = document.createElement("div");
  const img = document.createElement("img");
  img.src = CoffeeImage;
  img.alt = "Restaurant Image";
  imageContainer.appendChild(img);

  section.appendChild(textContainer);
  section.appendChild(imageContainer);

  elements.push(section);

  elements.forEach((element) => home.appendChild(element));
}
