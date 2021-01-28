import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Div100vh from 'react-div-100vh';

import paths from './consts/paths';

import Header from './containers/nav/Header';

import './App.css';


const App = () => {
  return (
    /* Div100vh calculates div height for accurate display */
    <Div100vh className="content">
      <Header />
      <main className="page">
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
    </Div100vh>
  );
};

export default App;
