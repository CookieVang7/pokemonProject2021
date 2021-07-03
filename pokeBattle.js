/*
Function that accesses a single pokemon's info based on the its pokedex number. The keyword "await" is used
to wait for a promise. The method fetch() gets a resource and returns it as a promise object. The json() method
parses the response as a json object
*/
async function getSinglePokemonData(id){
    const pokeURL = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const result = await fetch(pokeURL);
    const pokeData = await result.json();
    return pokeData; //data returned as a JSON object
}