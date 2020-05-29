let ham = document.querySelector('.hamburger')
let nav = document.querySelector('.nav-links')
let header = document.querySelector('header')
let links = document.querySelectorAll('.nav-links div')

ham.onclick = function(){
    ham.classList.toggle("change");
    nav.classList.toggle("nav-active")  
}


let topcharts = 'https://api.deezer.com/chart/0/tracks';

let proxy = 'https://cors-anywhere.herokuapp.com/';

let url = proxy + topcharts;

console.log(url);

fetch(url)
.then( function(respuesta){

    return respuesta.json();
    
    })
.then(function(datos){

    console.log(datos)

    let lista = document.querySelector('.charts-tracks');

    cancion = datos.data;

    
    cancion.forEach(function(canciones){ 
    
      lista.innerHTML = '<p>'+ canciones.title + '</p> '

            })

            
    
         } )
            

.catch(function(error){

    console.log(error);
    
})


