import PropTypes from 'prop-types';
import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import ArticleList from './article-list-ct';
import Article from './article-ct';
import Comments from './comments-ct';

export default function Routes({ path }) {
  return (
    <Switch>
      <Redirect key={`${path}/redirect`} exact path={path} to={`${path}/list`} />,
      <Route
        key={`${path}/list`}
        path={`${path}/list`}
        render={({ match }) => <ArticleList path={match.url} />}
      />
      <Route
        key={`${path}/comments`}
        path={`${path}/comments`}
        render={({ match }) => <Comments path={match.url} articleId={match.params.articleId} />}
      />
      <Route
        key={`${path}/article`}
        path={`${path}/:articleId`}
        render={({ match }) => <Article path={match.url} articleId={match.params.articleId} />}
      />
    </Switch>
  );
}
Routes.propTypes = {
  path: PropTypes.string.isRequired,
};
