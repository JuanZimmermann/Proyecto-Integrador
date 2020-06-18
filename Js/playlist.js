
 

let recuperoStorage = localStorage.getItem('playlist');
let playlist = JSON.parse(recuperoStorage);

let playlistwrapper = document.querySelector('.listadereproduccion')
let body = document.querySelector('.playlist-container')

if(recuperoStorage == null || recuperoStorage == '[]'){

    playlist =[]
    playlistwrapper.innerHTML += '<h1> Actualmente no hay canciones en tu playlist </h1>'
    body.style.height = '100vh'
    }
    
    else{
           
    playlist.forEach(function(trackId){
        buscarYMostrar(trackId)
        }) 
    }


    function buscarYMostrar(trackId){

        var proxy = 'https://cors-anywhere.herokuapp.com/'
        var url = proxy + 'https://api.deezer.com/track/' + trackId;
    
        fetch(url)
         .then( function(response){
             return response.json();
        
        })
        .then(function(track){
    
            playlistwrapper.innerHTML += '<div class ="player-playlist"> <div><iframe class="" scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=3000&height=350&color=00e8dc&layout=dark&size=medium&type=tracks&id=' + track.id + '&app_id=1" width="600" height="92"></iframe></div><button class="eliminar"> Eliminar </div> '

           

           let eliminar = document.querySelector('.eliminar');
    

           eliminar.onclick =  function(){

            console.log('el boton funciona');

            let indiceArray = playlist.indexOf(track.id);
            playlist.splice(indiceArray, 1);
            let playlistParaStorage = JSON.stringify(playlist);
            console.log(playlist);
            localStorage.setItem('playlist', playlistParaStorage);
            console.log(localStorage);
            location.reload()
            
         }
        



        

          
    
     
            
            

        

            console.log(trackId);

        

          

        })
    

           
    
    .catch(function(error){
        console.log(error);
        
    })

     





}


console.log(localStorage)

var boton = document.querySelector('.boton')


boton.onclick = function(){

    let confirmar = confirm('¿Estas Seguro? Todas las canciones seran eliminadas de tu playlist')
    if(confirmar == true){

        localStorage.removeItem('playlist')
    
        location.reload();


    }
}




