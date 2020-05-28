let ham = document.querySelector('.hamburger')
let nav = document.querySelector('.nav')
let header = document.querySelector('header')

ham.onclick = function(){
    ham.classList.toggle("change");
    nav.style.display = 'flex'
    
}


