import * as React from 'react';
import { Redirect, Route, Switch, useParams } from 'react-router-dom';

import MyResidentsPage from './MyResidentsPage';
import OverviewPage from './OverviewPage';
import DetailGeneralPage from './DetailGeneralPage';
import DetailPlanningPage from './DetailPlanningPage';
import DetailEditPage from './DetailEditPage';
import NewResidentPage from './NewResidentPage';
import DetailPage from './DetailPage';

import PopUpContact from '../../containers/residents/detail/PopUpContact';
import SubNav from '../../containers/residents/SubNav';

import { getPagesObj } from './pages';

import './residentspage.css';

const ResidentsPages = ({ paths }) => {
  //Pages that are in /residents route
  const pages = getPagesObj(paths);

  //These will be used in the SubNavs
  const homePages = [pages.OVERVIEW, pages.MY_RESIDENTS];
  const detailPages = [pages.DETAIL_GENERAL, pages.DETAIL_PLANNING];

  return (
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
        <MyResidentsPage />
      </Route>
      {/* Add new resident page */}
      <Route path={pages.NEW_RESIDENT.path()} exact>
        <NewResidentPage />
      </Route>
      {/* ---DETAIL PAGES--- */}
      <Route path={paths.ROOT + paths.DETAIL} strict>
        <Switch>
          {/* Detail page with general info */}
          <Route path={pages.DETAIL_GENERAL.path()} exact>
            <DetailPage showIcons={true} navItems={detailPages}>
              <DetailGeneralPage />
            </DetailPage>
          </Route>
          {/* Detail page with personal planning */}
          <Route path={pages.DETAIL_PLANNING.path()} exact>
            <DetailPage showIcons={true} navItems={detailPages}>
              <DetailPlanningPage />
            </DetailPage>
          </Route>
          {/* Edit resident */}
          <Route path={pages.DETAIL_EDIT_INTERESTS.path()} exact>
            <DetailPage showIcons={false} customImg={null}>
              <DetailEditPage />
            </DetailPage>
          </Route>
          {/* Add new contact to resident */}
          <Route path={pages.DETAIL_ADD_CONTACT.path()} exact>
            <PopUpContact />
          </Route>
          {/* If ResidentID was filled in URL, without specifying trailing path (like /general)
            => generate /general trailing path per default */}
          <Route>
            <AddGeneralTrailingPath
              pathNameGenerator={pages.DETAIL_GENERAL.path}
            />
          </Route>
        </Switch>
      </Route>
      {/* Redirect to overview if requested route was not found */}
      <Route>
        <Redirect to={pages.OVERVIEW.path()} />
      </Route>
    </Switch>
  );
};

const AddGeneralTrailingPath = ({ pathNameGenerator }) => {
  const params = useParams();
  const { residentId } = params;

  return <Redirect to={pathNameGenerator('/' + residentId)} />;
};

export default ResidentsPages;
