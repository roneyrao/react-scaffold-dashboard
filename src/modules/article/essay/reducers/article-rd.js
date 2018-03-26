import { createCombinedReducer } from 'Utils/reducer-generator';
import { actionsArticle } from '../actions/article-ac';

export default createCombinedReducer(actionsArticle);
