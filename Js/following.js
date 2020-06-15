let recuperaStorage = localStorage.getItem('artistList');



let artist = JSON.parse(recuperaStorage);



let artistWrapper = document.querySelector('.artlist')



if(recuperaStorage == null || recuperaStorage == '[]'){
    artistList = []
    artistWrapper.innerHTML += '<h2> No sigues a ningun artista </h2>'
}else{
    artist.forEach(function(artistId){
        buscarYMostrar(artistId)
    })
}



function buscarYMostrar(artistId){

var proxy = 'https://cors-anywhere.herokuapp.com/'
var url = proxy + 'https://api.deezer.com/artist/' + artistId;
    
        fetch(url)
         .then( function(response){
             return response.json();
        
        })
        .then(function(track){
    
            artistWrapper.innerHTML += '<li><a href="detalle.html?id=' + track.id + '&type=' + track.type + '"><p>'+ track.name + '</p></a></li>'

            console.log(artistId);

           })
           
    
    .catch(function(error){
        console.log(error);
        
    })
    
     }
     console.log(localStorage)

    /* playlisfollowed*/

let recuperarStorage = localStorage.getItem('playlistsFollowed');



let play = JSON.parse(recuperarStorage);



let playlistWrapper = document.querySelector('.playlist-list')



if(recuperarStorage == null || recuperarStorage == '[]'){
    playlistsFollowed = []
    playlistWrapper.innerHTML += '<h2> No sigues a ninguna playlist </h2>'
}else{
    play.forEach(function(playlistId){
        mostrar(playlistId)
    })
}



function mostrar(playlistId){

var proxy = 'https://cors-anywhere.herokuapp.com/'
var url = proxy + 'https://api.deezer.com/playlist/' + playlistId;
    
        fetch(url)
         .then( function(response){
             return response.json();
        
        })
        .then(function(tracks){
    
            playlistWrapper.innerHTML += '<li><a href="detalle.html?id=' + tracks.id + '&type=' + tracks.type + '"><p>'+ tracks.title + '</p></a></li>'

            console.log(playlistId);
            

           })
           
    
    .catch(function(error){
        console.log(error);
        
    })
    
     }
    



    