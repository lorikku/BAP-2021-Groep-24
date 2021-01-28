import * as React from 'react';
import { Redirect, Route, Switch, useParams } from 'react-router-dom';

import SubNav from '../../containers/global/SubNav';
import OverviewPage from './OverviewPage';

const ResidentsPages = ({ paths }) => {
  const pages = {
    OVERVIEW: {
      text: 'alle bewoners',
      path: () => paths.ROOT + paths.OVERVIEW,
    },
    MY_RESIDENTS: {
      text: 'mijn bewoners',
      path: () => paths.ROOT + paths.MY_RESIDENTS,
    },
    DETAIL_GENERAL: {
      text: 'algemene informatie',
      path: (detail = paths.DETAIL) =>
        paths.ROOT + detail + paths.DETAIL_GENERAL,
    },
    DETAIL_PLANNING: {
      text: 'persoonlijke planning',
      path: (detail = paths.DETAIL) =>
        paths.ROOT + detail + paths.DETAIL_PLANNING,
    },
  };

  //These will be used in the SubNavs
  const homePages = [pages.OVERVIEW, pages.MY_RESIDENTS];
  const detailPages = [pages.DETAIL_GENERAL, pages.DETAIL_PLANNING];

  return (
    <section>
      <Switch>
        {/* ---HOME PAGES--- */}
        {/* Overview page */}
        <Route path={pages.OVERVIEW.path()} exact>
          <SubNav navItems={homePages} />
          <OverviewPage />
        </Route>
        {/* My residents page */}
        <Route path={pages.MY_RESIDENTS.path()} exact>
          <SubNav navItems={homePages} />
          <p>Overzicht MIJN bewoners</p>
        </Route>
        {/* ---DETAIL PAGES--- */}
        <Route path={paths.ROOT + paths.DETAIL} strict>
          <SubNav navItems={detailPages} />
          <Switch>
            {/* Detail page with general info */}
            <Route path={pages.DETAIL_GENERAL.path()} exact>
              <p>Detail pagina bewoner: algemene info</p>
            </Route>
            {/* Detail page with personal planning */}
            <Route path={pages.DETAIL_PLANNING.path()} exact>
              <p>Detail pagina bewoner: persoonlijke plannen</p>
            </Route>
            {/* If ResidentID was filled in URL, without specifying /general or /planning 
            as trailing path => generate /general trailing path per default */}
            <Route>
              <AddGeneralTrailingPath pathNameGenerator={pages.DETAIL_GENERAL.path} />
            </Route>
          </Switch>
        </Route>
        {/* Redirect to overview if requested route was not found */}
        <Route>
          <Redirect to={pages.OVERVIEW.path()} />
        </Route>
      </Switch>
    </section>
  );
};

const AddGeneralTrailingPath = ({ pathNameGenerator }) => {
  const params = useParams();
  const firstParam = params[Object.keys(params)[0]];

  return <Redirect to={pathNameGenerator('/' + firstParam)} />;
};

export default ResidentsPages;
