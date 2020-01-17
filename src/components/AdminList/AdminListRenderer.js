import { connect } from 'react-redux';
import { lifecycle, compose } from 'recompose';
import { fetchAdmins } from '../../actions';
import requireAuth from '../hocs/requireAuth';
import AdminList from './AdminList';

const mapStateToProps = ({ admins }) => {
  return { admins };
};

const reduxConnector = connect(mapStateToProps, { fetchAdmins });

const lifecycleHandlers = lifecycle({
  componentDidMount() {
    this.props.fetchAdmins();
  }
});

export default compose(
  reduxConnector,
  requireAuth,
  lifecycleHandlers,
)(AdminList);
