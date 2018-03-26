import PropTypes from 'prop-types';
import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';

import './nav.css';

export class Nav extends Route {
  static propTypes = {
    path: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.node,
  };
  static defaultProps = {
    path: '#',
    title: null,
    children: [],
  };

  // constructor(props, context) {
  //   super(props, context);
  //   this.state.expanded = !!this.state.match;
  // }
  state = { match: this.state.match, expanded: !!this.state.match };
  // when no title, expanding/folding is not functioning;
  // state = { expanded: super.state.match };
  handleClick = () => this.setState({ expanded: !this.state.expanded });

  componentWillReceiveProps(nextProps, nextContext) {
    // can not read right after set;
    // super.componentWillReceiveProps(nextProps, nextContext);
    this.setState({ expanded: !!super.computeMatch(nextProps, nextContext.router) });
  }

  render() {
    const { title, children, path } = this.props;
    const { expanded } = this.state;
    return title ?
      <div className={`panel sidebarMenu ${expanded ? 'active' : ''}`}>
        <div className='panel-heading' onClick={this.handleClick}>
          <NavLink to={path} >{title}</NavLink>
        </div>
        <Collapse in={expanded}>
          <ul className='panel-body list-group'>
            {children}
          </ul>
        </Collapse>
      </div>
      :
      <div className={`panel sidebarMenu ${expanded ? 'active' : ''}`}>
        <ul className='panel-body list-group'>
          {children}
        </ul>
      </div>;
  }
}


export function NavItem({ path, title, children }) {
  return (
    <li className='list-group-item'>
      {
        children || <NavLink to={path}>{title}</NavLink>
      }
    </li>
  );
}
NavItem.propTypes = {
  path: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
};
NavItem.defaultProps = {
  path: '#',
  title: null,
  children: null,
};
