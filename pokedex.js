//The pokedex. I'm choosing the moves of the Pokemon. They're only the ones pokemon learned by level up (no TMs or HMs)
//The abilities of Pokemon are NOT taken into account (at least so far...)
//Since the simulation is only a one time battle, EV's and IV's are not accounted for
let bulbasaur = {name:"Bulbasaur", type1:"grass", type2:"poison", level:"20", hp:"45", attack:"49", defense:"49", specAtk:"65", specDef:"65", speed:"45", moves:["tackle","vine whip","stun spore","razor leaf"], status:"none"};
let ivysaur = {name:"Ivysaur", type1:"grass", type2:"poison", level:"30", hp:"60", attack:"62", defense:"63", specAtk:"80", specDef:"80", speed:"60", moves:["tackle","poison powder","razor leaf","solarbeam"], status:"none"};
let venusaur = {name:"Venusaur", type1:"grass", type2:"poison", level:"40", hp:"80", attack:"82", defense:"83", specAtk:"100", specDef:"100", speed:"80", moves:["razor leaf","sleep powder","synthesis","solarbeam"], status:"none"};
let charmander = {name:"Charmander", type1:"fire", type2:"none", level:"20", hp:"39", attack:"52", defense:"43", specAtk:"60", specDef:"50", speed:"65", moves:["scratch","ember","growl","metal claw"], status:"none"};
let charmeleon = {name:"Charmeleon", type1:"fire", type2:"none", level:"30", hp:"58", attack:"64", defense:"58", specAtk:"80", specDef:"65", speed:"80", moves:["scratch","metal claw","smokescreen","flamethrower"], status:"none"};
let charizard = {name:"Charizard", type1:"fire", type2:"flying", level:"40", hp:"78", attack:"84", defense:"78", specAtk:"109", specDef:"85", speed:"100", moves:["slash","smokescreen","flamethrower","wing attack"], status:"none"};
let squirtle = {name:"Squirtle", type1:"water", type2:"none", level:"20", hp:"44", attack:"48", defense:"65", specAtk:"50", specDef:"64", speed:"43", moves:["tackle","tail whip","water gun","bite"], status:"none"};
let wartortle = {name:"Wartortle", type1:"water", type2:"none", level:"30", hp:"59", attack:"63", defense:"80", specAtk:"65", specDef:"80", speed:"58", moves:["bite","tail whip","water gun","hydro pump"], status:"none"};
let blastoise = {name:"Blastoise", type1:"water", type2:"none", level:"40", hp:"79", attack:"83", defense:"100", specAtk:"85", specDef:"105", speed:"78", moves:["skull bash","tail whip","water gun","hydro pump"], status:"none"};
let caterpie = {name:"Caterpie", type1:"bug", type2:"none", level:"20", hp:"45", attack:"30", defense:"35", specAtk:"20", specDef:"20", speed:"45", moves:["tackle","string shot"], status:"none"};
let metapod = {name:"Metapod", type1:"bug", type2:"none", level:"30", hp:"50", attack:"20", defense:"55", specAtk:"25", specDef:"25", speed:"30", moves:["tackle","string shot","harden"], status:"none"};
let butterfree = {name:"Butterfree", type1:"bug", type2:"flying", level:"40", hp:"60", attack:"45", defense:"50", specAtk:"90", specDef:"80", speed:"70", moves:["confusion","gust","silver wind","supersonic"], status:"none"};
let weedle = {name:"Weedle", type1:"bug", type2:"poison", level:"20", hp:"40", attack:"35", defense:"30", specAtk:"20", specDef:"20", speed:"50", moves:["poison sting","string shot"], status:"none"};
let kakuna = {name:"Kakuna", type1:"bug", type2:"poison", level:"30", hp:"45", attack:"25", defense:"50", specAtk:"25", specDef:"25", speed:"35", moves:["poison sting","string shot","harden"], status:"none"};
let beedrill = {name:"Beedrill", type1:"bug", type2:"poison", level:"40", hp:"65", attack:"90", defense:"40", specAtk:"45", specDef:"80", speed:"75", moves:["twineedle","rage","pursuit","agility"], status:"none"};
let pidgey = {name:"Pidgey", type1:"normal", type2:"flying", level:"20", hp:"40", attack:"45", defense:"40", specAtk:"35", specDef:"35", speed:"56", moves:["tackle","gust","sand attack","quick attack"], status:"none"};

