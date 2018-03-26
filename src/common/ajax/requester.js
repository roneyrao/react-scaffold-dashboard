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
  // requestPromise() {
  //   const promiseExecutor = {};
  //   const promise = new Promise((resolve, reject) => {
  //     promiseExecutor.resolve = resolve;
  //     promiseExecutor.reject = reject;
  //   });
  //   return { promise, request: this.request.bind(this, promiseExecutor) };
  // },
  /**
   * called by consumer. from consumer's perspective of view, this method acts as two characters.
   *  1) it acts as a `request/fetch`.
   *  2) it acts as an action creator.
   *  actually it returns a function that really do the `request`,
   *  this function is consumed by `redux-thunk` as an `action`.
   *
   * @param {Object} [params] - request parameters.
   *
   * @returns {Function} - an action consumed by `redux-thunk`.
   */
  // doRequest(promiseExecutor, params) {
  //   delete this.ajax.configs.body; // left by previous request;

  //   if (typeof this.path === 'function') {
  //     this.currentPath = this.path(params);
  //   } else {
  //     this.currentPath = this.path;
  //   }

  //   this.currentPath = CFG.__API_PATH__ + this.currentPath;

  //   if (params) {
  //     if (this.ajax.configs.method === 'GET' || this.ajax.configs.method === 'HEAD') {
  //       const _qs = qs.stringify(params);
  //       this.currentPath = `${this.currentPath}?${_qs}`;
  //     }
  //   } else {
  //     this.ajax.configs.body = JSON.stringify(params);
  //   }

  //   this.params = params;
  //   return this.actionRequest.bind(this, promiseExecutor);
  // },
  // actionRequest(promiseExecutor, dispatch, getState) {
  //   console.log('fetching...');
  //   // notify loading;
  //   dispatch(this.actions.loading);

  //   console.log('fetching...', this.currentPath);

  //   let response;
  //   return fetch(this.currentPath, this.ajax.configs)
  //     .then((rsp) => {
  //       response = rsp;
  //       if (rsp.ok) {
  //         return this.ajax.bodyRetriever(rsp);
  //       }

  //       const err = new Error(`${rsp.status}:${rsp.statusText}`);
  //       console.error(err);
  //       throw err;
  //     })
  //     .then(
  //       (data) => {
  //         console.log('ajax fetch succeed', data);
  //         // if (this.responseHandler) {
  //         //   this.responseHandler(data, this.createReceivedDispatcher(dispatch), getState);
  //         // } else {
  //         // }
  //         const sendingData = this.dataFilter ? this.dataFilter(data, getState) : data;
  //         this.ajax.receivedActionDispatcher(dispatch, sendingData, response);
  //         if (promiseExecutor) promiseExecutor.resolve(sendingData);
  //         return sendingData;
  //       },
  //       (err) => {
  //         console.log('ajax failed', err);
  //         this.ajax.failedActionDispatcher(dispatch, err, response);
  //         // **We don't throw this error, in case no later promise.**
  //         if (promiseExecutor) promiseExecutor.reject(err);
  //         return err;
  //       },
  //     );
  // },
  // createReceivedDispatcher(dispatch) {
  //   return (data) => {
  //     this.ajax.receivedActionDispatcher(dispatch, data, this.response);
  //   };
  // },
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
