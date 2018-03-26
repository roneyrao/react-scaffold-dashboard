import PropTypes from 'prop-types';
import React from 'react';
import app from '../app.css';

export default function HeaderComp({ isNavOpened, openNav, closeNav }) {
  function toggle() {
    if (isNavOpened) {
      closeNav();
    } else {
      openNav();
    }
  }
  return (
    <nav className={`navbar navbar-default navbar-fixed-top ${app['Body-topbar']}`}>
      <div className='container-fluid'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#navbar'
            aria-expanded='false'
            aria-controls='navbar'
          >
            <span className='sr-only'>Toggle navigation</span>
            <span className='icon-bar' />
            <span className='icon-bar' />
            <span className='icon-bar' />
          </button>
          <button
            type='button'
            className='navbar-toggle'
            onClick={toggle}
          >
            <span className='sr-only'>Toggle navigation</span>
            <span className='icon-bar' />
            <span className='icon-bar' />
            <span className='icon-bar' />
          </button>
          <a className='navbar-brand' href='/' >
            <div className='g-logo' >LOGO</div>
          </a>
        </div>
        <div id='navbar' className='navbar-collapse collapse'>
          <ul className='nav navbar-nav'>
            <li>
              <a href='#'>Menu</a>
            </li>
            <li className='dropdown'>
              <a
                href='#'
                className='dropdown-toggle'
                data-toggle='dropdown'
                role='button'
                aria-haspopup='true'
                aria-expanded='false'
              >
                Dropdown <span className='caret' />
              </a>
              <ul className='dropdown-menu'>
                <li>
                  <a href='#'>Action</a>
                </li>
                <li>
                  <a href='#'>Another action</a>
                </li>
                <li>
                  <a href='#'>Something else here</a>
                </li>
                <li role='separator' className='divider' />
                <li className='dropdown-header'>Nav header</li>
                <li>
                  <a href='#'>Separated link</a>
                </li>
                <li>
                  <a href='#'>One more separated link</a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='../navbar/'>Menu</a>
            </li>
            <li>
              <a href='../navbar-static-top/'>Menu</a>
            </li>
            <li>
              <a href='./'>
                Menu <span className='sr-only'>(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
HeaderComp.propTypes = {
  isNavOpened: PropTypes.bool,
  openNav: PropTypes.func,
  closeNav: PropTypes.func,
};
