let queryString = location.search;

let queryStringObj = new URLSearchParams(queryString);

let trackId = queryStringObj.get('id');
let type = queryStringObj.get('type')
console.log(type);


let proxy = 'https://cors-anywhere.herokuapp.com/';
let url =  proxy + "https://api.deezer.com/" + type + "/" + trackId;

    fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(track){

            if(type == 'track'){
                let photo = document.querySelector('.photo1b');
            photo.src = track.artist.picture_big;
            
            let title = document.querySelector('.detalle-title');
            title.innerHTML += track.title;

            let artist = document.querySelector('.detalle-artist');
            artist.innerHTML += 'Artist: ' + track.artist.name;
            artist.href = 'detalle.html?id=' + track.artist.id + '&type=' + track.artist.type;

            let album = document.querySelector('.detalle-album');
            album.innerHTML += 'Album: ' + track.album.title;
            album.href = 'detalle.html?id=' + track.album.id + '&type=' + track.album.type;
        

            let player = document.querySelector('iframe');
           player.src = 'https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=3000&height=350&color=00e8dc&layout=dark&size=medium&type=tracks&id=' + trackId + '&app_id=1'





           /* Agregar a la playlist */


           let recuperoStorage = localStorage.getItem('playlist')

        if (recuperoStorage ==null) {
                 playlist = [];
    
        }else{

            playlist = JSON.parse(recuperoStorage)

        }

        let agregar = document.querySelector('.boton3')

        if (playlist.includes(trackId)){
            agregar.innerHTML = 'Quitar de la playlist'
        }

        

        agregar.addEventListener('click', function(pre){

        pre.preventDefault();

        if(playlist.includes(trackId)){

            let indiceEnELArray = playlist.indexOf(trackId);

            playlist.splice(indiceEnELArray , 1);

         let agregar = document.querySelector('.boton3')

          agregar.innerHTML = 'Agregar a playlist'
        }
         else{

         let agregar = document.querySelector('.boton3')
    
            agregar.innerHTML = 'Quitar de playlist'
            playlist.push(trackId);
    }
    
    let playlistparastorage = JSON.stringify(playlist)

localStorage.setItem('playlist' , playlistparastorage)

    console.log(localStorage);
    
})











/* cierro*/




            }else if(type == 'artist'){

                let artistId = track.id

                let photo = document.querySelector('.photo1b');
            photo.src = track.picture_big;

            let title = document.querySelector('.detalle-title');
            title.innerHTML += track.name;

            let artist = document.querySelector('.detalle-artist');
            artist.innerHTML += 'Number of albums: ' + track.nb_album;

            let album = document.querySelector('.detalle-album');
            album.innerHTML += 'Number of fans: ' + track.nb_fan;

            let player = document.querySelector('.player')    
            player.style = 'display: none;'

            let boton = document.querySelector('.boton3')
            boton.innerHTML = 'Seguir'

            urlTop = proxy + 'https://api.deezer.com/artist/' + track.id + '/top?limit=5'

            fetch(urlTop)
                .then(function(response){
                    return response.json()
                })
                .then(function(datos){
                    let top = document.querySelector('.top')
                    let respuesta = datos.data
                    top.style = 'display: grid;'

                    respuesta.forEach(element => {
                        top.innerHTML += '<a class="topCancion" href="detalle.html?id=' + element.id + '&type=' + element.type + '"><div>' + element.title + '</div></a>'
                    });
                    
                })
                .catch(function(error){
                    console.log(error);
                    
                })
            

            //artistas seguidos agregar a lista
            
            let recuperaStorage = localStorage.getItem('artistList')
            
            if(recuperaStorage == null){
                artistList=[];
            }else{
                artistList = JSON.parse(recuperaStorage);
            }

            let agrego = document.querySelector('.boton3')

            if(artistList.includes(artistId)){
                agrego.innerHTML = 'Dejar de seguir'
            }

            agrego.addEventListener('click', function(pre){
                pre.preventDefault();
                if(artistList.includes(artistId)){
                    let indiceEnElArray = artistList.indexOf(artistId);

                    artistList.splice(indiceEnElArray , 1);

                    let agrego = document.querySelector('.boton3')
                    agrego.innerHTML = 'Seguir'
                }else{
                    let agrego = document.querySelector('.boton3')
                    agrego.innerHTML = 'Dejar de seguir'
                    artistList.push(artistId);
                }
            

            let artistListParaStorage = JSON.stringify(artistList)

            localStorage.setItem('artistList' , artistListParaStorage)

            console.log(localStorage);

        })

            //playlists 

            }else if(type == 'playlist'){

                let playlistId = track.id

                let photo = document.querySelector('.photo1b');
            photo.src = track.picture_big;

            let title = document.querySelector('.detalle-title');
            title.innerHTML += track.title;

            let artist = document.querySelector('.detalle-artist');
            artist.innerHTML += 'Number of tracks: ' + track.nb_tracks;

            let album = document.querySelector('.detalle-album');
            album.innerHTML += 'Number of fans: ' + track.fans;

            let player = document.querySelector('.player')    
            player.style = 'display: none;'

            let boton = document.querySelector('.boton3')    
            boton.innerHTML = 'Seguir'

            //seguir a playlist

            let recuperaStorage = localStorage.getItem('playlistsFollowed')

            if(recuperaStorage == null){
                playlistsFollowed = [];
            }else{
                playlistsFollowed = JSON.parse(recuperaStorage)
            }

            let agrego = document.querySelector('.boton3')

            if(playlistsFollowed.includes(playlistId)){
                agrego.innerHTML = 'Dejar de seguir'
            }

            agrego.addEventListener('click' , function(pre){
                pre.preventDefault();

                if(playlistsFollowed.includes(playlistId)){
                    let indiceEnELArray = playlistsFollowed.indexOf(playlistId);

                    playlistsFollowed.splice(indiceEnELArray , 1);

                    let agrego = document.querySelector('.boton3')

                    agrego.innerHTML = 'Seguir'
                }else{

                    let agrego = document.querySelector('.boton3')
                    playlistsFollowed.push(playlistId);

                }
                let playlistsFollowedParaStorage = JSON.stringify(playlistsFollowed)

                localStorage.setItem('playlistsFollowed' , playlistsFollowedParaStorage)

                console.log(localStorage)
            })

            //si es album no se hace nada

            }else if(type == 'album'){

                let photo = document.querySelector('.photo1b');
            photo.src = track.cover_big;

            let title = document.querySelector('.detalle-title');
            title.innerHTML += track.title;

            let player = document.querySelector('.player')    
            player.style = 'display: none;'

            let boton = document.querySelector('.boton3')    
            boton.style = 'display: none;'
            
            }
        

            
            

        })
        .catch(function(errors){
            console.log(errors);
        })
