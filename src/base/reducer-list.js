import { combineReducers } from 'redux';
import * as baseReducers from './reducers';
import { reducers as moduleReducers } from '../modules';

export default combineReducers({
  ...baseReducers,
  ...moduleReducers,
});
