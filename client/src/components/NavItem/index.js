import * as React from 'react';

import './navitem.css';

const NavItem = ({ active, icon, text, logout }) => {
  return (
    <div className={`navitem ${active && 'active'} ${logout && 'logout'}`}>
      {icon}
      <p className={`navitem__text ${active && 'active'}`}>{text}</p>
    </div>
  );
};

export default NavItem;
