import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const ActivitiesPages = ({ paths }) => {
  return (
    <Switch>
      <Route path={paths.ROOT + paths.OVERVIEW + paths.WEEK} exact>
        <p>Overzicht activiteiten</p>
      </Route>
      <Route path={paths.ROOT + paths.NEW} exact>
        <p>Nieuwe activiteit</p>
      </Route>
      <Route path={paths.ROOT + paths.DETAIL} exact>
        <p>Detail activiteit</p>
      </Route>
      <Route>
        <Redirect to={paths.ROOT + paths.OVERVIEW + '/' + Date.now()} />
      </Route>
    </Switch>
  );
};

export default ActivitiesPages;
