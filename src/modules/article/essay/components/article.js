import PropTypes from 'prop-types';
import React from 'react';

/* eslint-disable react/no-danger */
export default function Article({ article, loading }) {
  if (loading) {
    return '';
  } else if (article) {
    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
        <hr />
        <h4>Comments:</h4>
        <ul>
          {article.comments.map((cmt) => {
            const {
              mid, content, nick, time,
            } = cmt;
            return (
              <li key={mid}>
                <div>{time}</div>
                <div>
                  <span>{nick}</span>
                  <span>{content}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  return <div>non-found</div>;
}
Article.propTypes = {
  article: PropTypes.shape({
    content: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape({
      mid: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]),
      content: PropTypes.string.isRequired,
      nick: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
    })),
  }),
  loading: PropTypes.bool,
};
Article.defaultProps = {
  article: null,
  loading: false,
  comments: [],
};
