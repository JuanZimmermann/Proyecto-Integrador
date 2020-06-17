let ham = document.querySelector('.hamburger')
let nav = document.querySelector('.nav-links')
let header = document.querySelector('header')
let links = document.querySelectorAll('.nav-links div')

ham.onclick = function(){
    ham.classList.toggle("change");
    nav.classList.toggle("nav-active")  
}



// LOADER


setTimeout(function load(){
    let loader = document.querySelector('.loader')
    loader.style.display = 'none'
}, 3000)
