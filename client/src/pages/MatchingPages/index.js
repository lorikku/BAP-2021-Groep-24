import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import DetailPage from './DetailPage';
import MatchingPage from './MatchingPage';

import './matchingpage.css';

const MatchingPages = ({ paths }) => {
  return (
    <>
      <h2 className="visually-hidden">Matching pagina</h2>
      <Switch>
        <Route path={paths.ROOT} exact>
          <MatchingPage />
        </Route>
        <Route path={paths.ROOT + paths.DETAIL} exact>
          <DetailPage />
        </Route>
        <Route>
          <Redirect to={paths.ROOT} />
        </Route>
      </Switch>
    </>
  );
};

export default MatchingPages;
