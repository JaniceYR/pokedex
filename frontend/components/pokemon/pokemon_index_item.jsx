import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = ({pokemon}) => (

    <Link to={`/pokemon/${pokemon.id}`} >
      <span>{pokemon.id}</span>
      <img src={pokemon.image_url} />
      <span>{pokemon.name}</span>
    </Link>

);

export default PokemonIndexItem;
