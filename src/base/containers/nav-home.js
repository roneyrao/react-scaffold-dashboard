import PropTypes from 'prop-types';
import React from 'react';

import { Nav } from 'Comps/nav';

export default function NavHome({ path }) {
  return (
    <Nav path={path} title='home' />
  );
}
NavHome.propTypes = {
  path: PropTypes.string.isRequired,
};
NavHome.moduleName = 'home';
