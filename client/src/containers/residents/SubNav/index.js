import * as React from 'react';
import { useLocation, useParams } from 'react-router-dom';

import SubNavItem from '../../../components/residents/SubNavItem';
import paths from '../../../consts/paths';

import './subnav.css';

const SubNav = ({ navItems }) => {
  /* useParams hook from react-router to get info about current path's params */
  const params = useParams();

  /* useLocation hook from react-router to get info about current path */
  const location = useLocation();
  const isPathActive = (path) => path === location.pathname;
  const isPathMyResidents = (path) =>
    path === paths.PATH_RESIDENTS.ROOT + paths.PATH_RESIDENTS.MY_RESIDENTS;

  return (
    <ul className="subnav">
      {/* For every navigation item in the array, make a new navitem with icon and text */}
      {navItems.map((navItem, index) => {
        const firstParam = params[Object.keys(params)[0]];
        const path = firstParam
          ? navItem.path('/' + firstParam)
          : navItem.path();

        return (
          <SubNavItem
            key={index}
            isMyResidents={isPathMyResidents(path)}
            isActive={isPathActive(path)}
            path={path}
            text={navItem.text}
          />
        );
      })}
    </ul>
  );
};

export default SubNav;
