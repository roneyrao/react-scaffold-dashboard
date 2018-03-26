import { rest } from 'Utils/globals';
import { ARTICLE_LIST } from './urls';

const articlesRequester = rest.createRequester(ARTICLE_LIST);

const { actions: actionsArticleList, thunkRequest: loadArticleList } = articlesRequester;

export { actionsArticleList, loadArticleList };
