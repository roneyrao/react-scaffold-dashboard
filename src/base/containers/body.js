import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import css from '../app.css';

function Body({
  isNavOpened, navList, routeList, match: { path },
}) {
  const home = `${path}home`;
  return (
    <div className={css.Body}>
      <div className={`${css['Body-navPanel']} ${isNavOpened ? css['Body-navPanel--in'] : ''}`}>
        {
          navList.map(Comp => <Comp key={Comp.moduleName} path={`${path}${Comp.moduleName}`} />)
        }
      </div>
      <div className={`${css['Body-main']} ${isNavOpened ? css['Body-main--in'] : ''}`}>
        <Switch>
          <Redirect key={home} exact path={path} to={home} />
          {
            routeList.map(Comp => <Comp key={Comp.moduleName} path={`${path}${Comp.moduleName}`} />)
          }
        </Switch>
      </div>
    </div>
  );
}

Body.propTypes = {
  isNavOpened: PropTypes.bool.isRequired,
  match: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  navList: PropTypes.arrayOf(PropTypes.func).isRequired,
  routeList: PropTypes.arrayOf(PropTypes.func).isRequired,
};

function mapStateToProps(state) {
  return { isNavOpened: state.isNavOpened };
}

export default connect(mapStateToProps)(Body);
