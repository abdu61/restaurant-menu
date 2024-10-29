export function loadContact() {
  const content = document.querySelector("#content");
  const elements = [];

  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");

  const heading = document.createElement("h1");
  heading.textContent = "Contact Us";
  contactContainer.appendChild(heading);

  const address = document.createElement("p");
  address.textContent = "123 Coffee Street, Espresso City, CA 12345";
  contactContainer.appendChild(address);

  const phone = document.createElement("p");
  phone.textContent = "Phone: (123) 456-7890";
  contactContainer.appendChild(phone);

  const email = document.createElement("p");
  email.textContent = "Email: contact@espressobar.com";
  contactContainer.appendChild(email);

  elements.push(contactContainer);

  elements.forEach((element) => content.appendChild(element));
}
