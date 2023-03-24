import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const navLinks = [
  { to: '/', label: 'Main' },
  { to: '/form', label: 'Form' },
  { to: '/about', label: 'About' },
];

class Header extends React.Component {
  getNavLinkClassName = ({ isActive }: { isActive: boolean }) => (isActive ? 'active' : '');

  render() {
    return (
      <header>
        {navLinks.map((link) => (
          <NavLink key={link.to} to={link.to} className={this.getNavLinkClassName}>
            {link.label}
          </NavLink>
        ))}
      </header>
    );
  }
}

export default Header;
