const originalPokemonLastIndex = 151
/* 
Fetch data in JSON format from pokeapi.co about a 
pokemon using either an numeric id or
string that is a valid pokemon name and 
displays card
*/
async function getPokemon(id) {
    const pokeURL = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const result = await fetch(pokeURL);
    const pokemonData = await result.json();
    //console.log(pokemonData);
    createPokemonCard(pokemonData);
}

// Fetches the original 151 pokemon (with happen to be 1:151)
async function fetchOriginalPokemon() {
    for (let index = 1; index <= originalPokemonLastIndex; index++) {
        await getPokemon(index);
    }
}


fetchOriginalPokemon();

/* 
Fetch data in JSON format from pokeapi.co about 
a pokedex using either an numeric id or
string that is a valid pokemon location
*/
async function getPokedexe(id) {
    const pokeURL = `https://pokeapi.co/api/v2/pokedex/${id}`;
    const result = await fetch(pokeURL);
    const pokedexData = await result.json();
    //current log return array of 151 pokemon (entry_number, pokemon_species)
    console.log(pokedexData.pokemon_entries);
}
//Test getting pokedex for first area "kanto" (Original 150)
//getPokedexe("kanto")


// References a div in the index body that will contain all Pokemon Cards
const pokeCardContainer = document.getElementById('pokeCardContainer');

/* Creates an html div for on each call that displays a pokemon
*/
function createPokemonCard(pokemon) {
    //An element to add cards to
    const pokemonElemenmt = document.createElement('div');
    //Add a class to the div for css
    pokemonElemenmt.classList.add('pokemonCard');

    //Variables for card data
    const pokeName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    //const pokeTypes = pokemon.types.map(typeData => typeData.type.name)
    //Inner HTML for each Pokemon card
    const pokeInnerHTML = `
    <div class="info">
        <h3 class="name">${pokeName}</h3>
        <span class="number"> ${pokemon.id} </span>
    </div>

    <div class="img-container">
        <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png">
    </div>


    `;

    pokemonElemenmt.innerHTML = pokeInnerHTML
    pokeCardContainer.appendChild(pokemonElemenmt)
}
//createPokemonCard();