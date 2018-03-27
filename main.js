webpackJsonp([0],{

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Routes = exports.Navs = exports.reducers = undefined;

var _containers = __webpack_require__(721);

Object.defineProperty(exports, 'Navs', {
  enumerable: true,
  get: function get() {
    return _containers.Navs;
  }
});
Object.defineProperty(exports, 'Routes', {
  enumerable: true,
  get: function get() {
    return _containers.Routes;
  }
});

var _reducers2 = __webpack_require__(737);

var _reducers3 = _interopRequireDefault(_reducers2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.reducers = _reducers3.default;

/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.createReducer = createReducer;
exports.createCombinedReducer = createCombinedReducer;

var _redux = __webpack_require__(48);

/**
 * create a general reducer, which simply assgins action.payload to store.
 *
 * @param {Object} expectedAction - action with predefined format created by action layer.
 * @param {string} [name] - reducer name for easy tracing when debug.
 * @param {*} [defaultValue] - default initial value or a filter function
 * @returns {Function} - created reducer function.
 */
function createReducer(expectedAction, defaultValue) {
  defaultValue = defaultValue === undefined ? null : defaultValue;
  var reducer = function generalReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultValue;
    var action = arguments[1];

    return expectedAction === action ? action.payload : state;
  };
  // for easy tracing
  Object.defineProperty(reducer, 'name', { value: expectedAction.type });
  return reducer;
}

function createCombinedReducer(actions, defaultValues) {
  var reducers = {};
  Object.entries(actions).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        k = _ref2[0],
        action = _ref2[1];

    var defVal = defaultValues && defaultValues[k];
    if (defVal && typeof defVal === 'function') {
      // filter is supplied
      reducers[k] = defVal;
    } else {
      reducers[k] = createReducer(action, defVal);
    }
  });
  return (0, _redux.combineReducers)(reducers);
}

/***/ }),

/***/ 165:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"Header":"app__Header--3fVBu","Body":"app__Body--1yXk-","Body-topbar":"app__Body-topbar--16DsA","Body-navPanel":"app__Body-navPanel--2SDfd","Body-main":"app__Body-main--1jmqB","Body-navbar-toggler":"app__Body-navbar-toggler--Wys91","Body-navPanel--in":"app__Body-navPanel--in--3a4us","Body-main--in":"app__Body-main--in--1zwAX","Body-content":"app__Body-content--px7bb"};

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Nav = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

exports.NavItem = NavItem;

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(65);

var _reactBootstrap = __webpack_require__(574);

__webpack_require__(714);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Nav = exports.Nav = function (_Route) {
  _inherits(Nav, _Route);

  function Nav() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Nav);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Nav.__proto__ || Object.getPrototypeOf(Nav)).call.apply(_ref, [this].concat(args))), _this), _this.state = { match: _this.state.match, expanded: !!_this.state.match }, _this.handleClick = function () {
      return _this.setState({ expanded: !_this.state.expanded });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // constructor(props, context) {
  //   super(props, context);
  //   this.state.expanded = !!this.state.match;
  // }

  // when no title, expanding/folding is not functioning;
  // state = { expanded: super.state.match };


  _createClass(Nav, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps, nextContext) {
      // can not read right after set;
      // super.componentWillReceiveProps(nextProps, nextContext);
      this.setState({ expanded: !!_get(Nav.prototype.__proto__ || Object.getPrototypeOf(Nav.prototype), 'computeMatch', this).call(this, nextProps, nextContext.router) });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          children = _props.children,
          path = _props.path;
      var expanded = this.state.expanded;

      return title ? _react2.default.createElement(
        'div',
        { className: 'panel sidebarMenu ' + (expanded ? 'active' : '') },
        _react2.default.createElement(
          'div',
          { className: 'panel-heading', onClick: this.handleClick },
          _react2.default.createElement(
            _reactRouterDom.NavLink,
            { to: path },
            title
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Collapse,
          { 'in': expanded },
          _react2.default.createElement(
            'ul',
            { className: 'panel-body list-group' },
            children
          )
        )
      ) : _react2.default.createElement(
        'div',
        { className: 'panel sidebarMenu ' + (expanded ? 'active' : '') },
        _react2.default.createElement(
          'ul',
          { className: 'panel-body list-group' },
          children
        )
      );
    }
  }]);

  return Nav;
}(_reactRouterDom.Route);

Nav.propTypes = {
  path: _propTypes2.default.string,
  title: _propTypes2.default.string,
  children: _propTypes2.default.node
};
Nav.defaultProps = {
  path: '#',
  title: null,
  children: []
};
function NavItem(_ref2) {
  var path = _ref2.path,
      title = _ref2.title,
      children = _ref2.children;

  return _react2.default.createElement(
    'li',
    { className: 'list-group-item' },
    children || _react2.default.createElement(
      _reactRouterDom.NavLink,
      { to: path },
      title
    )
  );
}
NavItem.propTypes = {
  path: _propTypes2.default.string,
  title: _propTypes2.default.string,
  children: _propTypes2.default.node
};
NavItem.defaultProps = {
  path: '#',
  title: null,
  children: null
};

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rest = undefined;

var _ajax = __webpack_require__(727);

var rest = exports.rest = new _ajax.RestAjax();

exports.default = {};

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.COMMENTS = exports.COMMENTS_OF_ARTICLE = exports.ARTICLE_SINGLE = exports.ARTICLE_LIST = undefined;

var _templateObject = _taggedTemplateLiteral(['article/article_', '.json'], ['article/article_', '.json']),
    _templateObject2 = _taggedTemplateLiteral(['article/comments_', '.json'], ['article/comments_', '.json']);

var _urlTagger = __webpack_require__(732);

