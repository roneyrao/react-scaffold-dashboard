/**
 * create an action with uniformed format. as {type: string, payload: *}
 *
 * @param {string} [type] - action identifier, if not passed in,
 * a random unique string is generated.
 * @returns {Object} - the action
 */
export default function createAction(type) {
  let _type = type;
  if (!_type) {
    _type = `action${Math.random().toString(16)}`;
  }
  return {
    type: _type,
    payload: null,
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
export function createRequestActions(path) {
  let _path = path;
  if (typeof _path === 'function') {
    _path = _path();
  }
  return {
    loading: createAction(`LOADING_${_path}`),
    received: createAction(`RECEIVED_${_path}`),
    failed: createAction(`FAILED_${_path}`),
  };
}
