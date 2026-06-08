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

// Add your code here for: forEachPokemon
const forEachPokemon = function () {
  let result = [];
  pokemons.forEach((pokemon) => {
    // String interpolation to format the output
    result.push(
      `#${pokemon.id} ${pokemon.name} - ${pokemon.types.join(" / ")}`,
    );
  });
  // Join the array into a single string with line breaks
  return result.join("\n");
};

console.group("=========== forEachPokemon =========== ");
console.log(forEachPokemon());
// #1 Bulbasaur - Grass / Poison
// #2 Ivysaur - Grass / Poison
// #3 Venusaur - Grass / Poison
// #4 Charmander - Fire
// #5 Charmeleon - Fire
// #6 Charizard - Fire / Flying
// #7 Squirtle - Water
// #8 Wartortle - Water
// #9 Blastoise - Water
// #10 Caterpie - Bug
// #11 Metapod - Bug
// #12 Butterfree - Bug / Flying
// #13 Weedle - Bug / Poison
// #14 Kakuna - Bug / Poison
// #15 Beedrill - Bug / Poison
// #16 Pidgey - Normal / Flying
// #17 Pidgeotto - Normal / Flying
// #18 Pidgeot - Normal / Flying
// #19 Rattata - Normal
// #20 Raticate - Normal
console.groupEnd();

// Add your code here for: filterPokemons
const filterPokemons = function (type) {
  return pokemons
    .filter((pokemon) => pokemon.types.includes(type))
    .map((pokemon) => pokemon.name)
    .sort((a, b) => a.localeCompare(b));
};

console.group("=========== filterPokemons =========== ");
console.log(filterPokemons("Fire"));
// [ 'Charizard', 'Charmander', 'Charmeleon' ]
console.log(filterPokemons("Normal"));
// [ 'Pidgeot', 'Pidgeotto', 'Pidgey', 'Raticate', 'Rattata' ]
console.log(filterPokemons("Poison"));
// [ 'Beedrill', 'Bulbasaur', 'Ivysaur', 'Kakuna', 'Venusaur', 'Weedle' ]
console.groupEnd();

// Add your code here for: searchPokemons
const searchPokemons = function (query) {
  const lowerCaseQuery = query.toLowerCase();

  return pokemons.filter((pokemon) => {
    // Check if the name includes the query
    const nameMatch = pokemon.name.toLowerCase().includes(lowerCaseQuery);

    // Check if any of the types include the query
    const typeMatch = pokemon.types.some((type) =>
      type.toLowerCase().includes(lowerCaseQuery),
    );

    return nameMatch || typeMatch;
  });
};

console.group("=========== searchPokemons =========== ");
console.log(searchPokemons("Wartortle"));
// [ { id: 8, name: 'Wartortle', types: [ 'Water' ] } ]
console.log(searchPokemons("pidgey"));
// [ { id: 16, name: 'Pidgey', types: [ 'Normal', 'Flying' ] } ]
console.log(searchPokemons("bug"));
// [
//   { id: 10, name: 'Caterpie', types: [ 'Bug' ] },
//   { id: 11, name: 'Metapod', types: [ 'Bug' ] },
//   { id: 12, name: 'Butterfree', types: [ 'Bug', 'Flying' ] },
//   { id: 13, name: 'Weedle', types: [ 'Bug', 'Poison' ] },
//   { id: 14, name: 'Kakuna', types: [ 'Bug', 'Poison' ] },
//   { id: 15, name: 'Beedrill', types: [ 'Bug', 'Poison' ] }
// ]
console.groupEnd();

// Add your code here for: reducePokemons
const reducePokemons = function () {
  return pokemons.reduce((acc, curr) => {
    // Loop through each type a pokemon has
    curr.types.forEach((type) => {
      // If the type already exists in our object, add 1 to the count
      if (acc[type]) {
        acc[type]++;
      } else {
        // Otherwise, initialize the count at 1
        acc[type] = 1;
      }
    });
    return acc; // Return the updated object for the next iteration
  }, {});
};

console.group("=========== reducePokemons =========== ");
console.log(reducePokemons);
// {
//   Grass: 3,
//   Poison: 6,
//   Fire: 3,
//   Flying: 5,
//   Water: 3,
//   Bug: 6,
//   Normal: 5
// }
console.groupEnd();
