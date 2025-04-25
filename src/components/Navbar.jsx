import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavbarItems } from '../utils/NavbarItems';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1 className='navbar-logo'>Udaan Airways</h1>
      <ul className='navbar-items'>
        {
          NavbarItems.map((item, index) => {
            return (
              <li key={index} className='nav-links'>
                <NavLink className={item.className} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </NavLink>
              </li>
            );
          })
        }
      </ul>
    </nav>
  )
}

export default Navbar;
