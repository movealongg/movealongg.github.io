let toggle = document.querySelector(".hamburger-toggle");
let menu = document.querySelector(".mobile-menu");
toggle.addEventListener("click", function(){
    toggle.classList.toggle("close");
    if(menu.style.display == 'flex') {
        menu.style.display = 'none';
    }else {
        menu.style.display = 'flex';
    }
})
   

