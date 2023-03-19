import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
const navLinks = [
    { to: '/', label: 'Main' },
    { to: '/about', label: 'About' },
    { to: '/info', label: 'Info' },
];
class Header extends React.Component {
    getNavLinkClassName = ({ isActive }) => isActive ? "active" : "";
    render() {
        return (React.createElement("header", null, navLinks.map((link) => (React.createElement(NavLink, { key: link.to, to: link.to, className: this.getNavLinkClassName }, link.label)))));
    }
}
export default Header;
