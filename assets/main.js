// Toggle hamburger icon and mobile menu
let toggle = document.querySelector(".hamburger-toggle");
let menu = document.querySelector(".mobile-menu");
toggle.addEventListener("click", function(){
    toggle.classList.toggle("close");
    menu.classList.toggle("toggle");
})

// Send contact form 
let form = document.querySelector(".contact-form");
let button = document.querySelector(".contact-button");
let status = document.querySelector(".form-status");

function success() {
    form.reset();
    status.innerHTML = "Thanks! I'll get back to you as soon as possible.";
}

function error() {
    status.innerHTML = "Oops! Looks like there was a problem.";
}

form.addEventListener("submit", function(event) {
    event.preventDefault();
    let data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
});

function ajax(method, url, data, success, error) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
        } else {
        error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}