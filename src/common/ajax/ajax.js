/**
 * roney
 * ajax util functions
 */
import Requester from './requester';

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
export default function Ajax(
  fetchConfig,
  bodyRetriever,
  loadingActionDispatcher,
  receivedActionDispatcher,
  failedActionDispatcher,
) {
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

  const { headers, method } = this.configs;

  if (!headers) {
    this.configs.headers = {};
  }
  if (method) {
    this.configs.method = method.toUpperCase();
  } else {
    this.configs.method = 'GET';
  }
}

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
  createRequester(path, dataFilter) {
    return new Requester(this, path, dataFilter);
  },
  /**
   * Default handler to retrieve data from `fetch` response.
   *  This returns `responseText` string directly.
   *
   * @param {Object} response - `fetch` response.
   *
   * @returns {string} - response text.
   */
  bodyRetriever(response) {
    return response.responseText;
  },
  loadingActionDispatcher(dispatch, isLoading, requester) { // eslint-disable-line no-unused-vars
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
  receivedActionDispatcher(dispatch, body, requester) {
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
  failedActionDispatcher(dispatch, error, requester) { // eslint-disable-line no-unused-vars
    if (error) {
      console.error(error.message || 'Error occurs', error.code || 2001);
    }
    this.loadingActionDispatcher(dispatch, false, requester);

    requester.actions.failed.payload = error ? (error.message || error) : false;
    dispatch(requester.actions.failed);
  },
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
