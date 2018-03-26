/**
 * roney
 */

import Ajax from './ajax';

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
export default function RestAjax(
  fetchConfig,
  bodyRetriever,
  receivedActionDispatcher,
  failedActionDispatcher,
) {
  Ajax.call(this, fetchConfig, bodyRetriever, receivedActionDispatcher, failedActionDispatcher);
}

RestAjax.prototype = Object.assign(new Ajax(), {
  configs: {
    credentials: 'include', // allow token being stored in cookie;
    mode: 'cors', // allow cross-origin request
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  },
  async bodyRetriever(response) {
    const body = await response.json();
    if (body && body.success) {
      console.log('body.data', body);
      return body.data;
    }
    const msg = body.message || `Failed when requesting ${response.url}`;
    console.warn(msg, 2000);
    throw new Error(msg);
  },
});

if (CFG['process.env.NODE_ENV'] === 'development') {
  delete RestAjax.prototype.configs.headers.Accept;
}
