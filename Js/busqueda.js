let queryString = location.search
let searchParams = new URLSearchParams(queryString)
let search = searchParams.get('search')

let proxy = 'https://cors-anywhere.herokuapp.com/';

let api = 'https://api.deezer.com/search?q='

let url = proxy + api + search + '&limit=9'

console.log(url);


fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        let lista = document.querySelector('.results-container')
        let busqueda = document.querySelector('.busqueda')
        let resultados = data.data

        busqueda.innerHTML += '<h1>' + search + '</h1>'
        busqueda.style.textTransform = 'uppercase'

        resultados.forEach(element => {
            lista.innerHTML += '<a class="result-link" href="detalle.html?id=' + element.id + '&type=' + element.type + '"><div class="results"><img src="' + element.album.cover_small + '"><p>' + element.title_short + '</p></div></a>'
        });

        
    })