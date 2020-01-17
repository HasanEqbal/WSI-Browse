import { connect } from 'react-redux';
import Header from './Header';

export const mapStateToProps = ({ auth }) => {
  return { auth };
}

export default connect(mapStateToProps)(Header);
