var proxy = 'https://cors-anywhere.herokuapp.com/'

var url = proxy +  'https://api.deezer.com/genre'

fetch(url)
.then( function(respuesta){

    return respuesta.json();
    
    })
.then(function(date){

    let cadagenero  = document.querySelector('.cadagenero')
   

    let gener = date.data;

    gener.forEach(function(genero){

cadagenero.innerHTML += '<div> <img  class="foto-genero"  src="'+ genero.picture  +'"></div><div><a href="detalle.html?id=' + genero.id+'"> '+ genero.name   +'</a></div>'
    })
        
       })




.catch(function(error){
    console.log(error);
    
})