import * as React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import paths from '../../../consts/paths';

import NavItem from '../../../components/nav/NavItem';
import ActivitiesIcon from '../../../components/icons/ActivitiesIcon';
import MatchingIcon from '../../../components/icons/MatchingIcon';
import ResidentsIcon from '../../../components/icons/ResidentsIcon';
import LogoutIcon from '../../../components/icons/LogoutIcon';

import './navbar.css';

//Navigation items go in this array
const navItems = [
  {
    icon: (active) => <ResidentsIcon active={active} />,
    text: 'Bewoners',
    path: paths.PATH_HOME,
  },
  {
    icon: (active) => <ActivitiesIcon active={active} />,
    text: 'Activiteiten',
    path: paths.PATH_ACTIVITIES,
  },
  {
    icon: (active) => <MatchingIcon active={active} />,
    text: 'Matching',
    path: paths.PATH_MATCHING,
  },
  {
    icon: () => <LogoutIcon />,
    text: 'Uitloggen',
    path: paths.PATH_LOGOUT,
  },
];

const NavBar = () => {
  /* useLocation hook from react-router to get info about current path */
  const location = useLocation();
  const getRootFromPath = (path) => '/' + path.split('/')[1];
  const isPathActive = (path1, path2) => path1 === path2;

  /* path handling, to check which nav item is active (styling purposes) */
  const [currentRootPath, setCurrentRootPath] = React.useState(
    getRootFromPath(location.pathname)
  );

  React.useEffect(() => {
    setCurrentRootPath(getRootFromPath(location.pathname));
  }, [location]);

  const lastNavItem = navItems[navItems.length - 1];

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        {/* For every navigation item in the array, make a new navitem with icon and text */}
        {navItems.map((navItem, index) => {
          if (navItem === lastNavItem) return null;
          return (
            <li key={index} >
              <NavLink to={navItem.path}>
                <NavItem
                  /* if currentRootPath state equals the path of the navItem -> navitem & icon = active */
                  active={isPathActive(currentRootPath, navItem.path)}
                  icon={navItem.icon(
                    isPathActive(currentRootPath, navItem.path)
                  )}
                  text={navItem.text}
                />
              </NavLink>
            </li>
          );
        })}
      </ul>
      <NavLink className="navbar__logout" to={lastNavItem.path}>
        <NavItem
          /* if currentRootPath state equals the path of the navItem -> navitem & icon = active */
          active={isPathActive(currentRootPath, lastNavItem.path)}
          icon={lastNavItem.icon()}
          text={lastNavItem.text}
          logout
        />
      </NavLink>
    </nav>
  );
};

export default NavBar;
