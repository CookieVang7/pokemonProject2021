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
let pidgeotto = {name:"Pidgeotto", type1:"normal", type2:"flying", level:"30", hp:"63", attack:"60", defense:"55", specAtk:"50", specDef:"50", speed:"71", moves:["quick attack","sand attack","wing attack","featherdance"], status:"none"};
let pidgeot = {name:"Pidgeot", type1:"normal", type2:"flying", level:"40", hp:"83", attack:"80", defense:"75", specAtk:"70", specDef:"70", speed:"101", moves:["wing attack","featherdance","mirror move","agility"], status:"none"};
let rattata = {name:"Rattata", type1:"normal", type2:"none", level:"25", hp:"30", attack:"56", defense:"35", specAtk:"25", specDef:"35", speed:"72", moves:["tackle","tail whip","quick attack","hyper fang"], status:"none"};
let raticate = {name:"Raticate", type1:"normal", type2:"none", level:"35", hp:"55", attack:"81", defense:"60", specAtk:"50", specDef:"70", speed:"97", moves:["hyper fang","scary face","pursuit","super fang"], status:"none"};
let spearow = {name:"Spearow", type1:"normal", type2:"flying", level:"25", hp:"40", attack:"60", defense:"30", specAtk:"31", specDef:"31", speed:"70", moves:["peck","growl","fury attack","aerial ace"], status:"none"};
let fearow = {name:"Fearow", type1:"normal", type2:"flying", level:"35", hp:"65", attack:"90", defense:"65", specAtk:"61", specDef:"61", speed:"100", moves:["pursuit","drill peck","mirror move","agility"], status:"none"};
let ekans = {name:"Ekans", type1:"poison", type2:"none", level:"25", hp:"35", attack:"60", defense:"44", specAtk:"40", specDef:"54", speed:"55", moves:["wrap","leer","poison sting","bite"], status:"none"};
let arbok = {name:"Arbok", type1:"poison", type2:"none", level:"35", hp:"60", attack:"95", defense:"69", specAtk:"65", specDef:"79", speed:"80", moves:["bite","screech","glare","acid"], status:"none"};
let pikachu = {name:"Pikachu", type1:"electric", type2:"none", level:"25", hp:"35", attack:"55", defense:"40", specAtk:"50", specDef:"50", speed:"90", moves:["thundershock","tail whip","quick attack","thunder wave"], status:"none"};
let raichu = {name:"Raichu", type1:"electric", type2:"none", level:"35", hp:"60", attack:"90", defense:"55", specAtk:"90", specDef:"80", speed:"110", moves:["thunderbolt","light screen","slam","thunder"], status:"none"};
let sandshrew = {name:"Sandshrew", type1:"ground", type2:"none", level:"25", hp:"50", attack:"75", defense:"85", specAtk:"20", specDef:"30", speed:"40", moves:["scratch","sand attack","poison sting","slash"], status:"none"};
let sandslash = {name:"Sandslash", type1:"ground", type2:"none", level:"35", hp:"75", attack:"100", defense:"100", specAtk:"45", specDef:"55", speed:"65", moves:["slash","swift","sandstorm","sand tomb"], status:"none"};
let nidoranF = {name:"Nidoran(female)", type1:"poison", type2:"none", level:"20", hp:"55", attack:"47", defense:"52", specAtk:"40", specDef:"40", speed:"41", moves:["scratch","tail whip","poison sting","double kick"], status:"none"};
let nidorina = {name:"Nidorina", type1:"poison", type2:"none", level:"30", hp:"70", attack:"62", defense:"67", specAtk:"55", specDef:"55", speed:"56", moves:["poison sting","bite","fury swipes","flatter"], status:"none"};
let nidoqueen = {name:"Nidoqueen", type1:"poison", type2:"ground", level:"40", hp:"90", attack:"92", defense:"87", specAtk:"75", specDef:"85", speed:"76", moves:["body slam","superpower","flatter","crunch"], status:"none"};
let nidoranM = {name:"Nidoran(male)", type1:"poison", type2:"none", level:"20", hp:"46", attack:"57", defense:"40", specAtk:"40", specDef:"40", speed:"50", moves:["peck","tail whip","double kick","poison sting"], status:"none"};
let nidorino = {name:"Nidorino", type1:"poison", type2:"none", level:"30", hp:"61", attack:"72", defense:"57", specAtk:"55", specDef:"55", speed:"65", moves:["horn attack","poison sting","fury attack","flatter"], status:"none"};
let nidoking = {name:"Nidoking", type1:"poison", type2:"ground", level:"40", hp:"81", attack:"102", defense:"77", specAtk:"85", specDef:"75", speed:"85", moves:["horn attack","flatter","megahorn","thrash"], status:"none"};
let clefairy = {name:"Clefairy", type1:"normal", type2:"none", level:"25", hp:"70", attack:"45", defense:"48", specAtk:"60", specDef:"65", speed:"35", moves:["pound","sing","doubleslap","minimize"], status:"none"};
let clefable = {name:"Clefable", type1:"normal", type2:"none", level:"35", hp:"95", attack:"70", defense:"73", specAtk:"95", specDef:"90", speed:"60", moves:["pound","cosmic power","moonlight","meteor mash"], status:"none"};
let vulpix = {name:"Vulpix", type1:"fire", type2:"none", level:"25", hp:"38", attack:"41", defense:"40", specAtk:"50", specDef:"65", speed:"65", moves:["quick attack","tail whip","willowisp","ember"], status:"none"};
let ninetails = {name:"Ninetails", type1:"fire", type2:"none", level:"35", hp:"73", attack:"76", defense:"75", specAtk:"81", specDef:"100", speed:"100", moves:["flamethrower","confuse ray","fire spin","safeguard"], status:"none"};
let jigglypuff = {name:"Jigglypuff", type1:"normal", type2:"none", level:"25", hp:"115", attack:"45", defense:"20", specAtk:"45", specDef:"25", speed:"20", moves:["pound","sing","defensive curl","rollout"], status:"none"};
let wigglytuff = {name:"Wigglytuff", type1:"normal", type2:"none", level:"35", hp:"140", attack:"70", defense:"45", specAtk:"85", specDef:"50", speed:"45", moves:["body slam","rest","hyper voice","double edge"], status:"none"};
let zubat = {name:"Zubat", type1:"poison", type2:"flying", level:"25", hp:"40", attack:"45", defense:"35", specAtk:"30", specDef:"40", speed:"55", moves:["astonish","supersonic","wing attack","bite"], status:"none"};
let golbat = {name:"Golbat", type1:"poison", type2:"flying", level:"35", hp:"75", attack:"80", defense:"70", specAtk:"65", specDef:"75", speed:"90", moves:["wing attack","bite","confuse ray","poison fang"], status:"none"};
let oddish = {name:"Oddish", type1:"grass", type2:"poison", level:"20", hp:"40", attack:"45", defense:"50", specAtk:"75", specDef:"65", speed:"30", moves:["absorb","poison powder","stun spore","acid"], status:"none"};
let gloom = {name:"Gloom", type1:"grass", type2:"poison", level:"30", hp:"60", attack:"65", defense:"70", specAtk:"85", specDef:"75", speed:"40", moves:["absorb","acid","moonlight","sleep powder"], status:"none"};
let vileplume = {name:"Vileplume", type1:"grass", type2:"poison", level:"40", hp:"75", attack:"80", defense:"85", specAtk:"110", specDef:"90", speed:"50", moves:["petal dance","sleep powder","moonlight","acid"], status:"none"};
let paras = {name:"Paras", type1:"bug", type2:"grass", level:"25", hp:"35", attack:"70", defense:"55", specAtk:"45", specDef:"55", speed:"25", moves:["scratch","stun spore","leech life","spore"], status:"none"};
let parasect = {name:"Parasect", type1:"bug", type2:"grass", level:"35", hp:"60", attack:"95", defense:"80", specAtk:"60", specDef:"80", speed:"30", moves:["slash","growth","giga drain","aromatherapy"], status:"none"};
let venonat = {name:"Venonat", type1:"bug", type2:"poison", level:"25", hp:"60", attack:"55", defense:"50", specAtk:"40", specDef:"55", speed:"45", moves:["tackle","confusion","poison powder","leech life"], status:"none"};
let venomoth = {name:"Venomoth", type1:"bug", type2:"poison", level:"35", hp:"70", attack:"65", defense:"60", specAtk:"90", specDef:"75", speed:"90", moves:["gust","stun spore","sleep powder","psychic"], status:"none"};
let diglett = {name:"Diglett", type1:"ground", type2:"none", level:"25", hp:"10", attack:"55", defense:"25", specAtk:"35", specDef:"45", speed:"95", moves:["scratch","growl","dig","magnitude"], status:"none"};
let dugtrio = {name:"Dugtrio", type1:"ground", type2:"none", level:"35", hp:"35", attack:"100", defense:"50", specAtk:"50", specDef:"70", speed:"120", moves:["mud slap","slash","earthquake","sand tomb"], status:"none"};
let meowth = {name:"Meowth", type1:"normal", type2:"none", level:"25", hp:"40", attack:"45", defense:"35", specAtk:"40", specDef:"40", speed:"90", moves:["scratch","growl","bite","pay day"], status:"none"};
let persian = {name:'Persian', type1:'normal', type2:'none', level:'35', hp:'65', attack:'70', defense:'60', specAtk:'65', specDef:'65', speed:'115', moves:['faint attack','screech','fury swipes','slash'], status:'none'};
let psyduck = {name:'Psyduck', type1:'water', type2:'none', level:'25', hp:'50', attack:'52', defense:'48', specAtk:'65', specDef:'50', speed:'55', moves:['scratch','tail whip','confusion','screech'], status:'none'};
let golduck = {name:'Golduck', type1:'water', type2:'none', level:'35', hp:'80', attack:'82', defense:'78', specAtk:'95', specDef:'80', speed:'85', moves:['confusion','screech','fury swipes','hydro pump'], status:'none'};
let mankey = {name:'Mankey', type1:'fighting', type2:'none', level:'25', hp:'40', attack:'80', defense:'35', specAtk:'35', specDef:'45', speed:'70', moves:['scratch','leer','fury swipes','karate chop'], status:'none'};
let primeape = {name:'Primeape', type1:'fighting', type2:'none', level:'35', hp:'65', attack:'105', defense:'60', specAtk:'60', specDef:'70', speed:'95', moves:['seismic toss','cross chop','screech','thrash'], status:'none'};
let growlithe = {name:'Growlithe', type1:'fire', type2:'none', level:'25', hp:'55', attack:'70', defense:'45', specAtk:'70', specDef:'50', speed:'60', moves:['bite','ember','leer','take down'], status:'none'};
let arcanine = {name:'Arcanine', type1:'fire', type2:'none', level:'35', hp:'90', attack:'110', defense:'80', specAtk:'100', specDef:'80', speed:'95', moves:['flame wheel','agility','flamethrower','extremespeed'], status:'none'};


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

