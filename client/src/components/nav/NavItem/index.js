import * as React from 'react';

import './navitem.css';

const NavItem = ({ active, icon, text, logout }) => {
  return (
    <div
      className={`navitem${active ? ' navitem--active' : ''}${
        logout ? ' navitem--logout' : ''
      }`}
    >
      {icon}
      <p className={`navitem__text${active ? ' navitem__text--active' : ''}`}>
        {text}
      </p>
    </div>
  );
};

export default NavItem;
