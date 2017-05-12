import React from 'react';
import ItemDetailContainer from './item_detail_container';
import {Route, Link} from 'react-router-dom';

class PokemonDetail extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount() {
    this.props.requestPokemonDetail(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(newProps) {
    const newId = newProps.match.params.pokemonId;
    if (newId !== this.props.match.params.pokemonId){
      this.props.requestPokemonDetail(newId);
    }
  }

  render() {
    if (!(this.props.pokemonDetail.moves)) {
        return (
        <div>loading...</div>
      );
    } else {
      return (
        <figure className="pokemon">
          <img className="portrait" src={this.props.pokemonDetail.image_url} />
          <ul>
            <li>
              Hi, I am{" " + this.props.pokemonDetail.name +" !"}
            </li>
            <li>
              Attack: {" " + this.props.pokemonDetail.attack}
            </li>
            <li>
              Defense: {" " + this.props.pokemonDetail.defense}
            </li>
            <li>
              Moves: {
                this.props.pokemonDetail.moves.join(', ')
              }
            </li>
            <li>
              Type: {" " + this.props.pokemonDetail.poke_type}
            </li>
          </ul>
          <ul className="items">
            {this.props.pokemonDetail.items.map(item => (
              <li key={item.id}>
                <Link to={`/pokemon/${item.pokemon_id}/item/${item.id}`} >
                  <img src={item.image_url} />
                </Link>
              </li>
            ))}
          </ul>
          <Route path="/pokemon/:pokemonId/item/:itemId"
            component={ItemDetailContainer} />
        </figure>
      );
    }
  }
}

export default PokemonDetail;
