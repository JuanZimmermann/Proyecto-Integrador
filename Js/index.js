//canciones

let topcharts = 'https://api.deezer.com/chart/0/tracks';

let proxy = 'https://cors-anywhere.herokuapp.com/';

let urlTracks = proxy + topcharts;


fetch(urlTracks)
.then( function(respuesta){

    return respuesta.json();
    
    })
.then(function(datos){

    console.log(datos);

    let lista = document.querySelector('.charts-tracks');

    cancion = datos.data;

    
    cancion.forEach(function(canciones){ 
    
      lista.innerHTML += '<a href="detalle.html?id=' + canciones.id + '&type=' + canciones.type + '"><div class="item-charts"><p>'+ canciones.title + '</p></div></a>';

            })   
         } )
            

.catch(function(error){

    console.log(error);
    
})


//ARTISTAS

let urlAlbums = proxy + 'https://api.deezer.com/chart/0/artists'

fetch(urlAlbums)
.then( function(respuesta){

    return respuesta.json();
    
    })
.then(function(datos){

    console.log(datos)

    let lista2 = document.querySelector('.charts-artistas');

    cancion = datos.data;

    
    cancion.forEach(function(canciones){ 
    
      lista2.innerHTML += '<a href="detalle.html?id=' + canciones.id + '&type=' + canciones.type + '"><div class="item-charts"><p>'+ canciones.name + '</p></div></a>';

            })   
         } )
            

.catch(function(error){

    console.log(error);
    
})


//PLAYLISTS

let urlPlaylists = proxy + 'https://api.deezer.com/chart/0/playlists'

fetch(urlPlaylists)
.then( function(respuesta){

    return respuesta.json();
    
    })
.then(function(datos){

    console.log(datos)

    let lista3 = document.querySelector('.charts-playlists');

    cancion = datos.data;

    
    cancion.forEach(function(canciones){ 
    
      lista3.innerHTML += '<a href="detalle.html?id=' + canciones.id + '&type=' + canciones.type + '"><div class="item-charts"><p>'+ canciones.title + '</p></div></a>';
            })   
         } )
            

.catch(function(error){

    console.log(error);
    
})


