import "./style.css";
import addHome from "./home.js";
addHome();
import addMenu from "./menu.js";
addMenu();
import addContact from "./contact.js";
addContact();

const homeButton = document.querySelector(".home");
homeButton.addEventListener("click",()=>{
    addHome();
});

const menuButton = document.querySelector(".menu");
menuButton.addEventListener("click",()=>{
    addMenu();
});

const contactButton = document.querySelector(".contact");
contactButton.addEventListener("click",()=>{
    addContact();
});