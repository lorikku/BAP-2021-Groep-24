import * as React from 'react';

import './navitem.css';

const NavItem = ({ isActive, icon, text, logout }) => {
  return (
    <div
      className={`navitem${isActive ? ' navitem--active' : ''}${
        logout ? ' navitem--logout' : ''
      }`}
    >
      {icon}
      <p className={`navitem__text${isActive ? ' navitem__text--active' : ''}`}>
        {text}
      </p>
    </div>
  );
};

export default NavItem;
