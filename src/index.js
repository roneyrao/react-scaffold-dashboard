import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { App, reducers } from './base';
import './bootstrap.css';

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  const { createLogger } = require('redux-logger');
  middlewares.push(createLogger({
    collapsed: (getState, action, logEntry) => !logEntry.error,
  }));
}

const store = createStore(reducers, applyMiddleware(...middlewares));

render(
  <Provider store={store}>
    <Router>
      <Route path='/' component={App} />
    </Router>
  </Provider>
  , document.getElementById('root'),
);
