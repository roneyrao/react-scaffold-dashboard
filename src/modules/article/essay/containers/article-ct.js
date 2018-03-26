import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Article from '../components/article';
import { loadArticle } from '../actions/article-ac';
import { getState } from '../';

class ArticleCt extends Component {
  componentWillMount() {
    this.props.loadArticle(this.props.articleId);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.articleId !== this.props.articleId) {
      this.props.loadArticle(nextProps.articleId);
    }
  }
  render() {
    return <Article {...this.props} />;
  }
}
ArticleCt.propTypes = {
  loadArticle: PropTypes.func.isRequired,
  article: PropTypes.object, // eslint-disable-line
  articleId: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  const { article } = getState(state);
  return { article: article.received, loading: article.loading };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadArticle }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleCt);
