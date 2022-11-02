const nav = document.querySelector(".nav");
const menu_btn = document.querySelector(".menu_btn");
const menu = document.querySelector(".menu");

window.addEventListener("scroll", function(){
    nav.classList.toggle("active", window.scrollY > 0)
})

menu_btn.addEventListener("click", () => {
    menu.classList.toggle("active")
})