var _urlTagger2 = _interopRequireDefault(_urlTagger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ARTICLE_LIST = exports.ARTICLE_LIST = 'article/list.json';

var ARTICLE_SINGLE = exports.ARTICLE_SINGLE = (0, _urlTagger2.default)(_templateObject, 'articleId');

var COMMENTS_OF_ARTICLE = exports.COMMENTS_OF_ARTICLE = (0, _urlTagger2.default)(_templateObject2, 'articleId');

var COMMENTS = exports.COMMENTS = 'article/comments.json';

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actionNavOpened = undefined;
exports.open = open;
exports.close = close;

var _actionGenerator = __webpack_require__(246);

var _actionGenerator2 = _interopRequireDefault(_actionGenerator);

var _consts = __webpack_require__(571);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var actionNavOpened = exports.actionNavOpened = (0, _actionGenerator2.default)(_consts.KEY_NAV_OPENED);

function open() {
  actionNavOpened.payload = true;
  return actionNavOpened;
}
function close() {
  actionNavOpened.payload = false;
  return actionNavOpened;
}

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createAction;
exports.createRequestActions = createRequestActions;
/**
 * create an action with uniformed format. as {type: string, payload: *}
 *
 * @param {string} [type] - action identifier, if not passed in,
 * a random unique string is generated.
 * @returns {Object} - the action
 */
function createAction(type) {
  var _type = type;
  if (!_type) {
    _type = 'action' + Math.random().toString(16);
  }
  return {
    type: _type,
    payload: null
  };
}

/**
 * create a series of actions for ajax request (loading, received, failed).
 *  These actions are exported for other layers such as reducer,
 *  and persistent in cache for all subsequent invoking of this request,
 *  avoiding re-creating each time.
 *
 * @param {string} path - the request path, used as identity for these actions.
 *
 * @returns {Object} - { loading, received, failed }
 *
 */
function createRequestActions(path) {
  var _path = path;
  if (typeof _path === 'function') {
    _path = _path();
  }
  return {
    loading: createAction('LOADING_' + _path),
    received: createAction('RECEIVED_' + _path),
    failed: createAction('FAILED_' + _path)
  };
}

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeList = exports.navList = exports.reducers = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _registered = __webpack_require__(717);

var modules = _interopRequireWildcard(_registered);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var reducers = exports.reducers = {};
var navList = exports.navList = [];
var routeList = exports.routeList = [];

Object.entries(modules).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      k = _ref2[0],
      v = _ref2[1];

  v.getState = function getState(state) {
    return state[k];
  };
  var r = v.reducers,
      Navs = v.Navs,
      Routes = v.Routes;

  Navs.moduleName = k;
  Routes.moduleName = k;
  reducers[k] = r;
  navList.push(Navs);
  routeList.push(Routes);
});

/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadArticleList = exports.actionsArticleList = undefined;

var _globals = __webpack_require__(191);

var _urls = __webpack_require__(192);

var articlesRequester = _globals.rest.createRequester(_urls.ARTICLE_LIST);

var actionsArticleList = articlesRequester.actions,
    loadArticleList = articlesRequester.thunkRequest;
exports.actionsArticleList = actionsArticleList;
exports.loadArticleList = loadArticleList;

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Ajax;

var _requester = __webpack_require__(728);

var _requester2 = _interopRequireDefault(_requester);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @class
 * @classdesc A wrapper for `fetch`, to create a `fetch` with common configurations,
 *  which are not individual request specific. This is the first level abstraction to `fetch`,
 *  the second level is defined in `Requester`. This should work with `redux-thunk`.
 *
 * @param {?Object} fetchConfig - General fetch configurations. passed to `fetch`.
 * @param {Ajax~bodyRetrieverCallback} [bodyRetriever] - A custom handler to retrieve data
 *  from `fetch` response, by default `responseText` is gotten.
 * @param {Function} [receivedActionDispatcher] - A custom handler to dispatch data-received action,
 *  to handle special data format. It decides to dispatch or not, and what to dispatch.
 *  Refer to prototype method with the same name for function signature.
 * @param {Function} [failedActionDispatcher] -
 *  A custom handler being called dispatching request-failed action.
 *  Refer to prototype method with the same name for function signature.
 */
function Ajax(fetchConfig, bodyRetriever, loadingActionDispatcher, receivedActionDispatcher, failedActionDispatcher) {
  this.configs = Object.assign({}, this.configs, fetchConfig);
  if (bodyRetriever) {
    this.bodyRetriever = bodyRetriever;
  }
  if (loadingActionDispatcher) {
    this.loadingActionDispatcher = loadingActionDispatcher;
  }
  if (receivedActionDispatcher) {
    this.receivedActionDispatcher = receivedActionDispatcher;
  }
  if (failedActionDispatcher) {
    this.failedActionDispatcher = failedActionDispatcher;
  }

  var _configs = this.configs,
      headers = _configs.headers,
      method = _configs.method;


  if (!headers) {
    this.configs.headers = {};
  }
  if (method) {
    this.configs.method = method.toUpperCase();
  } else {
    this.configs.method = 'GET';
  }
} /**
   * roney
   * ajax util functions
   */


Ajax.prototype = {
  configs: {},
  /**
   * Create an instance of Requester which adopts configurations of this Ajax instance.
   *
   * @param {string} path - refer to class `Requester`.
   * @param {Requester~dataFilterCallback} [dataFilter] - refer to class `Requester`.
   *
   * @returns {Request} - instance of Requeter
   */
  createRequester: function createRequester(path, dataFilter) {
    return new _requester2.default(this, path, dataFilter);
  },

  /**
   * Default handler to retrieve data from `fetch` response.
   *  This returns `responseText` string directly.
   *
   * @param {Object} response - `fetch` response.
   *
   * @returns {string} - response text.
   */
  bodyRetriever: function bodyRetriever(response) {
    return response.responseText;
  },
  loadingActionDispatcher: function loadingActionDispatcher(dispatch, isLoading, requester) {
    // eslint-disable-line no-unused-vars
    console.log('isLoading', isLoading);
    if (isLoading) {
      this.failedActionDispatcher(dispatch, false);
    }
    requester.actions.loading.payload = isLoading;
    dispatch(requester.actions.loading);
  },

  /**
   *  A handler to dispatch data-received action.
   *
   * @param {Function} dispatch - redux store method `dispatch`.
   * @param {?Object} body - response body from server,
   *  passed to reducers for reference.
   * @param {Object} response - the response returned from `fetch`.
   *
   * @returns {undefined} - none
   *
   */
  receivedActionDispatcher: function receivedActionDispatcher(dispatch, body, requester) {
    console.log('body', body);
    this.loadingActionDispatcher(dispatch, false, requester);

    requester.actions.received.payload = body;
    dispatch(requester.actions.received);
  },

  /**
   *  A handler to dispatch request-failed action.
   *
   * @param {Function} dispatch - redux store method `dispatch`.
   * @param {?Object} error - error thrown from `fetch` or `dataRetriever`.
   * @param {Object} response - the response returned from `fetch`.
   *
   * @returns {undefined} - none
   */
  failedActionDispatcher: function failedActionDispatcher(dispatch, error, requester) {
    // eslint-disable-line no-unused-vars
    if (error) {
      console.error(error.message || 'Error occurs', error.code || 2001);
    }
    this.loadingActionDispatcher(dispatch, false, requester);

    requester.actions.failed.payload = error ? error.message || error : false;
    dispatch(requester.actions.failed);
  }
};

