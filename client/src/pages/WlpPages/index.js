import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import WlpContent from './WlpContent';

import './wlppage.css';

const WlpPages = ({ paths }) => {
  return (
    <section className="wlp-page">
      <Switch>
        <Route path={paths.ROOT + paths.DETAIL} exact>
          <WlpContent />
        </Route>
        <Route>
          <p className="notification">Bewoner niet gevonden</p>
        </Route>
      </Switch>
    </section>
  );
};

export default WlpPages;
