import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_POKEMON_DETAIL = "RECEIVE_POKEMON_DETAIL";
export const RECEIVE_ONE_POKEMON = "RECEIVE_ONE_POKEMON";

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const requestAllPokemon = () => (dispatch) => {
  return APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)));
};

export const receivePokemonDetail = pokemonDetail => ({
  type: RECEIVE_POKEMON_DETAIL,
  pokemonDetail
});

export const requestPokemonDetail = (pokemonId) => (dispatch) => {
  return APIUtil.fetchPokemonDetail(pokemonId)
    .then(pokemonDetail => dispatch(receivePokemonDetail(pokemonDetail)));
};

export const createPokemon = (pokemon) => (dispatch) => {
  return APIUtil.createPokemon(pokemon)
    .then(newPokemon => dispatch(receiveOnePokemon(newPokemon)));
};

export const receiveOnePokemon = (pokemon) => ({
  type: RECEIVE_ONE_POKEMON,
  pokemon
});