/**
 * Custom response data retriever, before passed to responseHandler (or dataFilter if any).
 *
 * @callback Ajax~bodyRetrieverCallback
 *
 * @param {Object} response - `fetch` response.
 * @param {Function} getState - redux store method `getState`.
 *
 * @returns {*} []
 */

/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadArticle = exports.actionsArticle = undefined;

var _globals = __webpack_require__(191);

var _urls = __webpack_require__(192);

var requester = _globals.rest.createRequester(_urls.ARTICLE_SINGLE);
var actionsArticle = requester.actions,
    request = requester.request,
    getActionCreator = requester.getActionCreator;


function loadArticle(articleId) {
  var articleData = void 0;
  return getActionCreator(function () {
    return request({ articleId: articleId }).then(function (article) {
      articleData = article;
      return request(_urls.COMMENTS_OF_ARTICLE, { articleId: articleId });
    }).then(function (comments) {
      articleData.comments = comments.comments;
      return articleData;
    });
  });
}

exports.actionsArticle = actionsArticle;
exports.loadArticle = loadArticle;

/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadComments = exports.actionsComments = undefined;

var _globals = __webpack_require__(191);

var _urls = __webpack_require__(192);

var commentsRequester = _globals.rest.createRequester(_urls.COMMENTS);

var actionsComments = commentsRequester.actions,
    loadComments = commentsRequester.thunkRequest;
exports.actionsComments = actionsComments;
exports.loadComments = loadComments;

/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(297);
__webpack_require__(299);
module.exports = __webpack_require__(501);


/***/ }),

/***/ 501:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(25);

var _reactRedux = __webpack_require__(73);

var _reactRouterDom = __webpack_require__(65);

var _redux = __webpack_require__(48);

var _reduxThunk = __webpack_require__(565);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _base = __webpack_require__(566);

__webpack_require__(744);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var middlewares = [_reduxThunk2.default];

if (true) {
  var _require = __webpack_require__(745),
      createLogger = _require.createLogger;

  middlewares.push(createLogger({
    collapsed: function collapsed(getState, action, logEntry) {
      return !logEntry.error;
    }
  }));
}

var store = (0, _redux.createStore)(_base.reducers, _redux.applyMiddleware.apply(undefined, middlewares));

(0, _reactDom.render)(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(
    _reactRouterDom.HashRouter,
    null,
    _react2.default.createElement(_reactRouterDom.Route, { path: '/', component: _base.App })
  )
), document.getElementById('root'));
console.log('process.env.NODE_ENV', "development" === 'production');
// <Route path={`${CFG.__PUBLIC_PATH__}`} component={App} />

/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducers = exports.App = undefined;

var _app = __webpack_require__(567);

var _app2 = _interopRequireDefault(_app);

var _reducerList = __webpack_require__(741);

var _reducerList2 = _interopRequireDefault(_reducerList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.App = _app2.default;
exports.reducers = _reducerList2.default;

/***/ }),

/***/ 567:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(165);

var _containers = __webpack_require__(568);

var _modules = __webpack_require__(291);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_modules.navList.unshift(_containers.NavHome);
_modules.routeList.unshift(_containers.RouteHome);

function App(_ref) {
  var match = _ref.match;

  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(_containers.Header, null),
    _react2.default.createElement(_containers.Body, { navList: _modules.navList, routeList: _modules.routeList, match: match }),
    _react2.default.createElement(
      'footer',
      null,
      '2017 \xA9 HNAIR'
    )
  );
}
App.propTypes = {
  match: _propTypes2.default.object.isRequired // eslint-disable-line react/forbid-prop-types
};
exports.default = App;

/***/ }),

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RouteHome = exports.NavHome = exports.Body = exports.Header = undefined;

var _header = __webpack_require__(569);

var _header2 = _interopRequireDefault(_header);

var _body = __webpack_require__(572);

var _body2 = _interopRequireDefault(_body);

var _navHome = __webpack_require__(573);

var _navHome2 = _interopRequireDefault(_navHome);

var _routeHome = __webpack_require__(715);

var _routeHome2 = _interopRequireDefault(_routeHome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Header = _header2.default;
exports.Body = _body2.default;
exports.NavHome = _navHome2.default;
exports.RouteHome = _routeHome2.default;

/***/ }),

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(73);

var _redux = __webpack_require__(48);

var _header = __webpack_require__(570);

var _header2 = _interopRequireDefault(_header);

