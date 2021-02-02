import * as React from 'react';
import { Redirect, Route, Switch, useParams } from 'react-router-dom';

import SubNav from '../../containers/residents/SubNav';
import MyResidentsPage from './MyResidentsPage';
import OverviewPage from './OverviewPage';
import DetailGeneralPage from './DetailGeneralPage';
import DetailPlanningPage from './DetailPlanningPage';

import './residentspage.css';
import DetailHeader from '../../containers/residents/detail/DetailHeader';
import GoBack from '../../components/residents/detail/GoBack';
import { fetchResident, getPagesObj } from './funcs';

const ResidentsPages = ({ paths }) => {
  //Pages that are in /residents route
  const pages = getPagesObj(paths)

  //These will be used in the SubNavs
  const homePages = [pages.OVERVIEW, pages.MY_RESIDENTS];
  const detailPages = [pages.DETAIL_GENERAL, pages.DETAIL_PLANNING];

  //Fetching resident single from db
  const [resident, setResident] = React.useState(undefined);
  const [residentId, setResidentId] = React.useState(undefined);

  React.useEffect(() => {
    if (!residentId) {
      setResident(null);
      return;
    }

    fetchResident(residentId, setResident);
  }, [residentId]);

  
  return (
    <section className="residents fit-height">
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
          <p>Nieuwe bewoner toevoegen</p>
        </Route>
        {/* ---DETAIL PAGES--- */}
        <Route path={paths.ROOT + paths.DETAIL} strict>
          {resident ? (
            <>
              <GoBack
                path={pages.OVERVIEW.path()}
                text={'Terug naar overzicht'}
              />
              <DetailHeader resident={resident} />
            </>
          ) : null}
          <Switch>
            {/* Detail page with general info */}
            <Route path={pages.DETAIL_GENERAL.path()} exact>
              <DetailGeneralPage
                resident={resident}
                setResidentId={(residentId) => setResidentId(residentId)}
                navItems={detailPages}
              />
            </Route>
            {/* Detail page with personal planning */}
            <Route path={pages.DETAIL_PLANNING.path()} exact>
              <DetailPlanningPage
                resident={resident}
                setResidentId={(residentId) => setResidentId(residentId)}
                navItems={detailPages}
              />
            </Route>
            {/* Add new contact to resident */}
            <Route path={pages.DETAIL_ADD_CONTACT.path()} exact>
              <p>Nieuw contact toevoegen</p>
            </Route>
            {/* If ResidentID was filled in URL, without specifying /general or /planning 
            as trailing path => generate /general trailing path per default */}
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
    </section>
  );
};

const AddGeneralTrailingPath = ({ pathNameGenerator }) => {
  const params = useParams();
  const firstParam = params[Object.keys(params)[0]];

  return <Redirect to={pathNameGenerator('/' + firstParam)} />;
};

export default ResidentsPages;
