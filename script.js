document.getElementById("year").textContent = new Date().getFullYear();

// Mobile Menu Toggle
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
});

// Contact Form
document.getElementById("contactForm").addEventListener("submit", function(e){
e.preventDefault();


let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let message = document.getElementById("message").value.trim();
let msg = document.getElementById("formMsg");

if(!name || !email || !message){
    msg.textContent = "Please fill all fields.";
} else {
    msg.textContent = "Thank you! Your message has been sent.";
    this.reset();
}


});