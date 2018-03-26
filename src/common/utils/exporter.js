import PropTypes from 'prop-types';
import React from 'react';
import { combineReducers } from 'redux';
import { Route, Redirect, Switch } from 'react-router-dom';

import { Nav, NavItem } from 'Comps/nav';

export default function exportModules(modules, upperModule) {
  let reducers = {};

  function Navs({ path }) {
    return (
      <Nav title='Article' path={path}>
        {
          Object.entries(modules).map(([k, v]) => {
            const { Navs: N } = v;
            return (
              <NavItem key={k}>
                <N path={`${path}/${k}`} />
              </NavItem>
            );
          })
        }
      </Nav>
    );
  }
  Navs.propTypes = {
    path: PropTypes.string.isRequired,
  };

  const routeList = [];
  function Routes({ path }) {
    return (
      <Route path={path}>
        <Switch>
          {
            routeList.length && <Redirect key='redirect' path={path} exact to={`${path}/${routeList[0].moduleName}`} />
          }
          {
            routeList.map(R => <R key={R.moduleName} path={`${path}/${R.moduleName}`} />)
          }
        </Switch>
      </Route>
    );
  }
  Routes.propTypes = {
    path: PropTypes.string.isRequired,
  };

  Object.entries(modules).forEach(([k, v]) => {
    v.getState = function getState(state) {
      const { getState: getStateUpper } = upperModule;
      return getStateUpper ? getStateUpper(state)[k] : state[k];
    };
    reducers[k] = combineReducers(v.reducers);
    v.Routes.moduleName = k;
    routeList.push(v.Routes);
  });

  reducers = combineReducers(reducers);
  return { reducers, Navs, Routes };
}
