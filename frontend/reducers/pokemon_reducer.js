import {RECEIVE_ALL_POKEMON} from "../actions/pokemon_actions";
import merge from 'lodash/merge';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
  case RECEIVE_ALL_POKEMON:
    let newState = merge({}, state, action.pokemon);
    return newState;
  default:
    return state;
  }
};


export default pokemonReducer;
