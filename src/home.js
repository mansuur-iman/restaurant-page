import heroImage from "./images/hero.png";
export default function addHome(){
    const container = document.querySelector("#content");
    container.innerHTML = "";

    const logo = document.createElement("h1");
    logo.classList.add("logo");
    logo.textContent = "Bella Bites"
    container.appendChild(logo);

    const heroSection = document.createElement("div");
    heroSection.classList.add("hero");
    const leftSide = document.createElement("div");
    leftSide.classList.add("left");
    heroSection.appendChild(leftSide);

    const heroHeading = document.createElement("h1");
    heroHeading.textContent = "Welcome to Bella Bites";
    leftSide.appendChild(heroHeading);

    const para = document.createElement("p");
    para.textContent = "Where every meal tells a story\nAt Bella Bites, we serve up more than just food — we serve comfort, flavor, and unforgettable  experiences.\n Whether you're craving a quick bite or a full-course meal, our carefully crafted dishes are made to satisfy every taste."
    leftSide.appendChild(para);

    const orderBtn = document.createElement("button");
    orderBtn.classList.add("order");
    orderBtn.textContent = "Place Order";
    leftSide.appendChild(orderBtn);

    const image = document.createElement("img")
    image.src = heroImage;
    image.alt = "hero image";
    heroSection.appendChild(image);

    container.appendChild(heroSection);
};