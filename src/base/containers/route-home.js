import PropTypes from 'prop-types';
import React from 'react';
import { Route } from 'react-router-dom';

import Home from './home';

export default function RouteHome({ path }) {
  return (
    <Route
      path={path}
      render={() => <Home path={path} />}
    />
  );
}
RouteHome.propTypes = {
  path: PropTypes.string.isRequired,
};
RouteHome.moduleName = 'home';
