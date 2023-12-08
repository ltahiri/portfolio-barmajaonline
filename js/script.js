const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
hamburger.addEventListener("click", function () {
  hundleMenu();
});

function hundleMenu() {
  hamburger.classList.toggle("is-active");
  menu.classList.toggle("is-active");
}
