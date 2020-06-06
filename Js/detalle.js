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
            photo.src = track.artist.picture;

            let title = document.querySelector('.detalle-title');
            title.innerHTML += track.title;

            let artist = document.querySelector('.detalle-artist');
            artist.innerHTML += 'Artist: ' + track.artist.name;

            let album = document.querySelector('.detalle-album');
            album.innerHTML += 'Album: ' + track.album.title;
            }else if(type == 'artist'){

                let photo = document.querySelector('.photo1b');
            photo.src = track.picture;

            let title = document.querySelector('.detalle-title');
            title.innerHTML += track.name;

            let artist = document.querySelector('.detalle-artist');
            artist.innerHTML += 'Number of albums: ' + track.nb_album;

            let album = document.querySelector('.detalle-album');
            album.innerHTML += 'Number of fans: ' + track.nb_fan;
            }else{

                let photo = document.querySelector('.photo1b');
            photo.src = track.picture;

            let title = document.querySelector('.detalle-title');
            title.innerHTML += track.title;

            let artist = document.querySelector('.detalle-artist');
            artist.innerHTML += 'Number of tracks: ' + track.nb_tracks;

            let album = document.querySelector('.detalle-album');
            album.innerHTML += 'Number of fans: ' + track.fans;
            }

            
            

        })
        .catch(function(errors){
            console.log(errors);
        })
