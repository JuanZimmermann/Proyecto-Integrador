let queryString = location.search;

let queryStringObj = new URLSearchParams(queryString);

console.log(queryString);


let Id = queryStringObj.get('id');

console.log(Id);

let proxy = 'https://cors-anywhere.herokuapp.com/';
let url =  proxy + 'https://api.deezer.com/genre/' + Id + '&limit=10/artists'


fetch(url)
.then( function(respuesta){

    return respuesta.json();
    
    })
.then(function(datos){

    
    genero = datos.data;

   
    



let lista = document.querySelector('.lista')
    
    genero.forEach(function(genre){ 
    


     lista.innerHTML += '<li><a href="detalle.html?id=' + genre.id + '&type=' + genre.type + '">' + genre.name + '</a></li>'

     
     

            })   


         } )
            

.catch(function(error){

    console.log(error);
    
})



let urlgener = proxy + 'https://api.deezer.com/genre/' + Id ;

fetch(urlgener)
.then( function(respuesta){

    return respuesta.json();
    
    })
.then(function(ladata){

    

    lafoto = ladata.picture_medium
    
    
    eltitulo = ladata.name



    let foto = document.querySelector('.foto-gener')
    let titulo = document.querySelector('.titulo-gener')
    

    foto.innerHTML += '<img  src="'+ lafoto +'" >'

    titulo.innerHTML +=  eltitulo 
   
    

    


       
 } )
            

.catch(function(error){

    console.log(error);
    
})
