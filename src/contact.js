export default function addContact() {
    const container = document.querySelector("#content");
    container.innerHTML = "";
  
    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");
  
    const contactLeft = document.createElement("div");
    contactLeft.classList.add("contact-left");
  
    const openTime = document.createElement("div");
    openTime.classList.add("open-time");
  
    const title = document.createElement("h2");
    title.classList.add("contact-title");
    title.textContent = "Contact Us";
    openTime.appendChild(title);
  
    const miniTitle = document.createElement("h4");
    miniTitle.classList.add("title2");
    miniTitle.textContent = "How to get in touch";
    openTime.appendChild(miniTitle);
  
    const para = document.createElement("p");
    para.classList.add("para");
    para.textContent =
      "You can easily get in touch with us by calling the restaurant's phone number, sending an email, or filling out the contact form below. If you have a question, feedback, or want to make a reservation, we are here to help and will get back to you as soon as possible.";
    openTime.appendChild(para);
  
    container.appendChild(openTime);
  
    const contactRight = document.createElement("div");
    contactRight.classList.add("contact-right");
  
    const form = document.createElement("form");
    form.classList.add("contact-form");
  
    const name = document.createElement("input");
    name.classList.add("input");
    name.placeholder = "Name";
    form.appendChild(name);
  
    const email = document.createElement("input");
    email.classList.add("input");
    email.placeholder = "Email";
    form.appendChild(email);
  
    const subject = document.createElement("input");
    subject.classList.add("input");
    subject.placeholder = "Subject";
    form.appendChild(subject);
  
    const message = document.createElement("textarea");
    message.classList.add("message");
    message.placeholder = "Message";
    form.appendChild(message);
  
    const submitBtn = document.createElement("button");
    submitBtn.classList.add("submit-btn");
    submitBtn.textContent = "BOOK A TABLE";
    submitBtn.type = "submit";
    form.appendChild(submitBtn);
  
    contactRight.appendChild(form);
  
    const address = document.createElement("div");
    address.classList.add("address");
  
    const addressTitle = document.createElement("h2");
    addressTitle.classList.add("head");
    addressTitle.textContent = "ADDRESS";
    address.appendChild(addressTitle);
  
    const direction = document.createElement("span");
    direction.classList.add("span");
    direction.textContent = "123 Fifth Avenue, New York, NY 10160, USA";
    address.appendChild(direction);
    contactLeft.appendChild(address);
  
    const phoneNumber = document.createElement("div");
    phoneNumber.classList.add("phone");
  
    const phoneHead = document.createElement("h2");
    phoneHead.classList.add("head");
    phoneHead.textContent = "PHONE NUMBER";
    phoneNumber.appendChild(phoneHead);
  
    const phoneSpan = document.createElement("span");
    phoneSpan.classList.add("span");
    phoneSpan.textContent = "+1 910-626-85255";
    phoneNumber.appendChild(phoneSpan);
    contactLeft.appendChild(phoneNumber);
  
    const emailAddress = document.createElement("div");
    emailAddress.classList.add("email-address");
  
    const emailHead = document.createElement("h2");
    emailHead.classList.add("head");
    emailHead.textContent = "EMAIL";
    emailAddress.appendChild(emailHead);
  
    const emailSpan = document.createElement("span");
    emailSpan.classList.add("span");
    emailSpan.textContent = "bellabites@example.com";
    emailAddress.appendChild(emailSpan);
    contactLeft.appendChild(emailAddress);
  
    contactContainer.appendChild(contactLeft);
    contactContainer.appendChild(contactRight);
    container.appendChild(contactContainer);
  }
  