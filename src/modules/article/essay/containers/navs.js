import PropTypes from 'prop-types';
import React from 'react';

import { Nav, NavItem } from 'Comps/nav';

export default function NavArticle({ path }) {
  return (
    <Nav title='Essay' path={path}>
      <NavItem title='List' path={`${path}/list`} />
      <NavItem title='Article A' path={`${path}/1`} />
      <NavItem title='Article B' path={`${path}/2`} />
      <NavItem title='Comments' path={`${path}/comments`} />
    </Nav>
  );
}
NavArticle.propTypes = {
  path: PropTypes.string.isRequired,
};
