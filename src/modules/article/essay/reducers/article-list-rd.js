import { createCombinedReducer } from 'Utils/reducer-generator';
import { actionsArticleList } from '../actions/article-list-ac';

export default createCombinedReducer(actionsArticleList, {
  received: (state = [], action) =>
    (actionsArticleList.received === action ? action.payload.news : state),
});
