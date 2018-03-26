import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Abstract({ path, data }) {
  const {
    id, title, posted, abstract,
  } = data;
  path = path.substr(0, path.lastIndexOf('/'));
  return (
    <li>
      <div>
        <span>标题：</span>
        <NavLink to={`${path}/${id}`}>
          {title}
        </NavLink>
      </div>
      <div>
        <span>发布时间：</span>
        <span>{posted}</span>
      </div>
      <div>
        <span>摘要：</span>
        <span>{abstract}</span>
      </div>
    </li>
  );
}
Abstract.propTypes = {
  path: PropTypes.string.isRequired,
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    posted: PropTypes.string.isRequired,
    abstract: PropTypes.string.isRequired,
  }).isRequired,
};
