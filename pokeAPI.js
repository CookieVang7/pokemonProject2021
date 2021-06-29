/* 
Fetch data in JSON format from PokeAPI about a 
pokemon using either an numeric id or
string that is a valid pokemon name
*/
const getPokemonInfo = async id => {
    const pokeURL = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const result = await fetch(pokeURL);
    const pokemon = await result.json();
    console.log(pokemon);
}

//Run in browser for result
getPokemonInfo(1);