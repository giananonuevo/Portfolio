
const togglebtn = document.querySelector(".togglebtn");
const nav = document.querySelector(".navlinks");

togglebtn.addEventListener("click", () => {
    togglebtn.classList.toggle("click");
    nav.classList.toggle("open");
});


const typed = new Typed(".input", {
    strings: ["Web Developer", "Problem Solver", "C# Enthusiast"],
    typeSpeed: 70,
    backSpeed: 55,
    loop: true
});

const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const messageField = document.getElementById('message');


window.onload = function () {
  if (localStorage.getItem('name')) {
    nameField.value = localStorage.getItem('name');
  }
  if (localStorage.getItem('email')) {
    emailField.value = localStorage.getItem('email');
  }
  if (localStorage.getItem('message')) {
    messageField.value = localStorage.getItem('message');
  }
};

nameField.addEventListener('input', () => {
  localStorage.setItem('name', nameField.value);
});
emailField.addEventListener('input', () => {
  localStorage.setItem('email', emailField.value);
});
messageField.addEventListener('input', () => {
  localStorage.setItem('message', messageField.value);
});

document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert("Message sent!");
  localStorage.removeItem('name');
  localStorage.removeItem('email');
  localStorage.removeItem('message');
  nameField.value = '';
  emailField.value = '';
  messageField.value = '';
});
