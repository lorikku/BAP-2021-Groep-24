import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const MatchingPages = ({ paths }) => {
  return (
    <Switch>
      <Route path={paths.ROOT} exact>
        <p>Matching pagina</p>
      </Route>
      <Route>
        <Redirect to={paths.ROOT} />
      </Route>
    </Switch>
  );
};

export default MatchingPages;
