const pokemonColors = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#ea7ce8",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

// Select our DOM elements
const pokemonContainer = document.getElementById("pokemon-container");
const loadingContainer = document.getElementById("loading-container");
const searchInput = document.getElementById("search-input");
const noResults = document.getElementById("no-results");

pokemonContainer.classList.add("pokemon-container");

let allPokemons = [];

const fetchPokemons = async () => {
  try {
    // 1. Fetch the list of the first 25 pokemon
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=25");
    const data = await response.json();

    // 2. Fetch details in parallel
    const detailedPokemons = await Promise.all(
      data.results.map(async (pokemon) => {
        const res = await fetch(pokemon.url);
        return res.json();
      }),
    );

    // Save data and hide the loader
    allPokemons = detailedPokemons;
    loadingContainer.classList.add("hidden");

    // Render the initial batch
    renderPokemons(allPokemons);
  } catch (error) {
    console.error("Error fetching Pokemons:", error);
    loadingContainer.innerHTML =
      '<p style="color: white;">Error loading data.</p>';
  }
};

const renderPokemons = (pokemonsList) => {
  // Clear out the container before rendering
  pokemonContainer.innerHTML = "";

  // Check if search result is empty
  if (pokemonsList.length === 0) {
    noResults.classList.remove("hidden");
    return;
  }

  noResults.classList.add("hidden");

  // Create a card for each Pokémon
  pokemonsList.forEach((pokemon) => {
    const card = document.createElement("div");
    card.classList.add("pokemon-card");

    const img = document.createElement("img");
    img.src = pokemon.sprites.front_default;
    img.alt = pokemon.name;
    img.classList.add("pokemon-image");

    const name = document.createElement("h3");
    name.textContent = pokemon.name;
    name.classList.add("pokemon-name");

    const typesContainer = document.createElement("div");

    // Loop through the types array to create colored pills
    pokemon.types.forEach((typeInfo) => {
      const typeName = typeInfo.type.name;
      const pill = document.createElement("span");
      pill.textContent = typeName;
      pill.classList.add("type-pill");
      pill.style.backgroundColor = pokemonColors[typeName];
      typesContainer.appendChild(pill);
    });

    // Layout order: Name, Image, Types
    card.appendChild(name);
    card.appendChild(img);
    card.appendChild(typesContainer);

    pokemonContainer.appendChild(card);
  });
};

// Listen for users typing in the search box
searchInput.addEventListener("input", (event) => {
  const query = event.target.value.toLowerCase();

  // Optimized to use .includes() for intuitive card filtering
  const filteredPokemons = allPokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(query),
  );

  // Re-render the UI with the filtered list
  renderPokemons(filteredPokemons);
});

// Kick off the script
fetchPokemons();
