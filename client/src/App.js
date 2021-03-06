import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Div100vh from 'react-div-100vh';

import paths from './consts/paths';

import Header from './containers/header/Header';
import ResidentsPage from './pages/ResidentsPages';
import ActivitiesPage from './pages/ActivitiesPages';
import MatchingPage from './pages/MatchingPages';
import WlpPages from './pages/WlpPages';

import PopUp from './containers/global/PopUp';

import './App.css';

const App = () => {
  return (
    /* Div100vh calculates div height for accurate display */
    <Div100vh className="content">
      <Switch>
        {/* WLP pages */}
        <Route path={paths.PATH_WLP.ROOT}>
          <WlpPages paths={paths.PATH_WLP} />
        </Route>
        {/* Platform pages */}
        <Route>
          <Header />
          <main className="page fit-height">
            <section className="fit-height">
              <PopUp />
              <Switch>
                {/* Activities pages */}
                <Route path={paths.PATH_ACTIVITIES.ROOT}>
                  <ActivitiesPage paths={paths.PATH_ACTIVITIES} />
                </Route>
                {/* Matching pages */}
                <Route path={paths.PATH_MATCHING.ROOT}>
                  <MatchingPage paths={paths.PATH_MATCHING} />
                </Route>
                {/* Residents pages */}
                <Route path={paths.PATH_RESIDENTS.ROOT}>
                  <ResidentsPage paths={paths.PATH_RESIDENTS} />
                </Route>
                {/* Redirect if no route was found */}
                <Route>
                  <Redirect to={paths.PATH_RESIDENTS.ROOT} />
                </Route>
              </Switch>
            </section>
          </main>
        </Route>
      </Switch>
    </Div100vh>
  );
};

export default App;
