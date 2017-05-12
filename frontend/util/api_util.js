export const fetchAllPokemon = () => {
  return $.ajax({
    method: "GET",
    url: "/api/pokemon"
  });
};

export const fetchPokemonDetail = (pokemonId) => {
  return $.ajax({
    method: "GET",
    url: `/api/pokemon/${pokemonId}`
  });
};

export const createPokemon = (pokemon) => {
  return $.ajax({
    method: "POST",
    url: "/api/pokemon",
    data: {pokemon: pokemon}
  });
};
