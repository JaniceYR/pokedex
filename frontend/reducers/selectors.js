import {values} from 'lodash';

export const selectAllPokemon = (state) => {
  return values(state.pokemon);
};

export const selectPokemonItem = (state, itemId) => {
  let newItem;
  state.pokemonDetail.items.forEach((item) => {
    if (item.id === parseInt(itemId)) {
      newItem = item;
    }
  });
  return newItem;
};
