import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/api_util.js';
import {fetchAllPokemon} from './actions/pokemon_actions';
import configureStore from './store/store';
import Root from './components/root';

import {selectAllPokemon} from './reducers/selectors';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  const store = configureStore();
  window.store = store;
  ReactDOM.render(<Root store={store}/>, rootEl);
});
