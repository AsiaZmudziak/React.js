import {connect} from 'react-redux';
import {createActionAddColumn, getColumnsForList } from '../../redux/columnsRedux';
import List from './List';

const mapStateToProps = (state, props) => ({
  columns: getColumnsForList(state, props.id),
  
});

const mapDispatchToProps = (dispatch, props) => ({addColumn: title => 
  dispatch(
    createActionAddColumn({
      listId: props.id,
      title,
    })
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);