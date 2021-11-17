const nav = document.querySelector(".navContenedor");

window.addEventListener("scroll", function(){
    nav.classList.toggle("active", window.scrollY > 0)
})