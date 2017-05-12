import ItemDetail from './item_detail';
import { connect } from 'react-redux';
import {selectPokemonItem} from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    itemDetail: selectPokemonItem(state, ownProps.match.params.itemId)
  };
};

export default connect(mapStateToProps)(ItemDetail);