var _navOpenedAc = __webpack_require__(245);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps(state) {
  return { isNavOpened: state.isNavOpened };
}
function mapDispatchProps(dispatch) {
  return (0, _redux.bindActionCreators)({ openNav: _navOpenedAc.open, closeNav: _navOpenedAc.close }, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchProps)(_header2.default);

/***/ }),

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = HeaderComp;

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _app = __webpack_require__(165);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function HeaderComp(_ref) {
  var isNavOpened = _ref.isNavOpened,
      openNav = _ref.openNav,
      closeNav = _ref.closeNav;

  function toggle() {
    if (isNavOpened) {
      closeNav();
    } else {
      openNav();
    }
  }
  return _react2.default.createElement(
    'nav',
    { className: 'navbar navbar-default navbar-fixed-top ' + _app2.default['Body-topbar'] },
    _react2.default.createElement(
      'div',
      { className: 'container-fluid' },
      _react2.default.createElement(
        'div',
        { className: 'navbar-header' },
        _react2.default.createElement(
          'button',
          {
            type: 'button',
            className: 'navbar-toggle collapsed',
            'data-toggle': 'collapse',
            'data-target': '#navbar',
            'aria-expanded': 'false',
            'aria-controls': 'navbar'
          },
          _react2.default.createElement(
            'span',
            { className: 'sr-only' },
            'Toggle navigation'
          ),
          _react2.default.createElement('span', { className: 'icon-bar' }),
          _react2.default.createElement('span', { className: 'icon-bar' }),
          _react2.default.createElement('span', { className: 'icon-bar' })
        ),
        _react2.default.createElement(
          'button',
          {
            type: 'button',
            className: 'navbar-toggle',
            onClick: toggle
          },
          _react2.default.createElement(
            'span',
            { className: 'sr-only' },
            'Toggle navigation'
          ),
          _react2.default.createElement('span', { className: 'icon-bar' }),
          _react2.default.createElement('span', { className: 'icon-bar' }),
          _react2.default.createElement('span', { className: 'icon-bar' })
        ),
        _react2.default.createElement(
          'a',
          { className: 'navbar-brand', href: '/' },
          _react2.default.createElement(
            'div',
            { className: 'g-logo' },
            'LOGO'
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { id: 'navbar', className: 'navbar-collapse collapse' },
        _react2.default.createElement(
          'ul',
          { className: 'nav navbar-nav' },
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '#' },
              'Menu'
            )
          ),
          _react2.default.createElement(
            'li',
            { className: 'dropdown' },
            _react2.default.createElement(
              'a',
              {
                href: '#',
                className: 'dropdown-toggle',
                'data-toggle': 'dropdown',
                role: 'button',
                'aria-haspopup': 'true',
                'aria-expanded': 'false'
              },
              'Dropdown ',
              _react2.default.createElement('span', { className: 'caret' })
            ),
            _react2.default.createElement(
              'ul',
              { className: 'dropdown-menu' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { href: '#' },
                  'Action'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { href: '#' },
                  'Another action'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { href: '#' },
                  'Something else here'
                )
              ),
              _react2.default.createElement('li', { role: 'separator', className: 'divider' }),
              _react2.default.createElement(
                'li',
                { className: 'dropdown-header' },
                'Nav header'
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { href: '#' },
                  'Separated link'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { href: '#' },
                  'One more separated link'
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'ul',
          { className: 'nav navbar-nav navbar-right' },
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '../navbar/' },
              'Menu'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '../navbar-static-top/' },
              'Menu'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: './' },
              'Menu ',
              _react2.default.createElement(
                'span',
                { className: 'sr-only' },
                '(current)'
              )
            )
          )
        )
      )
    )
  );
}
HeaderComp.propTypes = {
  isNavOpened: _propTypes2.default.bool,
  openNav: _propTypes2.default.func,
  closeNav: _propTypes2.default.func
};

/***/ }),

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var KEY_NAV_OPENED = exports.KEY_NAV_OPENED = 'is-nav-opened';

/***/ }),

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(73);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(65);

var _app = __webpack_require__(165);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Body(_ref) {
  var isNavOpened = _ref.isNavOpened,
      navList = _ref.navList,
      routeList = _ref.routeList,
      path = _ref.match.path;

  var home = path + 'home';
  return _react2.default.createElement(
    'div',
    { className: _app2.default.Body },
    _react2.default.createElement(
      'div',
      { className: _app2.default['Body-navPanel'] + ' ' + (isNavOpened ? _app2.default['Body-navPanel--in'] : '') },
      navList.map(function (Comp) {
        return _react2.default.createElement(Comp, { key: Comp.moduleName, path: '' + path + Comp.moduleName });
      })
    ),
    _react2.default.createElement(
      'div',
      { className: _app2.default['Body-main'] + ' ' + (isNavOpened ? _app2.default['Body-main--in'] : '') },
      _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        _react2.default.createElement(_reactRouterDom.Redirect, { key: home, exact: true, path: path, to: home }),
        routeList.map(function (Comp) {
          return _react2.default.createElement(Comp, { key: Comp.moduleName, path: '' + path + Comp.moduleName });
        })
      )
    )
  );
}

Body.propTypes = {
  isNavOpened: _propTypes2.default.bool.isRequired,
  match: _propTypes2.default.object.isRequired, // eslint-disable-line react/forbid-prop-types
  navList: _propTypes2.default.arrayOf(_propTypes2.default.func).isRequired,
  routeList: _propTypes2.default.arrayOf(_propTypes2.default.func).isRequired
};

function mapStateToProps(state) {
  return { isNavOpened: state.isNavOpened };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Body);

/***/ }),

/***/ 573:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NavHome;

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _nav = __webpack_require__(166);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NavHome(_ref) {
  var path = _ref.path;

  return _react2.default.createElement(_nav.Nav, { path: path, title: 'home' });
}
NavHome.propTypes = {
  path: _propTypes2.default.string.isRequired
};
NavHome.moduleName = 'home';

/***/ }),

/***/ 714:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 715:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RouteHome;

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(65);

var _home = __webpack_require__(716);

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function RouteHome(_ref) {
  var path = _ref.path;

  return _react2.default.createElement(_reactRouterDom.Route, {
    path: path,
    render: function render() {
      return _react2.default.createElement(_home2.default, { path: path });
    }
  });
}
RouteHome.propTypes = {
  path: _propTypes2.default.string.isRequired
};
RouteHome.moduleName = 'home';

/***/ }),

/***/ 716:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Home;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Home() {
  return _react2.default.createElement(
    'div',
    null,
    'Home'
  );
}

/***/ }),

/***/ 717:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.article = undefined;

var _article2 = __webpack_require__(718);

var _article = _interopRequireWildcard(_article2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.article = _article;

/***/ }),

/***/ 718:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Routes = exports.Navs = exports.reducers = undefined;

var _exporter = __webpack_require__(719);

var _exporter2 = _interopRequireDefault(_exporter);

var _registered = __webpack_require__(720);

var modules = _interopRequireWildcard(_registered);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _exportModules = (0, _exporter2.default)(modules, module.exports),
    reducers = _exportModules.reducers,
    Navs = _exportModules.Navs,
    Routes = _exportModules.Routes;

