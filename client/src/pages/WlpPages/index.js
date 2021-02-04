import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import MatchingProfileHeader from "../../containers/matching/MatchingProfileHeader";
import MatchResult from "../../containers/matching/MatchResult";

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
