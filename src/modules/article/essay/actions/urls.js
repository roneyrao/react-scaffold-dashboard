import urlWithParams from 'Utils/url-tagger';

export const ARTICLE_LIST = 'article/list.json';

export const ARTICLE_SINGLE = urlWithParams`article/article_${'articleId'}.json`;

export const COMMENTS_OF_ARTICLE = urlWithParams`article/comments_${'articleId'}.json`;

export const COMMENTS = 'article/comments.json';
