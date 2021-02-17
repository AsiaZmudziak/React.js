import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {createAction_changeSearchString} from '../../redux/searchStringRedux';
import {getCardsForSearchResults} from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => {
  console.log(props);
  const cards = getCardsForSearchResults(state, props.match.params.searchString);
  return {cards};
  };

const mapDispatchToProps = (dispatch) => ({
  changeSearchString: newSearchString => dispatch(createAction_changeSearchString(newSearchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);