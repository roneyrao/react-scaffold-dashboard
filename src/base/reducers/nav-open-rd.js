import { createReducer } from 'Utils/reducer-generator';
import { actionNavOpened } from '../actions/nav-opened-ac';

export default createReducer(actionNavOpened, false);
