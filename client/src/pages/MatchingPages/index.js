import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import MatchingProfileHeader from "../../containers/matching/MatchingProfileHeader";

const MatchingPages = ({ paths }) => {
  return (
    <Switch>
      <Route path={paths.ROOT} exact>
        <MatchingProfileHeader />
      </Route>
      <Route>
        <Redirect to={paths.ROOT} />
      </Route>
    </Switch>
  );
};

export default MatchingPages;
