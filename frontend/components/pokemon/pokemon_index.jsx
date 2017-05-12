import React from 'react';
import { Route } from 'react-router-dom';
import PokemonDetailContainer from './pokemon_detail_container';
import PokemonIndexItem from './pokemon_index_item';
class PokemonIndex extends React.Component{

  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    this.props.requestAllPokemon();
  }

  render(){
    return (
      <div className="app">
        <button className="create-pokemon">CREATE POKEMON</button>
          <ul className="navigation">
            {
              this.props.pokemon.map((pokemon) => (
                  <li key={pokemon.id}>
                    <PokemonIndexItem pokemon={pokemon} />
                  </li>
                )
              )
            }
          </ul>

        <Route path='/pokemon/:pokemonId'
          component={PokemonDetailContainer}/>
      </div>
    );
  }
}

export default PokemonIndex;
