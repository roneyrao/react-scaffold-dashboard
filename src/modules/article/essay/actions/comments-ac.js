import { rest } from 'Utils/globals';
import { COMMENTS } from './urls';

const commentsRequester = rest.createRequester(COMMENTS);

const { actions: actionsComments, thunkRequest: loadComments } = commentsRequester;

export { actionsComments, loadComments };