exports.reducers = reducers;
exports.Navs = Navs;
exports.Routes = Routes;

/***/ }),

/***/ 719:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = exportModules;

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(48);

var _reactRouterDom = __webpack_require__(65);

var _nav = __webpack_require__(166);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function exportModules(modules, upperModule) {
  var reducers = {};

  function Navs(_ref) {
    var path = _ref.path;

    return _react2.default.createElement(
      _nav.Nav,
      { title: 'Article', path: path },
      Object.entries(modules).map(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
            k = _ref3[0],
            v = _ref3[1];

        var N = v.Navs;

        return _react2.default.createElement(
          _nav.NavItem,
          { key: k },
          _react2.default.createElement(N, { path: path + '/' + k })
        );
      })
    );
  }
  Navs.propTypes = {
    path: _propTypes2.default.string.isRequired
  };

  var routeList = [];
  function Routes(_ref4) {
    var path = _ref4.path;

    return _react2.default.createElement(
      _reactRouterDom.Route,
      { path: path },
      _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        routeList.length && _react2.default.createElement(_reactRouterDom.Redirect, { key: 'redirect', path: path, exact: true, to: path + '/' + routeList[0].moduleName }),
        routeList.map(function (R) {
          return _react2.default.createElement(R, { key: R.moduleName, path: path + '/' + R.moduleName });
        })
      )
    );
  }
  Routes.propTypes = {
    path: _propTypes2.default.string.isRequired
  };

  Object.entries(modules).forEach(function (_ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
        k = _ref6[0],
        v = _ref6[1];

    v.getState = function getState(state) {
      var getStateUpper = upperModule.getState;

      return getStateUpper ? getStateUpper(state)[k] : state[k];
    };
    reducers[k] = (0, _redux.combineReducers)(v.reducers);
    v.Routes.moduleName = k;
    routeList.push(v.Routes);
  });

  reducers = (0, _redux.combineReducers)(reducers);
  return { reducers: reducers, Navs: Navs, Routes: Routes };
}

/***/ }),

/***/ 720:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.essay = undefined;

var _essay2 = __webpack_require__(126);

var _essay = _interopRequireWildcard(_essay2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.essay = _essay;
// export * as news from './news';
// export * as novel from './novel';

/***/ }),

/***/ 721:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Routes = exports.Navs = undefined;

var _navs = __webpack_require__(722);

var _navs2 = _interopRequireDefault(_navs);

var _routes = __webpack_require__(723);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Navs = _navs2.default;
exports.Routes = _routes2.default;

/***/ }),

/***/ 722:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NavArticle;

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _nav = __webpack_require__(166);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NavArticle(_ref) {
  var path = _ref.path;

  return _react2.default.createElement(
    _nav.Nav,
    { title: 'Essay', path: path },
    _react2.default.createElement(_nav.NavItem, { title: 'List', path: path + '/list' }),
    _react2.default.createElement(_nav.NavItem, { title: 'Article A', path: path + '/1' }),
    _react2.default.createElement(_nav.NavItem, { title: 'Article B', path: path + '/2' }),
    _react2.default.createElement(_nav.NavItem, { title: 'Comments', path: path + '/comments' })
  );
}
NavArticle.propTypes = {
  path: _propTypes2.default.string.isRequired
};

/***/ }),

/***/ 723:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Routes;

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(65);

var _articleListCt = __webpack_require__(724);

var _articleListCt2 = _interopRequireDefault(_articleListCt);

var _articleCt = __webpack_require__(733);

var _articleCt2 = _interopRequireDefault(_articleCt);

var _commentsCt = __webpack_require__(735);

var _commentsCt2 = _interopRequireDefault(_commentsCt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Routes(_ref) {
  var path = _ref.path;

  return _react2.default.createElement(
    _reactRouterDom.Switch,
    null,
    _react2.default.createElement(_reactRouterDom.Redirect, { key: path + '/redirect', exact: true, path: path, to: path + '/list' }),
    ',',
    _react2.default.createElement(_reactRouterDom.Route, {
      key: path + '/list',
      path: path + '/list',
      render: function render(_ref2) {
        var match = _ref2.match;
        return _react2.default.createElement(_articleListCt2.default, { path: match.url });
      }
    }),
    _react2.default.createElement(_reactRouterDom.Route, {
      key: path + '/comments',
      path: path + '/comments',
      render: function render(_ref3) {
        var match = _ref3.match;
        return _react2.default.createElement(_commentsCt2.default, { path: match.url, articleId: match.params.articleId });
      }
    }),
    _react2.default.createElement(_reactRouterDom.Route, {
      key: path + '/article',
      path: path + '/:articleId',
      render: function render(_ref4) {
        var match = _ref4.match;
        return _react2.default.createElement(_articleCt2.default, { path: match.url, articleId: match.params.articleId });
      }
    })
  );
}
Routes.propTypes = {
  path: _propTypes2.default.string.isRequired
};

/***/ }),

/***/ 724:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(48);

var _reactRedux = __webpack_require__(73);

var _articleList = __webpack_require__(725);

var _articleList2 = _interopRequireDefault(_articleList);

var _articleListAc = __webpack_require__(292);

var _ = __webpack_require__(126);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArticleListCt = function (_Component) {
  _inherits(ArticleListCt, _Component);

  function ArticleListCt() {
    _classCallCheck(this, ArticleListCt);

    return _possibleConstructorReturn(this, (ArticleListCt.__proto__ || Object.getPrototypeOf(ArticleListCt)).apply(this, arguments));
  }

  _createClass(ArticleListCt, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.loadArticleList();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_articleList2.default, this.props);
    }
  }]);

  return ArticleListCt;
}(_react.Component);

ArticleListCt.propTypes = {
  loadArticleList: _propTypes2.default.func.isRequired
};

function mapStateToProps(state) {
  return { articleList: (0, _.getState)(state).articleList.received };
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ loadArticleList: _articleListAc.loadArticleList }, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ArticleListCt);

/***/ }),

/***/ 725:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _abstract = __webpack_require__(726);

