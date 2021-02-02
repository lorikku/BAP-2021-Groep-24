import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import OverviewPage from './OverviewPage';
import NewActivityPage from './NewActivityPage.js';

import './activitiespage.css';
import DetailPage from './DetailPage';

const ActivitiesPages = ({ paths }) => {
  return (
    <section className="activities fit-height">
      <Switch>
        <Route path={paths.ROOT + paths.OVERVIEW + paths.WEEK} exact>
          <OverviewPage />
        </Route>
        <Route path={paths.ROOT + paths.NEW_ACTIVITY} exact>
          <NewActivityPage />
        </Route>
        <Route path={paths.ROOT + paths.DETAIL} exact>
          <DetailPage />
        </Route>
        <Route>
          <Redirect to={paths.ROOT + paths.OVERVIEW + '/' + Date.now()} />
        </Route>
      </Switch>
    </section>
  );
};

export default ActivitiesPages;
