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
    
            artistWrapper.innerHTML += '<li><a href="detalle.html"><h3>'+ track.name +'</h3></a></li>'

            console.log(artistId);

           })
           
    
    .catch(function(error){
        console.log(error);
        
    })
    
     }
     console.log(localStorage)

    /* let recuperoStorage = localStorage.getItem('playlistsFollowed');

     let playlist = JSON.parse(recuperoStorage);

     let playlistWrapper = document.querySelector('.playlists')

     if(recuperoStorage == null || recuperoStorage == '[]'){
        playlistsFollowed = []
        playlistWrapper.innerHTML += '<h2> No sigues a ningun playlist </h2>'
    }else{
        playlist.forEach(function(playlistId){
            buscarYMostrar(playlistId)
        })
    }

    function buscarYMostrar(playlistId){

        var proxy2 = 'https://cors-anywhere.herokuapp.com/'
        var url2 = proxy2 + 'https://api.deezer.com/playlist/' + playlistId;
            
                fetch(url2)
                 .then( function(response){
                     return response.json();
                
                })
                .then(function(track){
            
                    playlistWrapper.innerHTML += '<li><a href="detalle.html"><h3>'+ track.name +'</h3></a></li>'
        
                    console.log(playlistId);
        
                   })
                   
            
            .catch(function(error){
                console.log(error);
                
            })
            
             }

             console.log(recuperaStorage);*/

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