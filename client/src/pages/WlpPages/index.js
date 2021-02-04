import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

const WlpPages = ({ paths }) => {
  return (
    <Switch>
      <Route path={paths.ROOT} exact>
        <h2>Woon-en-leefplan</h2>
      </Route>
      <Route>
        <Redirect to={paths.ROOT} />
      </Route>
    </Switch>
  );
};

export default WlpPages;
