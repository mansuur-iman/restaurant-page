import burgerImg from "./images/burger.png";
import pizzaImg from "./images/pizza.png";
import fishImg from "./images/fish.png";
import chickenImg from "./images/chicken.png";

export default function addMenu(){
    const container = document.querySelector("#content");
    container.innerHTML = "";

    const title = document.createElement("h1");
    title.classList.add("menu-title");
    title.textContent = "Our Menu";
    container.appendChild(title);

    const intro = document.createElement("p");
    intro.classList.add("intro");
    intro.textContent = "Quality Dishes Made With Love.";
    container.appendChild(intro);

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    const menuItems = [
        {
            name: "Classic Burger",
            description: "Sink your teeth into our juicy burger with melted cheese,\n crunchy lettuce, and a soft, toasted bun — simply delicious.",
            price: "$10",
            img: burgerImg,
        },

        {
            name: "Pizza",
            description: "Enjoy our cheesy pizza with a crispy crust, savory tomato\n sauce, and your favorite toppings — made fresh, just for you.",
            price: "$12",
            img: pizzaImg,
        },

        {
            name: " BBQ Grilled Chicken Platter",
            description: "Juicy grilled chicken marinated in smoky barbecue\n sauce. Served with coleslaw and seasoned fries.",
            price: "$15",
            img: chickenImg
        },

        {
            name: " Spicy Coconut Fish Curry",
            description: "Fresh white fish simmered in a creamy coconut curry\n sauce with aromatic spices and a touchof heat.",
            price: "$20",
            img: fishImg
        },

    ];

    menuItems.forEach(item =>{
        const card = document.createElement("div");
        card.classList.add("item-card");

        const img = document.createElement("img");
        img.classList.add("item-img");
        img.src = item.img;
        img.alt = item.name;

        const description = document.createElement("p");
        description.classList.add("item-description");
        description.textContent = item.description;

        const name = document.createElement("h3");
        name.classList.add("item-title");
        name.textContent = item.name;

        const price = document.createElement("h4");
        price.classList.add("item-price");
        price.textContent = item.price;

        const orderNow = document.createElement("button");
        orderNow.classList.add("orderBtn");
        orderNow.textContent = "Order Now";

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(description);
        card.appendChild(price);
        card.appendChild(orderNow);

    menuContainer.appendChild(card);

    });
    container.appendChild(menuContainer)

};