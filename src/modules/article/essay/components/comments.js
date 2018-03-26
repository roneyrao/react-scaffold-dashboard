import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

/* eslint-disable react/no-danger */
export default function Comments({ comments }) {
  return comments ? (
    <Fragment>
      <h3>All Comments</h3>
      <ul>
        {comments.map((cmt) => {
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
    </Fragment>
  ) : (
    <div>non-found</div>
  );
}
Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    mid: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]),
    content: PropTypes.string.isRequired,
    nick: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  })),
};
Comments.defaultProps = {
  comments: [],
};
