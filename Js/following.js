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
var url = proxy + 'https://api.deezer.com/track/' + artistId;
    
        fetch(url)
         .then( function(response){
             return response.json();
        
        })
        .then(function(track){
    
            artistWrapper.innerHTML += '<li><h3>'+ artistId +'</h3></li>'

            console.log(artistId);

           })
           
    
    .catch(function(error){
        console.log(error);
        
    })
    
     }
    

    /* if(recuperoStorage == null || recuperoStorage == '[]'){
        playlistsFollowed = []
        playlistWrapper.innerHTML += '<h2> No sigues a ninguna playlist </h2>'
    }else{
        playlist.forEach(function(playlistId){
            buscarYMostrar(playlistId)
        })
    }

     function buscarYMostrar(playlistId){

        var proxy = 'https://cors-anywhere.herokuapp.com/'
        var url = proxy + 'https://api.deezer.com/track/' + playlistId;
            
                fetch(url)
                 .then( function(response){
                     return response.json();
                
                })
                .then(function(track){
            
                    playlistWrapper.innerHTML += '<li><h3>'+ playlistId +'</h3></li>'
        
                    console.log(playlistId);
        
                   })
                   
            
            .catch(function(error){
                console.log(error);
                
            })
            
             }*/

     console.log(localStorage);
     
     
    
    