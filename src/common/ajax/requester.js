/**
 * roney
 * ajax util functions
 */
import { createRequestActions } from 'Utils/action-generator';
import Fetcher from './fetcher';

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
export default function Requester(ajax, path, dataFilter) {
  this.ajax = ajax;
  this.path = path;
  // this.responseHandler = responseHandler;
  this.dataFilter = dataFilter;

  this.actions = createRequestActions(path);
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
  getConfigs() {
    delete this.ajax.configs.body; // left by previous request;
    return this.ajax.configs;
  },
  // @public
  request(path, params) {
    const fetcher = new Fetcher(this, path, params);
    this.requests.push(fetcher);
    return fetcher.fetch();
  },
  // @public
  thunkRequest(path, params) {
    const fetcher = new Fetcher(this, path, params);
    this.requests.push(fetcher);
    return this.thunkAction.bind(this, fetcher);
  },
  thunkAction(fetcher, dispatch, getState) {
    this.dispatch = dispatch;
    this.getState = getState;

    return this.handleResponse(fetcher.fetch());
  },
  // @public
  getActionCreator(job) {
    return (dispatch, getState) => {
      this.dispatch = dispatch;
      this.getState = getState;
      return this.handleResponse(job());
    };
  },
  dispatchLoading() {
    this.actions.loading.payload = !!this.requests.length;
    this.dispatch(this.actions.loading);
  },
  handleResponse(result) {
    this.requests.splice(this.requests.indexOf(result.fetcher), 1);
    return result.then(
      (data) => {
        console.log('ajax fetch succeed', data);
        // if (this.responseHandler) {
        //   this.responseHandler(data, this.createReceivedDispatcher(dispatch), getState);
        // } else {
        // }
        const sendingData = this.dataFilter ? this.dataFilter(data, this.getState) : data;
        this.ajax.receivedActionDispatcher(this.dispatch, sendingData, this);
        return sendingData;
      },
      (err) => {
        console.log('ajax failed', err);
        this.ajax.failedActionDispatcher(this.dispatch, err, this);
        // **We don't throw this error, in case no later promise.**
        return err;
      },
    );
  },
  bodyRetriever: bodyRetriever(rsp) {
    return this.ajax.bodyRetriever(rsp);
  },
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
