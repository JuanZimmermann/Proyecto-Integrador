let recuperaStorage = localStorage.getItem('artistList');

let recuperoStorage = localStorage.getItem('playlistsFollowed');

let artist = JSON.parse(recuperaStorage);

let playlist = JSON.parse(recuperoStorage);

let artistWrapper = document.querySelector('.artlist')

if(recuperaStorage == null || recuperaStorage == '[]'){
    artistList = []
    artlistWrapper.innerHTML += '<h2> No sigues a ningun artista </h2>'
}else{
    artistList.forEach(function(artistId){
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
    
            artlistwrapper.innerHTML += '<li><h3>'+ artistId +'</h3></li>'

            console.log(artistId);

           })
           
    
    .catch(function(error){
        console.log(error);
        
    })
    
     }
    
     console.log(localStorage);
     
     
    
    