var _abstract2 = _interopRequireDefault(_abstract);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ArticleList(_ref) {
  var articleList = _ref.articleList,
      path = _ref.path;

  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(
      'div',
      null,
      'Article List'
    ),
    _react2.default.createElement(
      'ul',
      null,
      articleList.map(function (r) {
        return _react2.default.createElement(_abstract2.default, { key: r.id, data: r, path: path });
      })
    )
  );
}
ArticleList.propTypes = {
  path: _propTypes2.default.string.isRequired,
  articleList: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired
};
exports.default = ArticleList;

/***/ }),

/***/ 726:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Abstract;

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(65);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Abstract(_ref) {
  var path = _ref.path,
      data = _ref.data;
  var id = data.id,
      title = data.title,
      posted = data.posted,
      abstract = data.abstract;

  path = path.substr(0, path.lastIndexOf('/'));
  return _react2.default.createElement(
    'li',
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'span',
        null,
        '\u6807\u9898\uFF1A'
      ),
      _react2.default.createElement(
        _reactRouterDom.NavLink,
        { to: path + '/' + id },
        title
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'span',
        null,
        '\u53D1\u5E03\u65F6\u95F4\uFF1A'
      ),
      _react2.default.createElement(
        'span',
        null,
        posted
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'span',
        null,
        '\u6458\u8981\uFF1A'
      ),
      _react2.default.createElement(
        'span',
        null,
        abstract
      )
    )
  );
}
Abstract.propTypes = {
  path: _propTypes2.default.string.isRequired,
  data: _propTypes2.default.shape({
    id: _propTypes2.default.number.isRequired,
    title: _propTypes2.default.string.isRequired,
    posted: _propTypes2.default.string.isRequired,
    abstract: _propTypes2.default.string.isRequired
  }).isRequired
};

/***/ }),

/***/ 727:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RestAjax = exports.Ajax = undefined;

var _ajax = __webpack_require__(293);

var _ajax2 = _interopRequireDefault(_ajax);

var _restAjax = __webpack_require__(731);

var _restAjax2 = _interopRequireDefault(_restAjax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Ajax = _ajax2.default; /**
                                * roney
                                * ajax util functions
                                */

exports.RestAjax = _restAjax2.default;

/***/ }),

/***/ 728:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Requester;

var _actionGenerator = __webpack_require__(246);

var _fetcher = __webpack_require__(729);

var _fetcher2 = _interopRequireDefault(_fetcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @class
 * @classdesc The second level wrapper of `fetch`
 *
 * @param {Object} ajax - Ajax instance which created this request.
 * @param {string} path - url this request connecting.
 * //@param {Requester~responseHandlerCallback} [responseHandler] - Custom response data handler.
 *  when this is passed, the default action to dispatch success/fail action is left for your self.
 * @param {Requester~dataFilterCallback} [dataFilter] - a filter to transform response data
 *  before being sent to response handler.
 *
 */
/**
 * roney
 * ajax util functions
 */
function Requester(ajax, path, dataFilter) {
  this.ajax = ajax;
  this.path = path;
  // this.responseHandler = responseHandler;
  this.dataFilter = dataFilter;

  this.actions = (0, _actionGenerator.createRequestActions)(path);
  this.requests = [];

  this.request = this.request.bind(this);
  this.thunkRequest = this.thunkRequest.bind(this);
  this.getActionCreator = this.getActionCreator.bind(this);
}
Requester.prototype = {
  // @member {Object} refers to 'createRequestActions' in `action-generator.js`
  actions: null,
  // @member {Object} the parameters of current request.
  params: null,
  requests: null, // []
  // @member {string} a path belongs to current request, dedudes from general path with parameters.
  currentPath: '',
  getConfigs: function getConfigs() {
    delete this.ajax.configs.body; // left by previous request;
    return this.ajax.configs;
  },

  // @public
  request: function request(path, params) {
    var fetcher = new _fetcher2.default(this, path, params);
    this.requests.push(fetcher);
    return fetcher.fetch();
  },

  // @public
  thunkRequest: function thunkRequest(path, params) {
    var fetcher = new _fetcher2.default(this, path, params);
    this.requests.push(fetcher);
    return this.thunkAction.bind(this, fetcher);
  },
  thunkAction: function thunkAction(fetcher, dispatch, getState) {
    this.dispatch = dispatch;
    this.getState = getState;

    return this.handleResponse(fetcher.fetch());
  },

  // @public
  getActionCreator: function getActionCreator(job) {
    var _this = this;

    return function (dispatch, getState) {
      _this.dispatch = dispatch;
      _this.getState = getState;
      return _this.handleResponse(job());
    };
  },
  dispatchLoading: function dispatchLoading() {
    this.actions.loading.payload = !!this.requests.length;
    this.dispatch(this.actions.loading);
  },
  handleResponse: function handleResponse(result) {
    var _this2 = this;

    this.requests.splice(this.requests.indexOf(result.fetcher), 1);
    return result.then(function (data) {
      console.log('ajax fetch succeed', data);
      // if (this.responseHandler) {
      //   this.responseHandler(data, this.createReceivedDispatcher(dispatch), getState);
      // } else {
      // }
      var sendingData = _this2.dataFilter ? _this2.dataFilter(data, _this2.getState) : data;
      _this2.ajax.receivedActionDispatcher(_this2.dispatch, sendingData, _this2);
      return sendingData;
    }, function (err) {
      console.log('ajax failed', err);
      _this2.ajax.failedActionDispatcher(_this2.dispatch, err, _this2);
      // **We don't throw this error, in case no later promise.**
      return err;
    });
  }
};

/**
 * Custom response data handler. **This is called on `Requester` as its method.**
 *
 * @callback Requester~responseHandlerCallback
 *
 * @param {?*} data - data retrieved from `fetch` response, by `Ajax.bodyRetriever`.
 * @param {Requester~responseHandlerCallback~dispatcherCallback} dispatcher -
 *  a callback to dispatch data to ruducer.
 * @param {Function} getState - redux store method `getState`.
 *
 * @returns {undefined}
 */

/**
 * Callback to dispatch `received` action with data processed by `Requester~responseHandlerCallback.
 *
 * @callback Requester~responseHandlerCallback~dispatcherCallback
 *
 * @param {?*} data - data after being processed.
 *  a callback to dispatch data to ruducer.
 * @param {Function} getState - redux store method `getState`.
 *
 * @returns {undefined}
 */

/**
 * Custom handler to transform received request data.
 *  **This is called on `Requester` as its method.**
 *
 * @callback Requester~dataFilterCallback
 *
 * @param {?*} data - data retrieved from `fetch` response,
 *  format is defined by `Ajax.bodyRetriever`.
 * @param {Function} getState - redux store method `getState`.
 *
 * @returns {*} []
 */

/***/ }),

