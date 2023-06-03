import React from 'react';
import '../index.css';
import {Link} from'react-router-dom';
const Footer = () => {
  return (
    <footer className='footer-container'>
        <section>
            <ul>
            <li><Link className='fo' to="/">Home</Link></li>
        <li><Link className='fo' to="/Specials">Specials</Link></li>
        <li><Link className='fo' to="/CustomersSay">CustomesrSay</Link></li>
        <li><Link className='fo' to="/Chicago">Chicago</Link></li>
        <li><Link className='fo' to="/Booking">Booking</Link></li>
        <li><Link className='fo' to="/Logon">Login</Link></li>
            </ul>
        </section>
      <p>&copy; 2023 <span style={{color :'white'}}>Eng.Suhaib Abdulaziz</span>. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
