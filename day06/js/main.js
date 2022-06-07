// callbacks
// promises
// api
// json


// callbacks

const callback = (data) => {
    console.log(data, '!');
}

['a', 'b', 'c'].forEach(callback);

const myPromise = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve('hello');
    }, 5000);
});

myPromise.then(callback);


const ul = document.createElement('ul');
document.body.append(ul);


function displayPokemon(pokemonName) {
    fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonName).then(function(res) {
        console.log('res', res);
        return res.json();
    }).then((data) => {
        console.log('data', data);
        const wrapper = document.createElement('div');
        wrapper.textContent += data.name;
        document.body.appendChild(wrapper);
        const img = document.createElement('img');
        img.src = data.sprites.front_default;
        img.width = 400;
        wrapper.append(img)
    });
}

function getPokemonList(){
    fetch('https://pokeapi.co/api/v2/pokemon').then(function(res) {
        return res.json();
    }).then((data) => {
        console.log(data)
        data.results.forEach((item) => {
            const li = document.createElement('li');
            li.textContent = item.name;
            ul.append(li);
            li.style.margin = '30px';
            li.style.fontSize = '30px';
            li.addEventListener('click', function() {
                displayPokemon(item.name);
            })
        });
    });
}


getPokemonList();

// free apis with no authentication

// pokemon api
// github api
// google maps api
// google translate api
// google places api
// google calendar api
// google drive api
// google sheets api
// google photos api
// google drive api


// authentication
// google
// facebook
// twitter
// github
// linkedin
// instagram
// reddit
// pinterest
// tumblr
// snapchat


// github api

function getUserFromGithub(username) {
    fetch('https://api.github.com/users/' + username).then(function(res) {
        return res.json();
    }).then((data) => {
        console.log(data);
        const wrapper = document.createElement('div');
        wrapper.textContent += data.name;
        document.body.appendChild(wrapper);
        const img = document.createElement('img');
        img.src = data.avatar_url;
        img.width = 400;
        wrapper.append(img)
    });
}

// getUserFromGithub('vinsonf');
//


const baseUrl = 'https://jsonplaceholder.typicode.com/';

fetch(baseUrl + 'users').then((response) => {
    return response.json();
}).then(data => {
    console.log(data);
})

function getPlaceHolder(route){
    return fetch(baseUrl + route).then((response) => {
        return response.json();
    }).then(data => {
        console.log(data);
        return data;
    })
}

getPlaceHolder('photos').then(function(data){
    const url = data[2].url
    const img = document.createElement('img');
    img.src = url;
    img.width = 400;
    document.body.append(img);

});

document.forms.register.first.value = 'Vinson';

console.log(document.forms.register.first.value);