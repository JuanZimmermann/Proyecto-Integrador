let queryString = location.search;

let queryStringObj = new URLSearchParams(queryString);

let trackId = queryStringObj.get('id');

let proxy = 'https://cors-anywhere.herokuapp.com/';
let url =  proxy + "https://api.deezer.com/track/" + trackId;

    fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(track){
            let photo = document.querySelector('.photo1b');
            photo.src = track.artist.picture;

            let title = document.querySelector('.detalle-title');
            title.innerHTML += track.title;

            let artist = document.querySelector('.detalle-artist');
            artist.innerHTML += track.artist.name;

            let album = document.querySelector('.detalle-album');
            album.innerHTML += track.album.title;

            let player = document.querySelector('.player')
            player.innerHTML += '<iframe id="dzplayer" dztype="dzplayer" src="http://developers.deezer.com/us/plugins/player?playlist=true&width=700&height=240&autoplay=false&type=playlist&id=' + track.id + '" scrolling="no" frameborder="0" style="border:none; overflow:hidden;" width="700" height="240" allowTransparency="true"></iframe>'
            
        })
        .catch(function(errors){
            console.log(errors);
        })
