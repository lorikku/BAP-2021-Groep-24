import * as React from 'react';

import NavBar from '../NavBar';

import './header.css';

const Header = () => {
  return (
    <header className="header">
    {/* top section (title + icon) */}
      <h1 className="visually-hidden">Heilig Hart</h1>
      <div className="header__wrapper">
        <img
          src="/assets/img/logo.png"
          alt="Het logo van Heilig Hart."
          width="63"
          height="36"
        />
        <p className="header__title">Heilig Hart</p>
        <a className="button header__newresident">
          <p>Nieuwe bewoner</p>
          <img src="/assets/img/plus-icon.svg" alt="Een nieuwe bewoner toevoegen"/>
        </a>
      </div>
      {/* navbar */}
      <NavBar/>
    </header>
  );
};

export default Header;
