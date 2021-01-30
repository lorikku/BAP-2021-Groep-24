import * as React from 'react';
import { Link } from 'react-router-dom';

import './subnavitem.css';

const SubNavItem = ({ path, text, isActive, isMyResidents }) => {
  return (
    <li
      className={`subnavitem${isActive ? ' subnavitem--active' : ''} ${
        isMyResidents ? ' subnavitem--myresidents' : ''
      }`}
    >
      <Link className="subnavitem__wrapper" to={path}>
        {isMyResidents ? (
          <img
            alt="Een foto van een gevuld hartje."
            className="subnavitem__img"
            src="/assets/img/heart-filled.svg"
          />
        ) : null}
        <p>{text}</p>
      </Link>
    </li>
  );
};

export default SubNavItem;
