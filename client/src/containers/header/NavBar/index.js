import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';

import paths from '../../../consts/paths';

import NavItem from '../../../components/header/NavItem';
import ActivitiesIcon from '../../../components/icons/ActivitiesIcon';
import MatchingIcon from '../../../components/icons/MatchingIcon';
import ResidentsIcon from '../../../components/icons/ResidentsIcon';
import LogoutIcon from '../../../components/icons/LogoutIcon';

import './navbar.css';

//Navigation items go in this array
const navItems = [
  {
    icon: (isActive) => <ResidentsIcon isActive={isActive} />,
    text: 'bewoners',
    path: paths.PATH_RESIDENTS.ROOT,
  },
  {
    icon: (isActive) => <ActivitiesIcon isActive={isActive} />,
    text: 'activiteiten',
    path: paths.PATH_ACTIVITIES.ROOT,
  },
  {
    icon: (isActive) => <MatchingIcon isActive={isActive} />,
    text: 'matching',
    path: paths.PATH_MATCHING.ROOT,
  },
  {
    icon: () => <LogoutIcon />,
    text: 'uitloggen',
    path: paths.PATH_LOGOUT.ROOT,
  },
];

const NavBar = () => {
  /* useLocation hook from react-router to get info about current path */
  const location = useLocation();
  const getRootFromPath = (path) => '/' + path.split('/')[1];
  const isPathActive = (path) => path === currentRootPath;

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
          const { path, icon, text } = navItem;
          if (navItem === lastNavItem) return null;
          return (
            <li key={index}>
              <Link to={path}>
                <NavItem
                  /* if currentRootPath state equals the path of the navItem -> navitem & icon = active */
                  isActive={isPathActive(path)}
                  icon={icon(isPathActive(path))}
                  text={text}
                />
              </Link>
            </li>
          );
        })}
      </ul>
      <Link className="navbar__logout" to={lastNavItem.path}>
        <NavItem
          /* if currentRootPath state equals the path of the navItem -> navitem & icon = active */
          isActive={isPathActive(lastNavItem.path)}
          icon={lastNavItem.icon()}
          text={lastNavItem.text}
          logout
        />
      </Link>
    </nav>
  );
};

export default NavBar;