//The list of pokemon moves that deal damage, their type, power points (PP), power, accuracy, and change of status effects
let tackle = {type:"normal", power:"35", accuracy:".95", pp:"35", effect:"0"};
let scratch = {type:"normal", power:"40", accuracy:"1", pp:"35", effect:"0"};
let slash = {type:"normal", power:"70", accuracy:"1", pp:"20", effect:"0"};
let rage = {type:"normal", power:"20", accuracy:"1", pp:"20", effect:"0"};
let skullBash = {type:"normal", power:"100", accuracy:"1", pp:"15", effect:"0"};
let quickAttack = {type:"normal", power:"40", accuracy:"1", pp:"30", effect:"0"};
let vineWhip = {type:"grass", power:"35", accuracy:"1", pp:"10", effect:"0"};
let razorLeaf = {type:"grass", power:"55", accuracy:".95", pp:"25", effect:"0"};
let solarbeam = {type:"grass", power:"100", accuracy:"1", pp:"35", effect:"0"};
let ember = {type:"fire", power:"40", accuracy:"1", pp:"25", effect:".1"};
let flamethrower = {type:"fire", power:"95", accuracy:"1", pp:"15", effect:".1"};
let waterGun = {type:"water", power:"40", accuracy:"1", pp:"25", effect:"0"};
let hydroPump = {type:"water", power:"120", accuracy:".80", pp:"5", effect:"0"};
let confusion = {type:"psychic", power:"50", accuracy:"1", pp:"25", effect:".1"}
let wingAttack = {type:"flying", power:"60", accuracy:"1", pp:"35", effect:"0"};
let gust = {type:"flying", power:"40", accuracy:"1", pp:"40", effect:"0"};
let metalClaw = {type:"steel", power:"50", accuracy:".95", pp:"35", effect:".1"};
let bite = {type:"dark", power:"60", accuracy:"1", pp:"25", effect:".3"};
let pursuit = {type:"dark", power:"40", accuracy:"1", pp:"20", effect:"0"};
let poisonSting = {type:"poison", power:"15", accuracy:"1", pp:"35", effect:".3"};
let twinneedle = {type:"bug", power:"25", accuracy:"1", pp:"20", effect:".2"};
let silverWind = {type:"bug", power:"60", accuracy:"1", pp:"5", effect:".1"};

function getPokemonInfo(pokemon){
    return pokemon;
}

function getHP(pokemon){
    alert(pokemon.hp);
}

function getName(pokemon){
    return pokemon.name;
}

function getLevel(pokemon){
return pokemon.level;
}

function getHealth(pokemon){
return pokemon.hp;
}

function getAttack(pokemon){
    return pokemon.attack;
}

function getDefense(pokemon){
return pokemon.defense;
}

function getSpecialAttack(pokemon){
return pokemon.specAtk;
}

function getSpecialDefense(pokemon){
return pokemon.specDef;
}

function getSpeed(pokemon){
return pokemon.speed;
}

function getStats(pokemon){

    var level = getLevel(pokemon);
    var health = getHealth(pokemon);
    var attack = getAttack(pokemon);
    var defense = getDefense(pokemon);
    var specialAttack = getSpecialAttack(pokemon);
    var specialDefense = getSpecialDefense(pokemon);
    var speed = getSpeed(pokemon);

    var str = 
        "Level: " + level + "<br>" +
        "Health: " + health + "<br>" +
        "Attack: " + attack + "<br>" +
        "Defense: " + defense + "<br>" +
        "Special Attack: " + specialAttack + "<br>" +
        "Special Defense: " + specialDefense + "<br>" +
        "Speed: " + speed;

    return str;
}

/*
    Formats a given array into an unordered list to be used in an HTML document.
*/
function arrToUL(pokemon) {

    let movesRaw = JSON.stringify(pokemon.moves);

    let movesListArr = JSON.parse(movesRaw);

    var inner = '';

    for (i in movesListArr) {
        inner += "<li>" + movesListArr[i] + "</li>";
    }

    return inner;
}