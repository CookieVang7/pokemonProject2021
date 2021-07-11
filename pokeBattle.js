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

    return { //returning multiple values
        name: pokName,
        hp: pokHP,
        attack: pokAttack,
        defense: pokDefense,
        speed: pokSpeed
    }
}

function getPokemonHP(pokeStats){
    const hp = pokeStats[0].base_stat; 
    return hp;
}

function getPokemonAttack(pokeStats){
    const attack = pokeStats[1].base_stat; //grabbing info from the api here and traversing arrays of data
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

/*
Get the type(s) of a pokemon. If the pokemon only has one type, the second slot will be 'none'
*/
async function getTypesOfPokemon(id){ 
    const pokeURL = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const result = await fetch(pokeURL); 
    const pokeData = await result.json();
    const numberOfTypes = pokeData.types.length; //the number of types a pokemon has

    const type1 = pokeData.types[0].type.name;
    let type2 = 'none'; 
    if (numberOfTypes > 1){ //accounting for if a pokemon has 2 types instead of just 1
        type2 = pokeData.types[1].type.name;
    }

    return { 
        firstType: type1,
        secondType: type2
    }
}

/*
Function used for damage calculation. The formula is lifted from RhyQuinn on : https://www.youtube.com/watch?v=OMA7hY48jG8
*/

async function getMove(id){ //gets a move's name, type, power and accuracy
    const moveURL = `https://pokeapi.co/api/v2/move/${id}`;
    const result = await fetch(moveURL);
    const moveData = await result.json();

    const moveName = moveData.name[0].toUpperCase() + moveData.name.slice(1);
    const movePower = moveData.power;
    const moveAccuracy = moveData.accuracy;
    const moveType = moveData.type.name;
    
    return { 
        name: moveName,
        power: movePower,
        accuracy: moveAccuracy,
        type: moveType
    }
}

/*
Function that gets the type number factor to use in the modifier. Takes in the type of the move (water, fire, etc.) and 
type(s) of the defending pokemon. The possible vallue are 0 (no damage), .25 (four times resistance), .5 (two times resistance), 1 (neutral/normal),
2 (double super effective), 4 (quad super effective)
*/
async function getTypeFactor(typeId,defenderId){
    const typeURL = `https://pokeapi.co/api/v2/type/${typeId}`; //ex: ground = 5
    const result = await fetch(typeURL);
    const typeData = await result.json(); 

    const defenderTypes = getTypesOfPokemon(defenderId); //types of the defending pokemon
    const type1 = (await defenderTypes).firstType;
    const type2 = (await defenderTypes).secondType;

    let typeNumber = 1; //the default type number of 1 meaning there is a neutral/normal amount of damage. A water move against a fire pokemon would be double damage (2)

    typeData.damage_relations.no_damage_to.forEach(moveType => {
        if (moveType.name == type1 || moveType.name == type2){
            typeNumber = 0;
        }
    })

    typeData.damage_relations.half_damage_to.forEach(moveType => { //when a pokemon has resistance (fire move on water pokemon)
        if (moveType.name == type1 || moveType.name == type2){
            typeNumber = typeNumber/2;
        }
    })

    typeData.damage_relations.double_damage_to.forEach(moveType => { //when a super effective move happens
        if (moveType.name == type1 || moveType.name == type2){
            typeNumber = typeNumber*2;
        }
    })

    return typeNumber;
}

/*
Modifier variable = STAB*Type*Critical*Random
*/
async function getModifierNumber(attackerId, defenderId, moveId){
    const attackerTypes = getTypesOfPokemon(attackerId);

    let moveUsed = getMove(moveId);

    let STAB = 1;
    if ((await moveUsed).type == (await attackerTypes).firstType || (await moveUsed).type == (await attackerTypes).secondType){
        STAB = 1.5;
    }

    let typeNumber = getTypeFactor((await moveUsed).type,defenderId);

    let critChance = 1;
    if (Math.random() <= .1){
        critChance = 1.5;
    }

    let randomRollFactor = (Math.random()*(1-.85))+.85; //returns a number between .85 and 1, the same attack doesn't always do the same damage (the term is a high or low roll)

    let modifier = STAB*(await typeNumber).valueOf()*critChance*randomRollFactor;

    return modifier;
}

/*
Function used for damage calculation. The formula is lifted from RhyQuinn on : https://www.youtube.com/watch?v=OMA7hY48jG8
Assumptions:
-all pokemon are the same level of 35 (for now)
-crit chance is 10%
-the modifier number is STAB*Type*Critical*Random
-random is the chance of a low or high roll (.85 to 1)
*/
async function damageCalculator(attackerId, defenderId, moveId){
    const attackerPokemonStats = getSinglePokemonData(attackerId); 
    let attackNum = (await attackerPokemonStats).attack;
    console.log(attackNum); 
    
    const defenderPokemonStats = getSinglePokemonData(defenderId); 
    let defenseNum = (await defenderPokemonStats).defense;
    let defenderHP = (await defenderPokemonStats).hp;
    console.log(defenderHP);

    let moveUsed = getMove(moveId); 
    console.log((await moveUsed).name,(await moveUsed).power);

    let modifier = getModifierNumber(attackerId,defenderId,moveId);
    console.log(modifier);

    let damage = (((2*35+10)/250)*(attackNum/defenseNum)*((await moveUsed).power+2)) * (await modifier).valueOf();
    console.log(damage);
    let finalDamage = Math.ceil(damage);
    console.log(finalDamage);

    let newDefenderHP = defenderHP - finalDamage;

    if (defenderHP <= 0){
        alert((await attackerPokemonStats).name + " has knocked out " + (await defenderPokemonStats).name + "!");
    }
    else {
        alert((await defenderPokemonStats).name + "'s HP has dropped from " + defenderHP + " to " + newDefenderHP);
    }
}

async function pokemonThatGoesFirst(userPokemonId, cpuPokemonId){ //determines which pokemon is faster
    const userPokemonSpeed = (await getSinglePokemonData(userPokemonId)).speed;
    const cpuPokemonSpeed = (await getSinglePokemonData(cpuPokemonId)).speed;

    if (userPokemonSpeed >= cpuPokemonSpeed){
        damageCalculator(userPokemonId,cpuPokemonId);
    }
    
    else {
        damageCalculator(cpuPokemonId,userPokemonId);
    }
}

async function battleSimulator(userPokemonId,cpuPokemonId){
    //
}