import * as React from "react";
import { Redirect, Route, Switch, useParams } from "react-router-dom";

import DetailHeader from "../../containers/residents/detail/DetailHeader/DetailHeader";
import DetailActivities from "../../containers/residents/detail/DetailHeader/DetailActivities";

import SubNav from "../../containers/residents/SubNav";
import MyResidentsPage from "./MyResidentsPage";
import OverviewPage from "./OverviewPage";
import DetailGeneralPage from "./DetailGeneralPage";

import "./residentspage.css";
import DetailInteresting from "../../containers/residents/detail/DetailHeader/DetailInteresting";

const ResidentsPages = ({ paths }) => {
  const pages = {
    OVERVIEW: {
      text: "alle bewoners",
      path: () => paths.ROOT + paths.OVERVIEW,
    },
    MY_RESIDENTS: {
      text: "mijn bewoners",
      path: () => paths.ROOT + paths.MY_RESIDENTS,
    },
    DETAIL_GENERAL: {
      text: "algemene informatie",
      path: (detail = paths.DETAIL) =>
        paths.ROOT + detail + paths.DETAIL_GENERAL,
    },
    DETAIL_PLANNING: {
      text: "persoonlijke planning",
      path: (detail = paths.DETAIL) =>
        paths.ROOT + detail + paths.DETAIL_PLANNING,
    },
    DETAIL_ADD_CONTACT: {
      text: "persoonlijke planning",
      path: (detail = paths.DETAIL) =>
        paths.ROOT + detail + paths.DETAIL_ADD_CONTACT,
    },
    NEW_RESIDENT: {
      path: () => paths.ROOT + paths.NEW_RESIDENT,
    },
  };

  //These will be used in the SubNavs
  const homePages = [pages.OVERVIEW, pages.MY_RESIDENTS];
  const detailPages = [pages.DETAIL_GENERAL, pages.DETAIL_PLANNING];

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
          <Switch>
            {/* Detail page with general info */}
            <Route path={pages.DETAIL_GENERAL.path()} exact>
              <DetailGeneralPage navItems={detailPages} />
            </Route>
            {/* Detail page with personal planning */}
            <Route path={pages.DETAIL_PLANNING.path()} exact>
              <DetailHeader />
              <SubNav navItems={detailPages} />
              <div className="detailresident-personal-planning">
                <DetailActivities name={{ first: "Mathilda" }} />
                <DetailInteresting name={{ first: "Mathilda" }} />
              </div>
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

  return <Redirect to={pathNameGenerator("/" + firstParam)} />;
};

export default ResidentsPages;
