import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import OverviewPage from './OverviewPage';
import NewActivityPages from './NewActivityPages.js';

import './activitiespage.css';
import DetailPage from './DetailPage';

const ActivitiesPages = ({ paths }) => {
  return (
    <>
      <Switch>
        <Route path={paths.ROOT + paths.OVERVIEW} exact>
          <OverviewPage />
        </Route>
        <Route path={paths.ROOT + paths.NEW_ACTIVITY} exact>
          <NewActivityPages />
        </Route>
        <Route path={paths.ROOT + paths.DETAIL} exact>
          <DetailPage />
        </Route>
        <Route>
          <Redirect
            to={paths.ROOT + paths.OVERVIEW}
          />
        </Route>
      </Switch>
    </>
  );
};

export default ActivitiesPages;
