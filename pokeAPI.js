/* 
Fetch data in JSON format from PokeAPI about a 
pokemon using either an numeric id or
string that is a valid pokemon name
*/
async function getPokemonInfo(id) {
    const pokeURL = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const result = await fetch(pokeURL);
    const pokemonData = await result.json();
    console.log(pokemonData);
}

//Run in browser for result
//getPokemonInfo(1);

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