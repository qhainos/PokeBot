const listeMembres = ["krey", "kisuya", "meowzebi", "shavy", "xifou", "juda", "nissip", "seyko", "ryota", "knh", "khayalan", "saita", "obli", "yaga", "kev", "sado", "Crasskan", "doc", "vivi", "mister", "magiik", "bandoule", "abdel"];
let mesPokemons= [];

function roulettePokemon() {
    let pokemon;
    let lancerRoulette = true;
    while (lancerRoulette) {
        let rng = Math.floor(Math.random() * listeMembres.length)
        pokemon = listeMembres[rng];
        lancerRoulette = mesPokemons.includes(pokemon);
        mesPokemons.push(pokemon)
    }
    return pokemon;
}

function listePokemons() {
    let listePkm = mesPokemons[0];
    for (let i = 1 ; i < listePokemons.length; i++) {
        listePkm += ", " + mesPokemons[i];
    }
  return listePkm;
}

console.log("Ce pokemon sera : " + roulettePokemon());
console.log(mesPokemons.length)
console.log("Voici la liste de tes pokemons actuellement : " + listePokemons())