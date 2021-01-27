import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Redirect, Route, Switch } from 'react-router-dom';

import paths from './consts/paths';

import Header from './containers/Header';

import './App.css';


const App = () => {
  return (
    <div className="content">
      <Header />
      <main>
        <Switch>
          <Route path={paths.PATH_ACTIVITIES}>
            <p>Activities page</p>
          </Route>
          <Route path={paths.PATH_MATCHING}>
            <p>Matching page</p>
          </Route>
          <Route path={paths.PATH_HOME}>
            <p>Residents page</p>
          </Route>
          <Route>
            <Redirect to={paths.PATH_HOME} />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;
