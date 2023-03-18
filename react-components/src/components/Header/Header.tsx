import './Header.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header>
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
        >
          Main
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          About
        </NavLink>
        <NavLink
          to="/info"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Info
        </NavLink>
      </header>
    );
  }
}

export default Header;