/***/ 729:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = Fetcher;

var _querystringify = __webpack_require__(730);

var _querystringify2 = _interopRequireDefault(_querystringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @class
 * @classdesc The third level wrapper of `fetch`
 *
 * @param {Object} requester - Requester instance which initiated this request call.
 * @param {string} [path] - path to override the default.
 * @param {*} [params] - request arguments.
 */
function Fetcher(requester, path, params) {
  if (path != null && (typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object') {
    params = path; // eslint-disable-line no-param-reassign
    path = null; // eslint-disable-line no-param-reassign
  }
  this.requester = requester;
  this.currentPath = path;
  this.params = params;
  this.init();
}
Fetcher.prototype = {
  requester: null,
  dispatch: null,
  getState: null,
  // @member {Object} the parameters of current request.
  params: null,
  response: null,
  // @member {string} a path belongs to current request, dedudes from general path with parameters.
  currentPath: '',
  init: function init() {
    this.configs = this.requester.getConfigs();
    var path = this.currentPath || this.requester.path;
    if (!path) throw new Error('Path is required.');

    if (typeof path === 'function') {
      this.currentPath = path(this.params);
    } else {
      this.currentPath = path;
    }

    this.currentPath = "mock/" + this.currentPath;

    if (this.params && Object.getOwnPropertyNames(this.params).length) {
      if (this.configs.method === 'GET' || this.configs.method === 'HEAD') {
        var _qs = _querystringify2.default.stringify(this.params);
        this.currentPath = this.currentPath + '?' + _qs;
      } else {
        this.configs.body = JSON.stringify(this.params);
      }
    }
  },
  fetch: function (_fetch) {
    function fetch() {
      return _fetch.apply(this, arguments);
    }

    fetch.toString = function () {
      return _fetch.toString();
    };

    return fetch;
  }(function () {
    var _this = this;

    // notify loading;
    this.requester.dispatchLoading();
    console.log('fetching...', this.currentPath);
    var result = fetch(this.currentPath, this.configs).then(function (rsp) {
      _this.response = rsp;
      if (rsp.ok) {
        return _this.requester.ajax.bodyRetriever(rsp);
      }

      var err = new Error(rsp.status + ':' + rsp.statusText);
      console.error(err);
      throw err;
    });
    result.fetcher = this;
    return result;
  })
};

/***/ }),

/***/ 731:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RestAjax;

var _ajax = __webpack_require__(293);

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * roney
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */

/* @class
 *
/* @classdesc
 * A predefined opinionated request to send & receive data of type of json,
 * mostly used for RESTFull API. this is exproted for convenience.
 * it should abide by a predefined format (refer to @see).
 *
 *
 * @see - response format:
 * - success:
 * {
 *    success: true,
 *    data: *,
 * }
 * - failed:
 * {
 *    success: false,
 *    message: '',
 * }
 *
 */
function RestAjax(fetchConfig, bodyRetriever, receivedActionDispatcher, failedActionDispatcher) {
  _ajax2.default.call(this, fetchConfig, bodyRetriever, receivedActionDispatcher, failedActionDispatcher);
}

RestAjax.prototype = Object.assign(new _ajax2.default(), {
  configs: {
    credentials: 'include', // allow token being stored in cookie;
    mode: 'cors', // allow cross-origin request
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  },
  bodyRetriever: function bodyRetriever(response) {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var body, msg;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return response.json();

            case 2:
              body = _context.sent;

              if (!(body && body.success)) {
                _context.next = 6;
                break;
              }

              console.log('body.data', body);
              return _context.abrupt('return', body.data);

            case 6:
              msg = body.message || 'Failed when requesting ' + response.url;

              console.warn(msg, 2000);
              throw new Error(msg);

            case 9:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

if (Object({"__SRC_DIR__":"/home/roney/web/react-scaffold-dashboard/src","__OUT_DIR__":"/home/roney/web/react-scaffold-dashboard/static","__ALIAS__":"[object Object]","__API_PATH__":"mock/","__MOCK__":true,"__PUBLIC_PATH__":""})['process.env.NODE_ENV'] === 'development') {
  delete RestAjax.prototype.configs.headers.Accept;
}

/***/ }),

/***/ 732:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = urlWithParams;
// eslint-disable-next-line
/**
 * create special url when it has params. this is a `tag` function for `tagged template string`.
 *
 * @usage -
 * ```
 * urlWithParams`verification/${'artId'}`;
 * ```
 */
function urlWithParams(parts) {
  for (var _len = arguments.length, keyArray = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    keyArray[_key - 1] = arguments[_key];
  }

  return function urlParser(params) {
    var _params = params || {};
    return parts.reduce(function (accumulated, part, i) {
      var val = _params[keyArray[i - 1]];
      delete _params[keyArray[i - 1]]; // params left then passed to post body;
      return accumulated + val + part;
    });
  };
}

/***/ }),

/***/ 733:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(48);

var _reactRedux = __webpack_require__(73);

var _article = __webpack_require__(734);

var _article2 = _interopRequireDefault(_article);

var _articleAc = __webpack_require__(294);

var _ = __webpack_require__(126);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArticleCt = function (_Component) {
  _inherits(ArticleCt, _Component);

  function ArticleCt() {
    _classCallCheck(this, ArticleCt);

    return _possibleConstructorReturn(this, (ArticleCt.__proto__ || Object.getPrototypeOf(ArticleCt)).apply(this, arguments));
  }

  _createClass(ArticleCt, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.loadArticle(this.props.articleId);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.articleId !== this.props.articleId) {
        this.props.loadArticle(nextProps.articleId);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_article2.default, this.props);
    }
  }]);

  return ArticleCt;
}(_react.Component);

