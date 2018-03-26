import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ArticleList from '../components/article-list';
import { loadArticleList } from '../actions/article-list-ac';
import { getState } from '../';

class ArticleListCt extends Component {
  componentWillMount() {
    this.props.loadArticleList();
  }
  render() {
    return <ArticleList {...this.props} />;
  }
}
ArticleListCt.propTypes = {
  loadArticleList: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return { articleList: getState(state).articleList.received };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadArticleList }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleListCt);
