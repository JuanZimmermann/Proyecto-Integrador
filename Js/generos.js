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

        cadagenero.innerHTML += '<div class="cadagenero"><a href="detallegeneros.html?id=' + genero.id + '"><div class="foto-genero"> <img  class="genero-foto"  src="'+ genero.picture  +'"></div> <div class="texto-genero"><p>' + genero.name + '</p></div></a></div>'
    })
        
       })




.catch(function(error){
    console.log(error);
    
})