import { createCombinedReducer } from 'Utils/reducer-generator';
import { actionsComments } from '../actions/comments-ac';

export default createCombinedReducer(actionsComments, {
  received: (state = [], action) =>
    (actionsComments.received === action ? action.payload : state),
});
