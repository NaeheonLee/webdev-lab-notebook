const pokemons = [
  { id: 1, name: "Bulbasaur", types: ["Grass", "Poison"] },
  { id: 2, name: "Ivysaur", types: ["Grass", "Poison"] },
  { id: 3, name: "Venusaur", types: ["Grass", "Poison"] },
  { id: 4, name: "Charmander", types: ["Fire"] },
  { id: 5, name: "Charmeleon", types: ["Fire"] },
  { id: 6, name: "Charizard", types: ["Fire", "Flying"] },
  { id: 7, name: "Squirtle", types: ["Water"] },
  { id: 8, name: "Wartortle", types: ["Water"] },
  { id: 9, name: "Blastoise", types: ["Water"] },
  { id: 10, name: "Caterpie", types: ["Bug"] },
  { id: 11, name: "Metapod", types: ["Bug"] },
  { id: 12, name: "Butterfree", types: ["Bug", "Flying"] },
  { id: 13, name: "Weedle", types: ["Bug", "Poison"] },
  { id: 14, name: "Kakuna", types: ["Bug", "Poison"] },
  { id: 15, name: "Beedrill", types: ["Bug", "Poison"] },
  { id: 16, name: "Pidgey", types: ["Normal", "Flying"] },
  { id: 17, name: "Pidgeotto", types: ["Normal", "Flying"] },
  { id: 18, name: "Pidgeot", types: ["Normal", "Flying"] },
  { id: 19, name: "Rattata", types: ["Normal"] },
  { id: 20, name: "Raticate", types: ["Normal"] },
];

// 1. forEachPokemon
const forEachPokemon = function () {
  let result = [];
  pokemons.forEach((pokemon) => {
    result.push(
      `#${pokemon.id} ${pokemon.name} - ${pokemon.types.join(" / ")}`,
    );
  });
  return result.join("\n");
};

console.log(forEachPokemon());

// 2. filterPokemons
const filterPokemons = function (type) {
  return pokemons
    .filter((pokemon) => pokemon.types.includes(type))
    .map((pokemon) => pokemon.name)
    .sort();
};

console.log(filterPokemons("Fire"));
console.log(filterPokemons("Normal"));
console.log(filterPokemons("Poison"));

// 3. searchPokemons
const searchPokemons = function (query) {
  const lowerCaseQuery = query.toLowerCase();

  return pokemons.filter((pokemon) => {
    const nameMatch = pokemon.name.toLowerCase().includes(lowerCaseQuery);

    const typeMatch =
      pokemon.types.filter((type) =>
        type.toLowerCase().includes(lowerCaseQuery),
      ).length > 0;

    return nameMatch || typeMatch;
  });
};

console.log(searchPokemons("Wartortle"));
console.log(searchPokemons("pidgey"));
console.log(searchPokemons("bug"));

// 4. reducePokemons
const reducePokemons = function () {
  return pokemons.reduce((acc, pokemon) => {
    pokemon.types.forEach((type) => {
      acc[type] = (acc[type] || 0) + 1;
    });
    return acc;
  }, {});
};

// Compute the object and assign the properties to the function object itself
Object.assign(reducePokemons, reducePokemons());

console.log(reducePokemons);
