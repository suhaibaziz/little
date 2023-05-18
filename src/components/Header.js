import React from 'react';
import Nav  from './Nav';
import logo from './Logo .svg';

const Header = () => {
  return (
    <header>
      
      <img src={logo}/>
      <Nav/>
    </header>
  );
};

export default Header;
