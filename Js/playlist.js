let recuperoStorage = localStorage.getItem('playlist');
let playlist = JSON.parse(recuperoStorage);

playlist.forEach(element => {
    buscarYMostrarTrack(element);
});

function buscarYMostrarTrack(element){
    let proxy = 'https://cors-anywhere.herokuapp.com/';
    let url = proxy + 'https://api.deezer.com/track/' + element;

    fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(datos){
            let lista = document.querySelector('.lista-de-reproduccion');
            lista.innerHTML += '<div class="cancion"><iframe src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=3000&height=350&color=00e8dc&layout=dark&size=medium&type=tracks&id=' + datos + '&app_id=1" frameborder="0"></iframe></div>'
        })
}