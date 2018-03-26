import qs from 'querystringify';
/**
 * @class
 * @classdesc The third level wrapper of `fetch`
 *
 * @param {Object} requester - Requester instance which initiated this request call.
 * @param {string} [path] - path to override the default.
 * @param {*} [params] - request arguments.
 */
export default function Fetcher(requester, path, params) {
  if (path != null && typeof path === 'object') {
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
  init() {
    this.configs = this.requester.getConfigs();
    const path = this.currentPath || this.requester.path;
    if (!path) throw new Error('Path is required.');

    if (typeof path === 'function') {
      this.currentPath = path(this.params);
    } else {
      this.currentPath = path;
    }

    this.currentPath = CFG.__API_PATH__ + this.currentPath;

    if (this.params && Object.getOwnPropertyNames(this.params).length) {
      if (this.configs.method === 'GET' || this.configs.method === 'HEAD') {
        const _qs = qs.stringify(this.params);
        this.currentPath = `${this.currentPath}?${_qs}`;
      } else {
        this.configs.body = JSON.stringify(this.params);
      }
    }
  },
  fetch() {
    // notify loading;
    this.requester.dispatchLoading();
    console.log('fetching...', this.currentPath);
    const result = fetch(this.currentPath, this.configs)
      .then((rsp) => {
        this.response = rsp;
        if (rsp.ok) {
          return this.requester.ajax.bodyRetriever(rsp);
        }

        const err = new Error(`${rsp.status}:${rsp.statusText}`);
        console.error(err);
        throw err;
      });
    result.fetcher = this;
    return result;
  },
};
