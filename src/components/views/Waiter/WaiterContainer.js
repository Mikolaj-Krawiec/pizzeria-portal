import { connect } from 'react-redux';
import Waiter from './Waiter';
import { getAll, fetchFromAPI, getLoadingState, statusChange_Async } from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  statusChange: (table, newStatus) => dispatch(statusChange_Async(table, newStatus)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);
