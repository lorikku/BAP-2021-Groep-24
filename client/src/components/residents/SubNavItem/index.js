import * as React from 'react';
import { Link } from 'react-router-dom';

import './subnavitem.css';

const SubNavItem = ({ path, text, isActive }) => {
  return (
    <li>
      <Link to={path}>
        <p className={`subnavitem${isActive ? ' subnavitem--active' : ''}`}>
          {text}
        </p>
      </Link>
    </li>
  );
};

export default SubNavItem;
