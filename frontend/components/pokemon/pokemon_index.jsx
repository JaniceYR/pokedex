import React from 'react';

class PokemonIndex extends React.Component{

  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    this.props.requestAllPokemon();
  }

  showPokemon(e){
    e.preventDefault();
    console.log('Yey!');
  }

  render(){
    return (
      <nav>
        <ul>
          {
            this.props.pokemon.map((pokemon) => (
                <li key={pokemon.id}>
                  <a onClick={this.showPokemon.bind(this)}>
                    <span>{pokemon.id}</span>
                    <img src={pokemon.image_url} />
                    <span>{pokemon.name}</span>
                  </a>
                </li>
              )
            )
          }
        </ul>
      </nav>
    );
  }
}

export default PokemonIndex;
