/* 
Fetch data in JSON format from pokeapi.co about 
a pokedex using either an numeric id or
string that is a valid pokemon location
*/
async function getPokedex(id) {
    const pokeURL = `https://pokeapi.co/api/v2/pokedex/${id}`;
    const result = await fetch(pokeURL);
    const pokedexData = await result.json();
    //current log return array of 151 pokemon (entry_number, pokemon_species)
    console.log(pokedexData.pokemon_entries);
}
//Test getting pokedex for first area "kanto" (Original 150)
//getPokedexe("kanto")


// References a div in the index body that will contain all Pokemon Cards
const pokeCardContainer = document.getElementById('pokeCardContainer');

/* Creates an html div for on each call that displays a pokemon
 */
function createPokemonCard(pokemonArray) {
    pokemonArray.forEach(element => {
        //An element to add cards to
        const pokemonElement = document.createElement('div');
        //Add a class to the div for css
        pokemonElement.classList.add('pokemonCard');

        //Variables for card data
        const pokeName = element.name[0].toUpperCase() + element.name.slice(1);
        //const pokeTypes = pokemon.types.map(typeData => typeData.type.name)
        //Inner HTML for each Pokemon card
        const pokeInnerHTML = `
        <div class="info">
        <h3 class="name">${pokeName}</h3>
        <span class="number"> ${element.id} </span>
        </div>
        
        <div class="img-container">
        <img src="https://pokeres.bastionbot.org/images/pokemon/${element.id}.png">
        </div>
        
        
        `;

        pokemonElement.innerHTML = pokeInnerHTML
        pokeCardContainer.appendChild(pokemonElement)

    });
}

const originalPokemonLastIndex = 151
    /* 
    Fetch data for 150 original pokemon from pokeapi.co
    @return An array of pokemon objects
    */
function fetchPokemon() {
    const arrayOfRequests = [];
    for (let index = 1; index <= originalPokemonLastIndex; index++) {
        const pokeURL = `https://pokeapi.co/api/v2/pokemon/${index}`;
        //Push URLs to array, then fetch API request, Then convert request to JSON
        arrayOfRequests.push(fetch(pokeURL).then(request => request.json()));
    }
    //Wait for all requests to finish in parallel
    Promise.all(arrayOfRequests).then(results => {
        //console.log(results);
        //Create pokemon object with data from results
        const pokemon = results.map(data => ({
            name: data.name,
            id: data.id,
            image: data.sprites["front_default"], //Image selected from collection
            type: data.types.map(type => type.type.name).join(", "),
        }));
        console.log(pokemon);
        //createPokemonCard(pokemon);
        createPokemonCard(pokemon);
    });
}
fetchPokemon();