ArticleCt.propTypes = {
  loadArticle: _propTypes2.default.func.isRequired,
  article: _propTypes2.default.object, // eslint-disable-line
  articleId: _propTypes2.default.string.isRequired
};

function mapStateToProps(state) {
  var _getState = (0, _.getState)(state),
      article = _getState.article;

  return { article: article.received, loading: article.loading };
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ loadArticle: _articleAc.loadArticle }, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ArticleCt);

/***/ }),

/***/ 734:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Article;

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/no-danger */
function Article(_ref) {
  var article = _ref.article,
      loading = _ref.loading;

  if (loading) {
    return '';
  } else if (article) {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: article.content } }),
      _react2.default.createElement('hr', null),
      _react2.default.createElement(
        'h4',
        null,
        'Comments:'
      ),
      _react2.default.createElement(
        'ul',
        null,
        article.comments.map(function (cmt) {
          var mid = cmt.mid,
              content = cmt.content,
              nick = cmt.nick,
              time = cmt.time;

          return _react2.default.createElement(
            'li',
            { key: mid },
            _react2.default.createElement(
              'div',
              null,
              time
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'span',
                null,
                nick
              ),
              _react2.default.createElement(
                'span',
                null,
                content
              )
            )
          );
        })
      )
    );
  }
  return _react2.default.createElement(
    'div',
    null,
    'non-found'
  );
}
Article.propTypes = {
  article: _propTypes2.default.shape({
    content: _propTypes2.default.string.isRequired,
    comments: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      mid: _propTypes2.default.oneOfType([_propTypes2.default.string.isRequired, _propTypes2.default.number.isRequired]),
      content: _propTypes2.default.string.isRequired,
      nick: _propTypes2.default.string.isRequired,
      time: _propTypes2.default.string.isRequired
    }))
  }),
  loading: _propTypes2.default.bool
};
Article.defaultProps = {
  article: null,
  loading: false,
  comments: []
};

/***/ }),

/***/ 735:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(48);

var _reactRedux = __webpack_require__(73);

var _comments = __webpack_require__(736);

var _comments2 = _interopRequireDefault(_comments);

var _commentsAc = __webpack_require__(295);

var _ = __webpack_require__(126);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommentsCt = function (_Component) {
  _inherits(CommentsCt, _Component);

  function CommentsCt() {
    _classCallCheck(this, CommentsCt);

    return _possibleConstructorReturn(this, (CommentsCt.__proto__ || Object.getPrototypeOf(CommentsCt)).apply(this, arguments));
  }

  _createClass(CommentsCt, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.loadComments();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_comments2.default, this.props);
    }
  }]);

  return CommentsCt;
}(_react.Component);

CommentsCt.propTypes = {
  loadComments: _propTypes2.default.func.isRequired
};

function mapStateToProps(state) {
  return { comments: (0, _.getState)(state).comments.received };
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ loadComments: _commentsAc.loadComments }, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CommentsCt);

/***/ }),

/***/ 736:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Comments;

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/no-danger */
function Comments(_ref) {
  var comments = _ref.comments;

  return comments ? _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(
      'h3',
      null,
      'All Comments'
    ),
    _react2.default.createElement(
      'ul',
      null,
      comments.map(function (cmt) {
        var mid = cmt.mid,
            content = cmt.content,
            nick = cmt.nick,
            time = cmt.time;

        return _react2.default.createElement(
          'li',
          { key: mid },
          _react2.default.createElement(
            'div',
            null,
            time
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'span',
              null,
              nick
            ),
            _react2.default.createElement(
              'span',
              null,
              content
            )
          )
        );
      })
    )
  ) : _react2.default.createElement(
    'div',
    null,
    'non-found'
  );
}
Comments.propTypes = {
  comments: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    mid: _propTypes2.default.oneOfType([_propTypes2.default.string.isRequired, _propTypes2.default.number.isRequired]),
    content: _propTypes2.default.string.isRequired,
    nick: _propTypes2.default.string.isRequired,
    time: _propTypes2.default.string.isRequired
  }))
};
Comments.defaultProps = {
  comments: []
};

/***/ }),

/***/ 737:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _articleListRd = __webpack_require__(738);

var _articleListRd2 = _interopRequireDefault(_articleListRd);

var _articleRd = __webpack_require__(739);

var _articleRd2 = _interopRequireDefault(_articleRd);

var _commentsRd = __webpack_require__(740);

var _commentsRd2 = _interopRequireDefault(_commentsRd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  articleList: _articleListRd2.default,
  article: _articleRd2.default,
  comments: _commentsRd2.default
};

/***/ }),

/***/ 738:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reducerGenerator = __webpack_require__(127);

var _articleListAc = __webpack_require__(292);

exports.default = (0, _reducerGenerator.createCombinedReducer)(_articleListAc.actionsArticleList, {
  received: function received() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];
    return _articleListAc.actionsArticleList.received === action ? action.payload.news : state;
  }
});

/***/ }),

/***/ 739:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reducerGenerator = __webpack_require__(127);

var _articleAc = __webpack_require__(294);

exports.default = (0, _reducerGenerator.createCombinedReducer)(_articleAc.actionsArticle);

/***/ }),

/***/ 740:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reducerGenerator = __webpack_require__(127);

var _commentsAc = __webpack_require__(295);

exports.default = (0, _reducerGenerator.createCombinedReducer)(_commentsAc.actionsComments, {
  received: function received() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];
    return _commentsAc.actionsComments.received === action ? action.payload : state;
  }
});

/***/ }),

/***/ 741:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _redux = __webpack_require__(48);

var _reducers = __webpack_require__(742);

var baseReducers = _interopRequireWildcard(_reducers);

var _modules = __webpack_require__(291);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = (0, _redux.combineReducers)(_extends({}, baseReducers, _modules.reducers));

/***/ }),

/***/ 742:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _navOpenRd = __webpack_require__(743);

Object.defineProperty(exports, 'isNavOpened', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_navOpenRd).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 743:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reducerGenerator = __webpack_require__(127);

var _navOpenedAc = __webpack_require__(245);

exports.default = (0, _reducerGenerator.createReducer)(_navOpenedAc.actionNavOpened, false);

/***/ })

},[296]);
//# sourceMappingURL=main.js.map