var proxy = 'https://cors-anywhere.herokuapp.com/'

var url = proxy +  'https://api.deezer.com/genre'

fetch(url)
.then( function(respuesta){

    return respuesta.json();
    
    })
.then(function(date){

    let cadagenero  = document.querySelector('.contenido-genero')
   

    let gener = date.data;

    gener.forEach(function(genero){

cadagenero.innerHTML += '<div class="cadagenero"><div class="foto-genero"> <img  class="genero-foto"  src="'+ genero.picture  +'"></div> <div class="texto-genero"><a class="texto-genero" href="detalle.html?id=' + genero.id+'"> '+ genero.name   +'</a></div></div>'
    })
        
       })




.catch(function(error){
    console.log(error);
    
})