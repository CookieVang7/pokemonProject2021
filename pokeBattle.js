/*
Set of functions that accesses a single pokemon's battle stats based on the its pokedex number. The "attack" of a pokemon
for now is the average of the pokemon's attack and special attack (and it works the same for defense) The keyword "await" is used
to wait for a promise. The method fetch() gets a resource and returns it as a promise object. The json() method
parses the response as a json object
*/
async function getSinglePokemonData(id){
    const pokeURL = `https://pokeapi.co/api/v2/pokemon/${id}`; //getting the info from the api
    const result = await fetch(pokeURL); //the raw data from the api
    const pokeData = await result.json(); //the data now in json form
    const pokeStats = await pokeData.stats;

    //pokeStats is an array with 6 elements: hp, attack, defense, special attack, special defense, and speed

    getPokemonHP(pokeStats);
    getPokemonAttack(pokeStats);
    getPokemonDefense(pokeStats);
    getPokemonSpeed(pokeStats);
}

function getPokemonHP(pokeStats){
    const hp = pokeStats[0].base_stat; 
    console.log(hp);
}

function getPokemonAttack(pokeStats){
    const attack = pokeStats[1].base_stat; 
    const specAttack = pokeStats[3].base_stat;
    const finalAttack = (attack + specAttack)/2;
    const attackCeiling = Math.ceil(finalAttack);
    console.log(attackCeiling);
}

function getPokemonDefense(pokeStats){
    const defense = pokeStats[2].base_stat; 
    const specDefense = pokeStats[4].base_stat;
    const finalDefense = (defense + specDefense)/2;
    const defenseCeiling = Math.ceil(finalDefense);
    console.log(defenseCeiling);
}

function getPokemonSpeed(pokeStats){
    const speed = pokeStats[5].base_stat; 
    console.log(speed);
}