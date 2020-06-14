let recuperaStorage = localStorage.getItem('artistList');

//let recuperoStorage = localStorage.getItem('playlistsFollowed');

let artist = JSON.parse(recuperaStorage);

//let playlist = JSON.parse(recuperoStorage);

let artistWrapper = document.querySelector('.artlist')

//let playlistWrapper = document.querySelector('.playlists')

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
    
            artistWrapper.innerHTML += '<li><a href="detalle.html"><h3>'+ track.name +'</h3></a></li>'

            console.log(artistId);

           })
           
    
    .catch(function(error){
        console.log(error);
        
    })
    
     }

     /*


    let recuperarStorage = localStorage.getItem('artistList');

//let recuperoStorage = localStorage.getItem('playlistsFollowed');

let artist = JSON.parse(recuperaStorage);

//let playlist = JSON.parse(recuperoStorage);

let artistWrapper = document.querySelector('.artlist')

//let playlistWrapper = document.querySelector('.playlists')

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
    
            artistWrapper.innerHTML += '<li><a href="detalle.html"><h3>'+ track.name +'</h3></a></li>'

            console.log(artistId);

           })
           
    
    .catch(function(error){
        console.log(error);
        
    })
    
     }

     */