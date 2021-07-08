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
    const pokeStats = await pokeData.stats; //returned as [hp,attack,defense,special attack,special defense,speed]

    const pokName = pokeData.name[0].toUpperCase() + pokeData.name.slice(1);
    const pokHP = getPokemonHP(pokeStats);
    const pokAttack = getPokemonAttack(pokeStats);
    const pokDefense = getPokemonDefense(pokeStats);
    const pokSpeed = getPokemonSpeed(pokeStats);

    return [pokName,pokHP,pokAttack,pokDefense,pokSpeed]; //the values returned as an array of elements
}

function getPokemonHP(pokeStats){
    const hp = pokeStats[0].base_stat; 
    return hp;
}

function getPokemonAttack(pokeStats){
    const attack = pokeStats[1].base_stat; 
    const specAttack = pokeStats[3].base_stat;
    const finalAttack = (attack + specAttack)/2;
    const attackCeiling = Math.ceil(finalAttack);
    return attackCeiling;
}

function getPokemonDefense(pokeStats){
    const defense = pokeStats[2].base_stat; 
    const specDefense = pokeStats[4].base_stat;
    const finalDefense = (defense + specDefense)/2;
    const defenseCeiling = Math.ceil(finalDefense);
    return defenseCeiling;
}

function getPokemonSpeed(pokeStats){
    const speed = pokeStats[5].base_stat; 
    return speed;
}

async function getPokemonTypes(id){ //gets the type(s) of a pokemon
    const pokeURL = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const result = await fetch(pokeURL); 
    const pokeData = await result.json();
    const numberOfTypes = pokeData.types.length; //the number of types a pokemon has

    const type1 = pokeData.types[0].type.name;
    let type2 = 'none'; //using 'let' instead of 'const' since let can change
    if (numberOfTypes > 1){ //accounting for if a pokemon has 2 types instead of just 1
        type2 = pokeData.types[1].type.name;
    }

    return [type1,type2];
}

/*
Functions used for damage calculation. The formula is lifted from RhyQuinn on : https://www.youtube.com/watch?v=OMA7hY48jG8
*/

async function getMove(id){ //gets a move's name, type, power and accuracy
    const moveURL = `https://pokeapi.co/api/v2/move/${id}`;
    const result = await fetch(moveURL);
    const moveData = await result.json();

    const name = moveData.name[0].toUpperCase() + moveData.name.slice(1);
    const power = moveData.power;
    const accuracy = moveData.accuracy;
    const moveType = moveData.type.name;
    
    return [name,moveType,power,accuracy];
}

/*
Assumptions: 
-all pokemon are the same level of 35 (for now)
*/
async function damageCalculator(attackerId, defenderId, moveId){
    const attackerPokemonStats = getSinglePokemonData(attackerId); //returned as [name,hp,attack,defense,speed]
    const attackNum = attackerPokemonStats[2];
    const attackerTypes = getPokemonTypes(attackerId); 
    
    
    const defenderPokemonStats = getSinglePokemonData(defenderId); 
    const defenseNum = defenderPokemonStats[3];
    const defenderTypes = getPokemonTypes(defenderId);

    console.log(attackerPokemonStats);
    console.log(defenderPokemonStats);
    console.log(attackerTypes);
    console.log(defenderTypes);
    console.log(getMove(moveId));
    //status update: able to get stats, types, and move info at this point
}

async function pokemonThatGoesFirst(userPokemonId, cpuPokemonId){ //determines which pokemon is faster
    const userPokemonSpeed = getSinglePokemonData(userPokemonId)[4];
    const cpuPokemonSpeed = getSinglePokemonData(cpuPokemonId)[4];

    if (userPokemonSpeed >= cpuPokemonSpeed){
        damageCalculator(userPokemonId,cpuPokemonId);
    }
    
    else {
        damageCalculator(cpuPokemonId,userPokemonId);
    }
}