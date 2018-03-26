import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Comments from '../components/comments';
import { loadComments } from '../actions/comments-ac';
import { getState } from '../';

class CommentsCt extends Component {
  componentWillMount() {
    this.props.loadComments();
  }
  render() {
    return <Comments {...this.props} />;
  }
}
CommentsCt.propTypes = {
  loadComments: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return { comments: getState(state).comments.received };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadComments }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsCt);
