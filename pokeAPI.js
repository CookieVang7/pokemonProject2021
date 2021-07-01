/* 
Fetch data in JSON format from pokeapi.co about a 
pokemon using either an numeric id or
string that is a valid pokemon name
*/
async function getPokemonInfo(id) {
    const pokeURL = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const result = await fetch(pokeURL);
    const pokemonData = await result.json();
    console.log(pokemonData);
}
//Test
//getPokemonInfo(1);

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
getPokedexe("kanto")


// References a div in the index body that will contain all Pokemon Cards
const pokeCardContainer = document.getElementById('pokeCardContainer');

/* Creates an html div for on each call that displays a pokemon
*/
function createPokemonCard(pokemon) {
    const pokemonElemenmt = document.createElement('div');
    pokemonElemenmt.classList.add('pokemon');

    const pokeInnerHTML = "test";

    pokemonElemenmt.innerHTML = pokeInnerHTML
    
    pokeCardContainer.appendChild(pokemonElemenmt)
}
createPokemonCard();