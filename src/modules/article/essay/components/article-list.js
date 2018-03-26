import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import Abstract from './abstract';

function ArticleList({ articleList, path }) {
  return (
    <Fragment>
      <div>Article List</div>
      <ul>
        {
          articleList.map(r => (<Abstract key={r.id} data={r} path={path} />))
        }
      </ul>
    </Fragment>
  );
}
ArticleList.propTypes = {
  path: PropTypes.string.isRequired,
  articleList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default ArticleList;
