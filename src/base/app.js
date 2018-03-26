import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import './app.css';

import { Header, Body, NavHome, RouteHome } from './containers';
import { navList, routeList } from '../modules';


navList.unshift(NavHome);
routeList.unshift(RouteHome);

function App({ match }) {
  return (
    <Fragment>
      <Header />
      <Body navList={navList} routeList={routeList} match={match} />
      <footer>2017 © HNAIR</footer>
    </Fragment>
  );
}
App.propTypes = {
  match: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};
export default App;
