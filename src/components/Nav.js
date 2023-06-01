import React from 'react';
import logo from './Logo .svg';
import '../index.css'
import {Link} from'react-router-dom';
const Nav = () => {
  return (
    <nav className='navigation' >
      <ul>
      <img src={logo}/>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Specials">Specials</Link></li>
        <li><Link to="/CustomersSay">CustomesrSay</Link></li>
        <li><Link to="/Chicago">Chicago</Link></li>
        <li><Link to="/Booking">Booking</Link></li>
        <li><Link to="/Login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
