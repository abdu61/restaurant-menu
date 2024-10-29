import espressoImage from "./asset/espresso.png";
import cappucino from "./asset/cappucino.png";
import latte from "./asset/latte.png";

export function loadMenu() {
  const menu = document.querySelector("#content");
  menu.innerHTML = ""; // Clear previous content
  const elements = [];

  const section = document.createElement("section");
  section.className = "menuSection";

  const h1 = document.createElement("h1");
  h1.textContent = "Menu";
  section.appendChild(h1);

  const menuItems = [
    {
      name: "Espresso",
      description: "Strong and bold coffee.",
      price: "1 BD",
      image: espressoImage,
    },
    {
      name: "Cappuccino",
      description: "Coffee with steamed milk foam.",
      price: "1.2 BD",
      image: cappucino,
    },
    {
      name: "Latte",
      description: "Smooth and creamy coffee.",
      price: "1.5 BD",
      image: latte,
    },
  ];

  const menuContainer = document.createElement("div");
  menuContainer.className = "menu-container";

  menuItems.forEach((item) => {
    const itemBox = document.createElement("div");
    itemBox.className = "menu-item";

    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;
    itemBox.appendChild(img);

    const textContainer = document.createElement("div");
    textContainer.className = "text-container";

    const textInnerContainer = document.createElement("div");
    textInnerContainer.className = "text-inner-container";

    const name = document.createElement("h2");
    name.textContent = item.name;
    textInnerContainer.appendChild(name);

    const description = document.createElement("p");
    description.textContent = item.description;
    textInnerContainer.appendChild(description);

    textContainer.appendChild(textInnerContainer);

    const price = document.createElement("div");
    price.className = "price";
    price.textContent = item.price;
    textContainer.appendChild(price);

    itemBox.appendChild(textContainer);
    menuContainer.appendChild(itemBox);
  });

  section.appendChild(menuContainer);
  elements.push(section);

  elements.forEach((element) => menu.appendChild(element));
}
