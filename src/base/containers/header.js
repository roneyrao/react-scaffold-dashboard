import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../components/header';
import { open, close } from '../actions/nav-opened-ac';

function mapStateToProps(state) {
  return { isNavOpened: state.isNavOpened };
}
function mapDispatchProps(dispatch) {
  return bindActionCreators({ openNav: open, closeNav: close }, dispatch);
}

export default connect(mapStateToProps, mapDispatchProps)(Header);
