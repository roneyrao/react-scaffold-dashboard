import { combineReducers } from 'redux';
/**
 * create a general reducer, which simply assgins action.payload to store.
 *
 * @param {Object} expectedAction - action with predefined format created by action layer.
 * @param {string} [name] - reducer name for easy tracing when debug.
 * @param {*} [defaultValue] - default initial value or a filter function
 * @returns {Function} - created reducer function.
 */
export function createReducer(expectedAction, defaultValue) {
  defaultValue = defaultValue === undefined ? null : defaultValue;
  const reducer = function generalReducer(state = defaultValue, action) {
    return expectedAction === action ? action.payload : state;
  };
  // for easy tracing
  Object.defineProperty(reducer, 'name', { value: expectedAction.type });
  return reducer;
}


export function createCombinedReducer(actions, defaultValues) {
  const reducers = {};
  Object.entries(actions).forEach(([k, action]) => {
    const defVal = defaultValues && defaultValues[k];
    if (defVal && typeof defVal === 'function') { // filter is supplied
      reducers[k] = defVal;
    } else {
      reducers[k] = createReducer(action, defVal);
    }
  });
  return combineReducers(reducers);
}
