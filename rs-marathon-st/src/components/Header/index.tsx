import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

class Header extends React.Component {
  render() {
    return (
      <div className="header-wrapper">
        <nav>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'link-active' : 'link')}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'link-active' : 'link')}>
            About us
          </NavLink>
        </nav>
      </div>
    );
  }
}

export default Header;
