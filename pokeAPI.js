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
getPokemonInfo(1);