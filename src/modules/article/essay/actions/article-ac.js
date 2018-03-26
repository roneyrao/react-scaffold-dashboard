import { rest } from 'Utils/globals';
import { ARTICLE_SINGLE, COMMENTS_OF_ARTICLE } from './urls';

const requester = rest.createRequester(ARTICLE_SINGLE);
const { actions: actionsArticle, request, getActionCreator } = requester;

function loadArticle(articleId) {
  let articleData;
  return getActionCreator(() =>
    request({ articleId })
      .then((article) => {
        articleData = article;
        return request(COMMENTS_OF_ARTICLE, { articleId });
      })
      .then((comments) => {
        articleData.comments = comments.comments;
        return articleData;
      }));
}

export { actionsArticle, loadArticle };
