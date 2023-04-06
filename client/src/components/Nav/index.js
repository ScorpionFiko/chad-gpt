import React from 'react';
import './style.css';
import NavButton from '../NavButton';
import NavMenu from '../NavMenu';

function Navigation() {

  return (
    <nav className="navbar custom-navbar">
      <div className="navbar-brand px-3">Chad GPT</div>
      <NavButton />
      <NavMenu />

    </nav>
  );
}

export default Navigation;